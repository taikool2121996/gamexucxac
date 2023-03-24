// libs
import { FC } from 'react';
// styled-components
import { GameInfoWrapper } from './GameInfo.styles';

const GameInfo: FC = () => {
  const taiXiu = true;
  const soBanThang = 3;
  const soBanChoi = 3;
  return (
    <GameInfoWrapper className="pt-5">
      <h1>
        BẠN CHỌN: <span className="text-danger">{taiXiu ? 'TÀI' : 'XỈU'}</span>
      </h1>
      <h1>
        SỐ BÀN THẮNG: <span className="text-primary">{soBanThang}</span>
      </h1>
      <h1>
        TỔNG SỐ BÀN CHƠI: <span className="text-success">{soBanChoi}</span>
      </h1>
    </GameInfoWrapper>
  );
};

export default GameInfo;
