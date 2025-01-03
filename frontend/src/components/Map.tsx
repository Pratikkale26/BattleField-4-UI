// Map.tsx (Individual Map Component)
import React from 'react';

interface MapProps {
  mapName: string;
  gameMode: string;
  imageUrl: string;
}

const Map: React.FC<MapProps> = ({ mapName, gameMode, imageUrl }) => {
  return (
    <div className="group relative w-48 h-32 md:w-64 md:h-40 lg:w-72 lg:h-48 rounded-md overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <img src={imageUrl} alt={mapName} className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-110" />
      <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2 text-white text-sm md:text-base">
        <div className="font-semibold">{gameMode}</div>
        <div>{mapName}</div>
      </div>
       <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
    </div>
  );
};

export default Map;

