import styled from 'styled-components';
import { theme } from 'styles/global';

export const ReadMoreSection = styled.section`
  width: 100%;
  height: 500px;
  position: fixed;
  z-index: 8;
  margin-top: -50px;
  background: #1a0b2e;
  padding-top: 25px;
`;

export const ReadMoreWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const ReadMoreClose = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  text-align: center;
  position: relative;
  width: auto;
  height: auto;
`;

export const ReadMoreLineClose = styled.div<{ second?: boolean }>`
  width: 25px;
  height: 2px;
  background-color: white;
  position: absolute;
  transform: ${({ second }) => (second && 'rotate(45deg)') || 'rotate(-45deg)'};
`;

export const ReadMoreTextBlock = styled.div`
  & p {
    font-family: ${theme.fonts.primary};
    font-size: 14px;
    font-style: normal;
    color: white;
    line-height: 30px;
    letter-spacing: 1px;

    & span {
      color: #7127ba;
    }
  }
`;
