import { IDiceGame } from './diceGame.types';

export const initialState: IDiceGame = {
  taiXiu: true, // true: tài (3 -> 11), false: xỉu (>= 12)
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    // Đường dẫn chỉ cần ./images là bởi vì lúc này giao diện đã được render ra ở index.html
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
