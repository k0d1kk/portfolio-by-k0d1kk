import styled from 'styled-components';
import { theme } from 'styles/global';

export const AboutMeSection = styled.section``;

export const AboutMeWrapper = styled.div`
  display: flex;
  width: 100%;
  column-gap: 20px;
`;

export const AboutMeAvatar = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 431px;
  background: radial-gradient(50% 50% at 50% 50%, #763cac 0%, rgba(50, 15, 133, 0) 100%);
  position: relative;

  & img {
    width: 110px;
    height: 110px;
  }
`;

export const AboutMeAvatarArrow = styled.img`
  position: absolute;
  display: flex;
  top: -50px;
  right: -20px;
`;

export const AboutMeAvatarHello = styled.p`
  color: #fff;
  font-family: ${theme.fonts.primary};
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  width: 130px;
  position: absolute;
  top: -27px;
  right: -136px;

  & span {
    color: #7127ba;
  }
`;

export const AboutMeButton = styled.div`
  width: auto;
  height: auto;
  max-height: 40px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: #7127ba;
  margin-top: auto;
  margin-bottom: 30px;
  transform: scale(0.97);

  & p {
    color: #fff;
    font-family: ${theme.fonts.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
  }

  &:hover {
    background-color: white;
    transform: scale(1);
    transition: 700ms;
    cursor: pointer;
    & p {
      color: #7127ba;
    }
  }
`;
