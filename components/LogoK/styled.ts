import styled from 'styled-components';
import { theme } from 'styles/global';

export const LogoKWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(142, 68, 173, 1);
  box-shadow: 0 0 0 0 rgba(142, 68, 173, 1);
  animation: pulse-purple 2s infinite;
  overflow: hidden;

  @keyframes pulse-purple {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(142, 68, 173, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
    }
  }
`;

export const LogoKLetter = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: 37px;
  transform: rotate(-18deg);
  color: white;
`;
