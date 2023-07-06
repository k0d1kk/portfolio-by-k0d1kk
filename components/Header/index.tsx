import React, { useState } from 'react';
import {
  HeaderButton,
  HeaderButtonLineOpen,
  HeaderMenuList,
  HeaderMenuP,
  HeaderSection,
  HeaderWrapper,
} from './styled';
import { Container } from 'styles/global';
import { LogoK } from 'components/LogoK';
import {
  MobileMenuClose,
  MobileMenuLineClose,
  MobileMenuSection,
  MobileMenuWrapper,
} from 'components/MobileMenu/styled';

export const Header = () => {
  const [menu, visionMenu] = useState(false);
  const toggleOnMenu = () => visionMenu(true);
  const toggleOffMenu = () => visionMenu(false);

  return (
    <HeaderSection>
      {menu && (
        <MobileMenuSection>
          <Container>
            <MobileMenuWrapper>
              <MobileMenuClose onClick={toggleOffMenu}>
                <MobileMenuLineClose />
                <MobileMenuLineClose second />
              </MobileMenuClose>
              <HeaderMenuList mobileMenu>
                <HeaderMenuP className="header-list-active">Home</HeaderMenuP>
                <HeaderMenuP>About</HeaderMenuP>
                <HeaderMenuP>Tech Stack</HeaderMenuP>
                <HeaderMenuP>Projects</HeaderMenuP>
                <HeaderMenuP>Contacts</HeaderMenuP>
              </HeaderMenuList>
            </MobileMenuWrapper>
          </Container>
        </MobileMenuSection>
      )}
      <Container>
        <HeaderWrapper>
          <LogoK />
          <HeaderButton onClick={toggleOnMenu}>
            <HeaderButtonLineOpen className="header-button-first-line-open" />
            <HeaderButtonLineOpen second className="header-button-second-line-open" />
            <HeaderButtonLineOpen third className="header-button-third-line-open" />
          </HeaderButton>
          <HeaderMenuList header>
            <HeaderMenuP className="header-list-active">Home</HeaderMenuP>
            <HeaderMenuP>About</HeaderMenuP>
            <HeaderMenuP>Tech Stack</HeaderMenuP>
            <HeaderMenuP>Projects</HeaderMenuP>
            <HeaderMenuP>Contacts</HeaderMenuP>
          </HeaderMenuList>
        </HeaderWrapper>
      </Container>
    </HeaderSection>
  );
};
