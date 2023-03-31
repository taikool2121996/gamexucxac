import { IDiceGame } from './diceGame.types';

export const initialState: IDiceGame = {
  taiXiu: true,
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    {
      value: 1,
      image:
        'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905583/gamexucxac/01_vgyujk.png',
    },
    {
      value: 1,
      image:
        'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905583/gamexucxac/01_vgyujk.png',
    },
    {
      value: 1,
      image:
        'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905583/gamexucxac/01_vgyujk.png',
    },
  ],
};
