import styled from 'styled-components';
import {
  LinkedInIcon,
  ObservableIcon,
  TwitterIcon,
} from '../Images/svgs/iconsSvg';
import BackgroundBlur from '../Images/BackgroundBlur.png';

const darkestBlue = '#082939';
const tabletBreakpoint = '760px';
const tealBlue = '#3C8696';

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0px 32px 0px 0px;
  flex: 1 1 0px;
`;
const HorizontalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto 10px auto;
  flex-wrap: wrap;
  width: 90vw;
`;

const Wrapper = styled.div`
  width: auto;
  margin: 0px 32px;
  max-width: 968px;
  @media (min-width: ${tabletBreakpoint}) {
    margin: 0px 32px;
  }
  @media (min-width: 968px) {
    margin: 0px auto;
  }
`;
const BorderDiv = styled.div`
  border: 1px ${darkestBlue} solid;
  border-radius: 8px;
  padding: 16px 0px;
  margin-top: 48px;
  background-image: url(${BackgroundBlur});
  background-size: cover;
  background-position: center bottom;
`;
export const ExplorationText = styled.div`
  margin: 16px;
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;
export const RegBody = styled.p`
  font-weight: 300;
  margin-bottom: 8px;
  margin-top: 0px;
  line-height: 28px;
  font-size: 16px;
  @media (min-width: ${tabletBreakpoint}) {
    font-size: 18px;
    line-height: 28px;
  }
`;
export const ExplorationBody = styled(RegBody)`
  margin-bottom: 16px;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  cursor: pointer;
  svg:hover path {
    fill: ${tealBlue};
  }
  a:hover {
    opacity: 1;
  }
  svg {
    height: 24px;
    width: 24px;
    margin-left: 16px;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <BorderDiv>
        <ExplorationText>
          <h3> Contact Me</h3>
          <ExplorationBody>
            {' '}
            Have a cool dataset to share? Have some information you want
            visualized? Just want to say hi? Shoot me an email at priyamisner
            [at] gmail [dot] com
          </ExplorationBody>

          <IconRow>
            <ExplorationBody> Find me on the Internet:</ExplorationBody>
            <a
              title="View my Observable profile"
              href="https://www.linkedin.com/in/priyamisner/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ObservableIcon />
            </a>
            <a
              title="View my Twitter profile"
              href="https://www.linkedin.com/in/priyamisner/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterIcon />
            </a>
            <a
              title="View my LinkedIn profile"
              href="https://www.linkedin.com/in/priyamisner/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </IconRow>
        </ExplorationText>
      </BorderDiv>
      <HorizontalInfo>
        <Row>
          <p> © 2023 Priya Misner, All Rights Reserved</p>
        </Row>
      </HorizontalInfo>
    </Wrapper>
  );
};
