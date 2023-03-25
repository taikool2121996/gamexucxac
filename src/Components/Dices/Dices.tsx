// libs
import { FC } from 'react';
// styled-components
import { DicesWrapper } from './Dices.styles';
// hooks
import { useAppSelector } from '../../store/hook';

const Dices: FC = () => {
  const mangXucXac = useAppSelector((state) => state.diceGame.mangXucXac);
  return (
    <DicesWrapper className="pt-5">
      {mangXucXac.map((xucXac, idx) => {
        return (
          <img
            key={idx}
            src={xucXac.image}
            width="70px"
            className="pr-1"
            alt="xuc xac"
          />
        );
      })}
    </DicesWrapper>
  );
};

export default Dices;
