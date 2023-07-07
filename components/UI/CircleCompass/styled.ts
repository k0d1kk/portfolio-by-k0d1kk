import styled from 'styled-components';

export const CircleCompassWrapper = styled.div`
  margin: 10px auto;
  width: 75px;
  height: 75px;
  background: green;
  border-radius: 50%;
`;

export const CircleCompassCircle = styled.div``;

export const CircleCompassMaskFull = styled.div`
  width: 75px;
  height: 75px;
  position: absolute;
  border-radius: 50%;
  clip: rect(0px, 75px, 75px, 37px);
  animation: fill ease-in-out 3s;
  transform: rotate(126deg);
`;

export const CircleCompassMaskHalf = styled.div`
  width: 75px;
  height: 75px;
  position: absolute;
  border-radius: 50%;
  clip: rect(0px, 75px, 75px, 37px);
`;

export const CircleCompassInsideText = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #fff;
  line-height: 130px;
  text-align: center;
  margin-top: 5px;
  margin-left: 5px;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const CircleCompassFill = styled.div`
  width: 75px;
  height: 75px;
  position: absolute;
  border-radius: 50%;
  clip: rect(0px, 37px, 75px, 0px);
  background-color: #1a0b2e;
  animation: fill ease-in-out 3s;
  transform: rotate(126deg);

  @keyframes fill {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(126deg);
    }
  }
`;
