import ActionBtn from "./ActionBtn";

const Details = () => {
  return (
    <div className="p-4 mt-10 ml-4 sm:ml-10 md:ml-20">
      <div className="text-white text-xl font-bold">! RC3-BASEMAPS</div>
      <div className="text-gray-50 text-sm mt-1">
        <span className="inline-flex items-center">
          <img src="/src/assets/us_flag.png" alt="US Flag" className="w-4 h-3 mr-1" />
          CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ
        </span>
      </div>
      <div className="text-gray-50 text-sm mt-2">
        Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord
        <div>
          <a href="#" className="underline ml-1" rel="noopener noreferrer">
            https://discord.gg/3r5NK4d
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        <ActionBtn text="JOIN" />
        <ActionBtn text="SPECTATE" />
        <ActionBtn text="JOIN AS COMMANDER" />
        <ActionBtn text="★ 13672" />
      </div>
    </div>
  );
};

export default Details;
