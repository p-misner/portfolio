import styled from 'styled-components';
import {Link} from 'react-router-dom';



const heroTextMobile = '32px';
const heroText = '48px';
const subtitleTextMobile = '16px';
const subtitleText = '18px';
const headerText = "20px";
const headerTextWeight = "600"
const heroMarginsMobile = '16px';
const heroMargins= '32px';
const topSpace = '24px';
const darkestBlue = "#082939";
const tealBlue = "#3C8696";
const borderRadius  = '8px';
const tabletBreakpoint = '768px';

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
    line-height:38px;
    @media (min-width: ${tabletBreakpoint}) {
        font-size: ${heroText};
    }
   
`;
export const HeroBody = styled.p`
    margin-top:${topSpace};
    font-size: ${subtitleTextMobile};
    line-height:24px;
    @media (min-width: ${tabletBreakpoint}) {
        font-size: ${subtitleText};
        line-height:27px;
    }
`;

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction:column;
    background-color:#fff;
    border: 1px ${darkestBlue} solid;
    border-radius:${borderRadius};
    margin: 0px 0px ${heroMarginsMobile} 0px;
    @media (min-width: ${tabletBreakpoint}) {
        margin: 0px 0px ${heroMargins}  0px;
        flex-direction: row-reverse;
    }

`;

export const ContentWrapper = styled.div`
    width: auto;
    display:flex;
    flex-direction:column;
    flex-flow:column;
    align-item:flex-start;
    justify-content:flex-end;
    margin: 24px 16px;
    
    h2{
        font-size: ${headerText};
        font-weight: ${headerTextWeight};
        line-height: 30px;
    }
    h3 {
        color: ${tealBlue};
        text-transform: uppercase;
        font-size: ${subtitleTextMobile};
        font-weight: ${headerTextWeight};
        margin-bottom: 8px;
    }
    p {
        font-size: ${subtitleTextMobile}
    }
    @media (min-width: ${tabletBreakpoint}) {
        justify-content:flex-start;
    }
`;
    

    

// export const Image = styled.img`
//     width: 35vw;
//     height: auto;
//     max-height:555px;
//     order:${props => props.direction};
//     @media (max-width: 767px){
//         height:200px;
//         margin-bottom: 24px;
//         width:auto;
//         order:-1;
//     }
// `;
export const Image = styled.div`
    height: 200px;
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
        border-right: 1px ${darkestBlue} solid;
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
    margin-bottom: 0px;
    margin-top: 0px;
    line-height:24px;
    font-size:16px;
`;
export const ThinBody  = styled(RegBody)`
    font-weight:200;
`;
export const BoldBody = styled(RegBody)`
    font-weight:400;
`;

export const JobHeading = styled.p`
    color: ${tealBlue};
    text-transform: uppercase;
    font-size: ${subtitleTextMobile};
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
    align-items: flex-start;
    flex-wrap: nowrap;
    margin-top: ${props => props.position=="first" ? "0px" : "24px"};
    overflow-x: scroll;
`;