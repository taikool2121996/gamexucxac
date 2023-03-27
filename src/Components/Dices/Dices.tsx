// libs
import { FC } from 'react';
// styled-components
import { DicesWrapper } from './Dices.styles';
// hooks
import { useAppSelector } from '../../store/hook';
// next-cloudinary to optimize image
import { CldImage } from 'next-cloudinary';

const Dices: FC = () => {
  const mangXucXac = useAppSelector((state) => state.diceGame.mangXucXac);
  return (
    <DicesWrapper className="pt-5">
      {mangXucXac.map((xucXac, idx) => {
        return (
          <CldImage
            key={idx}
            src={xucXac.image}
            width="70"
            height="70"
            className="pr-1"
            alt="xuc xac"
          />
        );
      })}
    </DicesWrapper>
  );
};

export default Dices;
