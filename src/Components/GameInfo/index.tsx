// libs
import { FC } from 'react';
// styled-components
import { GameInfoWrapper } from './GameInfo.styles';
// hooks
import { useAppSelector } from '../../store/hook';

const GameInfo: FC = () => {
  const { taiXiu, soBanThang, soBanChoi } = useAppSelector(
    (state) => state.diceGame,
  );

  return (
    <GameInfoWrapper className="pt-5">
      <h1>
        YOU CHOOSE:{' '}
        <span className="text-danger">{taiXiu ? 'OVER' : 'UNDER'}</span>
      </h1>
      <h1>
        WIN: <span className="text-primary">{soBanThang}</span>
      </h1>
      <h1>
        TOTAL PLAYS: <span className="text-success">{soBanChoi}</span>
      </h1>
    </GameInfoWrapper>
  );
};

export default GameInfo;
