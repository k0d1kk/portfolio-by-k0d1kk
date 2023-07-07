import { FC } from 'react';
import { ButtonStyled } from './styled';
import { IButton } from './types';

export const Button: FC<IButton> = ({ children, ...props }) => {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
};
