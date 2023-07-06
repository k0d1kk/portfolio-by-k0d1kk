import styled from 'styled-components';

export const MobileMenuSection = styled.div`
  width: 100%;
  height: 100%;
  background: #1a0b2e;
  margin-top: -15px;
  position: fixed;
  z-index: 10;
  padding-top: 35px;
`;

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  row-gap: 45px;
`;

export const MobileMenuClose = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const MobileMenuLineClose = styled.div<{ second?: boolean }>`
  width: 25px;
  height: 2px;
  background-color: white;
  position: absolute;
  transform: ${({ second }) => (second && 'rotate(45deg)') || 'rotate(-45deg)'};
`;
