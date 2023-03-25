import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './diceGame.initialState';

export const diceGameSlice = createSlice({
  name: 'diceGame',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    pickTaiXiu: (state, action: PayloadAction<boolean>) => {
      state.taiXiu = action.payload;
    },
    datCuoc: (state) => {
      const mangXucXacRandom = [];
      const mang6XucXac = [
        {
          value: 1,
          image:
            'https://user-images.githubusercontent.com/72439970/227680252-6d6b8721-affc-401a-bc60-8e3b6a8bd3bf.png',
        },
        {
          value: 2,
          image:
            'https://user-images.githubusercontent.com/72439970/227680255-24833a01-498f-4f7e-9661-97cadda614ee.png',
        },
        {
          value: 3,
          image:
            'https://user-images.githubusercontent.com/72439970/227680257-ac0aeea2-354b-4273-a110-eac40e91a3f1.png',
        },
        {
          value: 4,
          image:
            'https://user-images.githubusercontent.com/72439970/227680259-28d61d03-a470-4728-8f28-cae594060d8b.png',
        },
        {
          value: 5,
          image:
            'https://user-images.githubusercontent.com/72439970/227680260-46fd6c30-1873-44c3-9887-b2b309dcfc49.png',
        },
        {
          value: 6,
          image:
            'https://user-images.githubusercontent.com/72439970/227680265-f50ecd55-c25c-4c97-8730-0a9b4bd4a69e.png',
        },
      ];

      // Tăng tổng số bàn chơi 1 đơn vị mỗi khi bấm đặt cược
      state.soBanChoi += 1;

      // Random 3 con xúc xắc
      for (let i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;
        const result = mang6XucXac.filter(
          (xucxac) => xucxac.value == soNgauNhien,
        );

        const xucXacNgauNhien = {
          value: soNgauNhien,
          image: result[0].image, // Đường dẫn chỉ cần ./images là bởi vì lúc này giao diện đã được render ra ở index.html
        };

        mangXucXacRandom.push(xucXacNgauNhien);
      }

      state.mangXucXac = mangXucXacRandom;

      // Tính tổng điểm xúc xắc
      const tongDiemXucXac = mangXucXacRandom.reduce((tongDiem, xucXac) => {
        return (tongDiem += xucXac.value);
      }, 0);
      console.log('tongDiemXucXac', tongDiemXucXac);

      // Kiểm tra số bàn thắng
      if (
        (state.taiXiu && tongDiemXucXac >= 12) ||
        (!state.taiXiu && tongDiemXucXac <= 11)
      ) {
        state.soBanThang += 1;
      }
    },
  },
});

export const { pickTaiXiu, datCuoc } = diceGameSlice.actions;

export default diceGameSlice.reducer;
