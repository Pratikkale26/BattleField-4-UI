import axios from "axios";

const API_URL = "http://localhost:3000/api";

export interface ServerInfoData {
  players: { current: number; max: number };
  ping: number;
  tickrate: string;
  settings: Record<string, string>;
  advanced: Record<string, number>;
  rules: Record<string, number>;
}

// Fetch server info
export const fetchServerInfo = async (): Promise<ServerInfoData> => {
  const response = await axios.get<ServerInfoData>(`${API_URL}/server-info`);
  return response.data;
};
