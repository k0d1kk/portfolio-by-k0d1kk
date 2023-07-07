import React, { useState } from 'react';
import {
  AboutMeAvatarArrow,
  AboutMeAvatar,
  AboutMeSection,
  AboutMeWrapper,
  AboutMeAvatarHello,
  AboutMeButton,
} from './styled';
import { Container } from 'styles/global';
import {
  ReadMoreClose,
  ReadMoreLineClose,
  ReadMoreSection,
  ReadMoreTextBlock,
  ReadMoreWrapper,
} from 'components/ReadMore/styled';
import Image from 'next/image';

export const AboutMe = () => {
  const [readMore, visibleReadMore] = useState(false);
  const toggleReadMoreOn = () => visibleReadMore(true);
  const toggleReadMoreOff = () => visibleReadMore(false);

  return (
    <AboutMeSection>
      {readMore && (
        <ReadMoreSection>
          <Container>
            <ReadMoreWrapper>
              <ReadMoreClose onClick={toggleReadMoreOff}>
                <ReadMoreLineClose />
                <ReadMoreLineClose second />
              </ReadMoreClose>
              <ReadMoreTextBlock>
                <p>
                  I am a <span>FrontEnd</span> web developer, functioning in the industry for{' '}
                  <span>3+ years now</span>. I create websites using designs from any platform.{' '}
                  <span>My story began in 2019</span> when I was offer to try something new. After
                  half a year, I really liked this activity and I continued to develop with the
                  Internet using <span>developer forums</span>, <span>videos on YouTube</span> and{' '}
                  <span>communication with other developers in social networks</span>. <br />
                  <br /> After reading this text, you should understand that it is never too late to
                  try something new and develop yourself.
                </p>
              </ReadMoreTextBlock>
            </ReadMoreWrapper>
          </Container>
        </ReadMoreSection>
      )}
      <Container>
        <AboutMeWrapper>
          <AboutMeAvatar>
            <Image src="images/avatar1.png" alt="" />
            <AboutMeAvatarArrow src="images/aboutmearrow.png" alt="" />
            <AboutMeAvatarHello>
              Hello! I am <span>k0d1kk</span>
            </AboutMeAvatarHello>
          </AboutMeAvatar>
          <AboutMeButton onClick={toggleReadMoreOn}>
            <p>Read about my story</p>
          </AboutMeButton>
        </AboutMeWrapper>
      </Container>
    </AboutMeSection>
  );
};
