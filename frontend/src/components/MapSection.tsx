
import React from 'react';
import Map from './Map';

const MapSection: React.FC = () => {
  const mapData = [
    { mapName: 'DAWNBREAKER', gameMode: 'CONQUEST LARGE', imageUrl: 'https://assetsio.gnwcdn.com/golmud_railway_2.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp' },
    { mapName: 'PROPAGANDA', gameMode: 'CONQUEST LARGE', imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2013/10/7/1381161405298/Battlefield-4-3-008.jpg?width=445&dpr=1&s=none&crop=none' },
    { mapName: 'OPERATION LOCKER', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8U7nMLGw8G-q5W98w8EJVbGRWjrU2cyEuoQ&s' },
    { mapName: 'LANCANG DAM', gameMode: 'CONQUEST LARGE', imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2013/11/8/1383906948251/Battlefield-4-008.jpg?width=465&dpr=1&s=none&crop=none' },
    { mapName: 'SIEGE OF SHANGHAI', gameMode: 'CONQUEST LARGE', imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2013/11/8/1383906948251/Battlefield-4-008.jpg?width=465&dpr=1&s=none&crop=none' },
    { mapName: 'GOLMUD RAILWAY', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvzu8UXrJQ9kiB6GA2klVWDtcjXQ-Dv-lgA&s' },
        { mapName: 'PROPAGANDA', gameMode: 'CONQUEST LARGE', imageUrl: 'https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2013/07/battlefield-4.jpg' },
    { mapName: 'SIEGE OF SHANGHAI', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dLza5sIwb6USdvr02xDsvir7SWuK9l1qAw&s' },
        { mapName: 'DAWNBREAKER', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7ELnI0028Xtic5iQjFO8bwROqz8LlM3P_g&s' },
    { mapName: 'PROPAGANDA', gameMode: 'CONQUEST LARGE', imageUrl: 'https://assetsio.gnwcdn.com/paracel_storm_1.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp' },
    { mapName: 'OPERATION LOCKER', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpniTOSt3UYGlB4nrSWnvrJuHnAgucBGypA&s' },
    { mapName: 'LANCANG DAM', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUwzo1EaHZGMqJz41jht2Tm2Xb4GZOY7n5A&s' },
    { mapName: 'SIEGE OF SHANGHAI', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAud4AmK6GgcMo1rxd3uy7lJyUgUabVe_ZQ&s' },
    { mapName: 'GOLMUD RAILWAY', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSq_s0mQQzyCiv9eboorpHFwwKOyDQXwSXA&s' },
        { mapName: 'PROPAGANDA', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFFgC34AW_93e1P_Yho1ljqiXBrwe1RoRlQ&s' },
    { mapName: 'SIEGE OF SHANGHAI', gameMode: 'CONQUEST LARGE', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGIrwmEuKIoJcGBPGBDJ8sfUhHMKi99G5qWw&s' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4 ml-20">MAP ROTATION</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ml-20"> {/* Responsive grid */}
        {mapData.map((map, index) => (
          <Map key={index} {...map} /> // Spread map data as props
        ))}
      </div>
    </div>
  );
};

export default MapSection;