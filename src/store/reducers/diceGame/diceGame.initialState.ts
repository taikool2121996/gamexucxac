import { IDiceGame } from './diceGame.types';

export const initialState: IDiceGame = {
  taiXiu: true, // true: tài (3 -> 11), false: xỉu (>= 12)
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    // Đường dẫn chỉ cần ./images là bởi vì lúc này giao diện đã được render ra ở index.html
    { diem: 1, hinhAnh: '../../../../public/assets/images/1.png' },
    { diem: 1, hinhAnh: '../../../../public/assets/images/1.png' },
    { diem: 1, hinhAnh: '../../../../public/assets/images/1.png' },
  ],
};
