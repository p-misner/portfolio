import styled from 'styled-components';

const heroTextMobile = '48px';
const heroText = '72px';
const subtitleTextMobile = '20px';
const subtitleText = '24px';
const headerText = '20px';
const headerTextWeight = '600';
const heroMarginsMobile = '16px';
const heroMargins = '32px';
const topSpace = '24px';
const darkestBlue = '#082939';
const tealBlue = '#3C8696';
const borderRadius = '8px';
export const tabletBreakpoint = '700px';

export const TopSpacer = styled.div`
  height: 96px;
  @media (min-width: ${tabletBreakpoint}) {
    height: 160px;
  }
`;

export const BottomSpacer = styled.div`
  height: 96px;
`;

export const Wrapper = styled.div`
  width: auto;
  margin: 0px ${heroMarginsMobile};
  max-width: 968px;
  h2 {
    margin-top: 48px;
    margin-bottom: 16px;
  }
  @media (min-width: ${tabletBreakpoint}) {
    margin: 0px ${heroMargins};
  }
  @media (min-width: 1024px) {
    margin: 0px auto;
  }
`;

export const HeroText = styled.h1`
  font-size: ${heroTextMobile};
  line-height: 52px;
  @media (min-width: ${tabletBreakpoint}) {
    font-size: ${heroText};
    line-height: 80px;
  }
`;

export const HeroBody = styled.p`
  margin-top: ${topSpace};
  margin-bottom: 24px;
  font-size: ${subtitleTextMobile};
  line-height: 28px;
  @media (min-width: ${tabletBreakpoint}) {
    font-size: ${subtitleText};
    line-height: 38px;
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

export const MonospaceBody = styled(RegBody)`
  font-family: 'Inconsolata', monospace;
  font-weight: 300;
  opacity: 0.8;
`;

export const MonospaceHeader = styled.h3`
  font-family: 'Inconsolata', monospace;
  font-weight: 500;
`;

export const ItalicCaption = styled(RegBody)`
  font-style: italic;
  text-align: center;
  margin-bottom: 24px;
`;
export const ItalicBody = styled(RegBody)`
  font-style: italic;
`;

export const BulletList = styled.ul`
  list-style: square;
  padding-left: 48px;
  font-size: 16px;
  @media (min-width: ${tabletBreakpoint}) {
    font-size: 18px;
  }
`;
export const BulletListItem = styled.li`
  font-weight: 300;
  line-height: 30px;
`;

export const BoldBulletBody = styled.span`
  font-weight: 500;
  padding-right: 8px;
`;
// switch to mobile first pls
export const MediumImage = styled.img`
  width: 60vw;
  max-width: 700px;
  margin: 0px 0px 0px 0px;
  height: auto;
  @media (max-width: 768px) {
    width: 85vw;
  }
`;
export const BigImage = styled.img`
  width: 100%;
  height: auto;
  margin: 16px 0px;
`;

export const Video = styled.iframe`
  width: 100%;
  height: 45vw;
  max-height: 600px;
  margin: 0px auto;
`;

export const HalfSpacer = styled.div`
  height: 48px;
`;

export const BoldedLink = styled.span`
  font-weight: 500;
  cursor: pointer;
  color: #30a1ba;
  a {
    text-decoration: none;
    color: #30a1ba;
  }
  a:hover {
    background-image: linear-gradient(
      0deg,
      #6fd7ed 0%,
      #f4d998 22.4%,
      #eeb875 41.67%,
      #ffa534 67.19%,
      #f48667 96.87%
    );
    background-clip: text;
    color: transparent;

    background: -webkit-linear-gradient(
      0deg,
      #6fd7ed 0%,
      #f4d998 22.4%,
      #eeb875 41.67%,
      #ffa534 67.19%,
      #f48667 96.87%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    text-decoration: underline;
    text-decoration-color: ${darkestBlue};
    opacity: 1;
    text-decoration-style: wavy;
    text-underline-offset: 2px;
  }
`;
export const UnboldedLink = styled(BoldedLink)`
  font-weight: 300;
`;

export const RoleColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 12px 0px 0px;
  max-width: ${(props) => props.maxWidth || 'null'};
`;

export const BoldBody = styled(RegBody)`
  font-weight: 400;
`;
