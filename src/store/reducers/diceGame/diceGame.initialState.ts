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
        'https://user-images.githubusercontent.com/72439970/227680252-6d6b8721-affc-401a-bc60-8e3b6a8bd3bf.png',
    },
    {
      value: 1,
      image:
        'https://user-images.githubusercontent.com/72439970/227680252-6d6b8721-affc-401a-bc60-8e3b6a8bd3bf.png',
    },
    {
      value: 1,
      image:
        'https://user-images.githubusercontent.com/72439970/227680252-6d6b8721-affc-401a-bc60-8e3b6a8bd3bf.png',
    },
  ],
};
