import styled from 'styled-components';
import { theme } from 'styles/global';

export const HeaderSection = styled.section`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #1a0b2e;
  animation: header-pulse-purple 2s infinite;

  @keyframes header-pulse-purple {
    0% {
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
    }

    37% {
      box-shadow: 0 0 0 4px rgba(142, 68, 173, 0.4);
    }

    62% {
      box-shadow: 0 0 0 7px rgba(142, 68, 173, 0.3);
    }

    82% {
      box-shadow: 0 0 0 10px rgba(142, 68, 173, 0.1);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
    }
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.div`
  display: flex;
  row-gap: 7px;
  flex-direction: column;
  align-items: start;
  width: auto;

  &:hover {
    align-items: end;

    .header-button-first-line-open {
      order: 3;
      transition: 1s;
    }

    .header-button-second-line-open {
      order: 2;
      transition: 1s;
    }

    .header-button-third-line-open {
      order: 1;
      transition: 1s;
    }
  }
`;

export const HeaderButtonLineOpen = styled.div<{ second?: boolean; third?: boolean }>`
  width: ${({ second, third }) => (second && '25px') || (third && '20px') || '30px'};
  height: 3px;
  background-color: white;

  ${theme.responsive.tablet} {
    display: none;
  }
`;

export const HeaderMenuList = styled.div<{ mobileMenu?: boolean; header?: boolean }>`
  display: flex;
  column-gap: 10px;
  width: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: ${({ mobileMenu }) => mobileMenu && '20px'};
  flex-direction: ${({ mobileMenu }) => mobileMenu && 'column'};
  display: ${({ header }) => header && 'none'};

  .header-list-active {
    opacity: 0.7;
    animation: none;
    &:hover {
      animation: none;
      cursor: default;
    }
  }

  & p {
    &:hover {
      animation: header-list-hover 300ms;
      cursor: pointer;
    }
  }

  ${theme.responsive.tablet} {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
  }

  @keyframes header-list-hover {
    0% {
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0.7);
    }

    20% {
      box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.4);
    }

    50% {
      box-shadow: 0 0 0 6px rgba(142, 68, 173, 0.3);
    }

    70% {
      box-shadow: 0 0 0 12px rgba(142, 68, 173, 0.2);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(142, 68, 173, 0);
    }
  }
`;

export const HeaderMenuP = styled.p`
  font-family: ${theme.fonts.primary};
  font-size: 14px;
  border-radius: 10px;
  color: ${theme.colors.white};
`;
