import styled from 'styled-components';
// import device from '@/styles/device';

export const GameContainer = styled.div`
  background-image: url('https://user-images.githubusercontent.com/72439970/227679244-34ed1bbb-cff8-48f0-9feb-3ca4ee9db1ef.png');
  height: 100vh;
`;

export const GameTitle = styled.h1``;

export const GameSection = styled.div``;

export const DiceSection = styled.div``;

export const PickButton = styled.div`
  & .btnTaiXiu {
    width: 200px;
    height: 200px;
    font-size: 45px;
    color: white;
    background-color: rgb(14, 135, 206);
    border: none;
    border-radius: 10px;
  }
  & .btnTaiXiuSelected {
    box-shadow: 1px 2px 16px 9px red;
  }
`;

export const InfoSection = styled.div``;
