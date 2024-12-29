// ServerInfo.tsx
import React, { useEffect, useState } from "react";
import { fetchServerInfo, ServerInfoData } from "../services/Api";
import SettingBtn from "./SettingBtn"

const ServerInfo: React.FC = () => {
  const [data, setData] = useState<ServerInfoData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const serverData = await fetchServerInfo();
        setData(serverData);
      } catch (error) {
        console.error("Error fetching server info:", error);
      }
    };
    getData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className=" text-white ml-20">
      {/* Players/Ping/Tickrate Section */}
      <div className="p-4 flex gap-20">
        <div>
          <h3 className="text-lg font-semibold mb-1">Players</h3>
          <p className="text-xl font-bold">
            {data.players.current}/{data.players.max}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Ping</h3>
          <p className="text-xl font-bold">{data.ping} ms</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">Tickrate</h3>
          <p className="text-xl font-bold">{data.tickrate}</p>
        </div>
      </div>
  
      {/* Settings, Advanced, and Rules in Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mr-96 ">
        {/* Settings Section */}
        <div className="p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Settings</h3>
          <div className="gap-2">
            {Object.entries(data.settings).map(([key, value]) => (
              <SettingBtn key={key} label={key} value={value} />
            ))}
          </div>
        </div>
  
        {/* Advanced Section */}
        <div className="p-4 rounded-lg shadow-lg ">
          <h3 className="text-lg font-semibold mb-2">Advanced</h3>
          <div className="gap-2">
            {Object.entries(data.advanced).map(([key, value]) => (
              <SettingBtn key={key} label={key} value={value} />
            ))}
          </div>
        </div>
  
        {/* Rules Section */}
        <div className="p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Rules</h3>
          <div className=" gap-2">
            {Object.entries(data.rules).map(([key, value]) => (
              <SettingBtn key={key} label={key} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ServerInfo;