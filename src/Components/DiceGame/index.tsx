// libs
import { FC } from 'react';
// components
import GameInfo from '../GameInfo';
// styled-components
import {
  GameContainer,
  BackgroundImage,
  GameTitle,
  GameSection,
  DiceSection,
  InfoSection,
} from './DiceGame.styles';

const DiceGame: FC = () => {
  return (
    <GameContainer>
      <BackgroundImage>
        <img
          src="https://user-images.githubusercontent.com/72439970/227679244-34ed1bbb-cff8-48f0-9feb-3ca4ee9db1ef.png"
          alt="Background image"
        />
      </BackgroundImage>
      <GameTitle className="text-center py-5">GAME ĐỔ XÚC XẮC REDUX</GameTitle>
      <GameSection className="container-fluid">
        <DiceSection className="row text-center">DiceSection</DiceSection>
        <InfoSection className="text-center">
          <GameInfo />
          <button
            className="btn btn-success mt-4 px-4 py-2"
            onClick={() => console.log('onClick')}
          >
            ĐẶT CƯỢC
          </button>
        </InfoSection>
      </GameSection>
    </GameContainer>
  );
};

export default DiceGame;
