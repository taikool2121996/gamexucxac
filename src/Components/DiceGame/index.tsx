// libs
import { FC } from 'react';
// components
import GameInfo from '../GameInfo';
import Dices from '../Dices/Dices';
// styled-components
import {
  GameContainer,
  GameTitle,
  GameSection,
  DiceSection,
  PickButton,
  InfoSection,
} from './DiceGame.styles';
// hooks
import { useAppSelector, useAppDispatch } from '../../store/hook';
// others
import {
  pickTaiXiu,
  datCuoc,
} from '../../store/reducers/diceGame/diceGame.slice';

const DiceGame: FC = () => {
  const dispatch = useAppDispatch();
  const taiXiu = useAppSelector((state) => state.diceGame.taiXiu);
  const pickDice = (value: boolean) => {
    dispatch(pickTaiXiu(value));
  };
  const datCuocDi = () => {
    dispatch(datCuoc());
  };
  return (
    <GameContainer>
      <GameTitle className="text-center py-5">DICE GAME</GameTitle>
      <GameSection className="container-fluid">
        <DiceSection className="row text-center">
          {/* Button Tài */}
          <PickButton className="col-4">
            <button
              className={`btnTaiXiu ${taiXiu && 'btnTaiXiuSelected'}`}
              onClick={() => pickDice(true)}
            >
              OVER
            </button>
          </PickButton>

          {/* 3 con xúc xắc */}
          <div className="col-4 d-flex align-items-center justify-content-center">
            <Dices />
          </div>

          {/* Button Xỉu */}
          <PickButton className="col-4">
            <button
              className={`btnTaiXiu ${!taiXiu && 'btnTaiXiuSelected'}`}
              onClick={() => pickDice(false)}
            >
              UNDER
            </button>
          </PickButton>
        </DiceSection>

        <InfoSection className="text-center">
          <GameInfo />
          <button
            className="btn btn-danger mt-4 px-4 py-2"
            onClick={() => datCuocDi()}
          >
            PLACE BET
          </button>
        </InfoSection>
      </GameSection>
    </GameContainer>
  );
};

export default DiceGame;
