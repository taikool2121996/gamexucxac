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
      // const mang6XucXac = [
      //   {
      //     value: 1,
      //     image:
      //       'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905583/gamexucxac/01_vgyujk.png',
      //   },
      //   {
      //     value: 2,
      //     image:
      //       'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905583/gamexucxac/02_ilbzga.png',
      //   },
      //   {
      //     value: 3,
      //     image:
      //       'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905583/gamexucxac/03_w6hvrg.png',
      //   },
      //   {
      //     value: 4,
      //     image:
      //       'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905583/gamexucxac/04_ejyv1h.png',
      //   },
      //   {
      //     value: 5,
      //     image:
      //       'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905584/gamexucxac/05_z4his6.png',
      //   },
      //   {
      //     value: 6,
      //     image:
      //       'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905584/gamexucxac/06_ixe4d1.png',
      //   },
      // ];

      // Tăng tổng số bàn chơi 1 đơn vị mỗi khi bấm đặt cược
      state.soBanChoi += 1;

      // Random 3 con xúc xắc
      for (let i = 0; i < 3; i++) {
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // const result = mang6XucXac.filter(
        //   (xucxac) => xucxac.value == soNgauNhien,
        // );

        const xucXacNgauNhien = {
          value: soNgauNhien,
          // image: result[0].image, // Đường dẫn chỉ cần ./images là bởi vì lúc này giao diện đã được render ra ở index.html
          image:
            'https://res.cloudinary.com/dspvt4i0c/image/upload/v1679905584/gamexucxac/06_ixe4d1.png',
        };
        console.log(xucXacNgauNhien.image);
        mangXucXacRandom.push(xucXacNgauNhien);
      }

      state.mangXucXac = mangXucXacRandom;

      // Tính tổng điểm xúc xắc
      const tongDiemXucXac = mangXucXacRandom.reduce((tongDiem, xucXac) => {
        return (tongDiem += xucXac.value);
      }, 0);

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
