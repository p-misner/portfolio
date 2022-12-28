import styled from 'styled-components';
import {Link} from 'react-router-dom';

const heroTextMobile = '48px';
const heroText = '72px';
const subtitleTextMobile = '20px';
const subtitleText = '24px';

const headerText = "24px";
const headerTextWeight = "600"
const heroMarginsMobile = '16px';
const heroMargins= '32px';
const topSpace = '24px';
const darkestBlue = "#082939";
const tealBlue = "#3C8696";
const borderRadius  = '8px';
const tabletBreakpoint = '760px';

export const TopSpacer = styled.div`
    height:96px;
    @media (min-width: ${tabletBreakpoint}) {
        height:160px;
      }
`;

export const BottomSpacer = styled.div`
    height:96px;
`;

export const Wrapper = styled.div`
    width:auto;
    margin:0px ${heroMarginsMobile};
    max-width: 968px;
    @media (min-width: ${tabletBreakpoint}) {
        margin: 0px ${heroMargins};
      }
    @media (min-width: 1024px) {
        margin: 0px auto;
      }
`;

export const HeroText = styled.h1`
    font-size: ${heroTextMobile};
    line-height:48px;
    margin-bottom:32px;
    @media (min-width: ${tabletBreakpoint}) {
        font-size: ${heroText};
        margin-bottom:48px;
    }
   
`;

export const HeroBody = styled.p`
    margin-top:${topSpace};
	margin-bottom: 24px;
    font-size: ${subtitleTextMobile};
    line-height:28px;
    @media (min-width: ${tabletBreakpoint}) {
        font-size: ${subtitleText};
        line-height:38px;
    }
`;

export const SectionHeading = styled.h2`
    margin: 0px;
    margin-top: 64px;
    margin-bottom:8px;

`;

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction:column;
    background-color:#fff;
    border: 1px ${darkestBlue} solid;
    border-radius:${borderRadius};
    margin: 0px auto ${heroMarginsMobile} auto;
    // max-width: 600px;
    @media (min-width: ${tabletBreakpoint}) {
        margin: 0px 0px ${heroMargins}  0px;
        flex-direction: row-reverse;
        max-width: none;
    }

`;

export const ContentWrapper = styled.div`
    width:auto;
    display:flex;
    flex-direction:column;
    flex-flow:column;
    align-item:flex-start;
    justify-content:flex-end;
    margin: 0px 16px;
    z-index:8;
    h2{
        font-size:20px;
        font-weight: ${headerTextWeight};
        line-height: 30px;
        margin-bottom:8px;
    }
    @media (min-width: ${tabletBreakpoint}) {
        justify-content:flex-start;
        h2 {
            font-size: ${headerText}; 
        }

    }
`;
    
export const Image = styled.div`
    height:70vw;
    background:url(${props=> props.image});
    background-size: cover;
    background-position: center;
    border-top: 1px ${darkestBlue} solid;
    border-radius:${borderRadius};
    @media (min-width: ${tabletBreakpoint}) {
        width: 320px;
        min-height:320px;
        flex-shrink: 0;
        height: auto;
        margin: 0px;
        // border-right: 1px ${darkestBlue} solid;
    }
`;

export const WaveImg = styled.div`
    z-index:10;
    background:url(${props=> props.imageHoriz});
    background-size: contain;
    background-position: center;
    width:102px;
    position: relative;
    @media (min-width: ${tabletBreakpoint}) {
        width:32px;
        background:url(${props=> props.imageVert});
        left: -7px;
        background-repeat-x: no-repeat;

    }
    
`;


export const Overline = styled.p`
`;


export const HorizontalInfo = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;
    margin: 0 auto;
    flex-wrap:wrap;
    margin-top: ${props => props.position=="first" ? "0px" : "24px"};
    @media (min-width: ${tabletBreakpoint}) {
        flex-direction:row;
    }
    & .descrip{
        margin-left:24px;
    }

    
`;
export const Column = styled.div`
    display: flex;
    flex-flow:column nowrap;
    flex: ${props=>props.flexgrow || 1} 1 0px;

`;

export const RegBody = styled.p`
    font-weight:300;
    margin-bottom: 8px;
    margin-top: 0px;
    line-height:28px;
    font-size:16px;
	@media (min-width: ${tabletBreakpoint}) {
        font-size: 18px;
        line-height:28px;
    }
`;

export const ThinBody  = styled(RegBody)`
    font-weight:200;
`;
export const BoldBody = styled(RegBody)`
    font-weight:400;
`;

export const SmallCaps = styled.p`
    color: ${tealBlue};
    text-transform: uppercase;
    font-size: 16px;
    font-weight: ${headerTextWeight};
    margin-bottom: 8px;
`;

export const ItalicBody = styled(RegBody)`
    font-style: italic;
    margin-bottom: 8px;

`;
export const ExplorationCard = styled.div`
    height: 334px;
    border: 1px ${darkestBlue} solid;
    border-radius: 8px;
    width: 280px;
    margin-right:24px;
    flex-shrink:0;
`;

export const ExplorationImg =styled.img`
    width: 248px;
    height: 160px;
    margin: 0px 16px;
    object-fit:cover;
`;

export const ExplorationText = styled.div`
    margin: 16px;
    h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 16px;
    }
`;
export const ExplorationBody = styled(RegBody)`    
    margin-bottom:16px;
`;

export const HorizontalRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: ${props => props.position=="first" ? "0px" : "24px"};
    overflow-x: scroll;
`;

export const IconRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: baseline;
    cursor: pointer;
    svg:hover path {
        fill:url(#grad1);
    }
    a:hover{
        opacity:1;
    }
    svg {
        height:24px;
        width:24px;
        margin-left:16px;

    }

    @media (min-width: ${tabletBreakpoint}) {
        svg {
            height:32px;
            width:32px;
            margin-left:24px;
        }
    }
`;