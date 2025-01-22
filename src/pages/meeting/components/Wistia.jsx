import { WistiaPlayer } from '@wistia/wistia-player-react';

const Wistia = () => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <WistiaPlayer
        mediaId="v8g9mwx7d6"
        autoplay={false}
        playerColor="#000000"
        volume={0.5}
        bigPlayButton={true}
        roundedPlayer={24}
        qualityMin={true}
        playBarControl={true}
        className='scale-x-[1.01] scale-y-[1.02] transform overflow-hidden'
      />
    </div>
  );
};

export default Wistia;
