import styled from 'styled-components';
import {Link} from 'react-router-dom';

const heroTextMobile = '32px';
const subtitleText = '16px';
const headerText = "20px";
const headerTextWeight = "600"
const heroMargins = '16px';
const topSpace = '24px';
const darkestBlue = "#082939";
const tealBlue = "#3C8696";
const borderRadius  = '8px';

export const TopSpacer = styled.div`
    height:96px;
`;

export const BottomSpacer = styled.div`
    height:96px;
`;

export const Wrapper = styled.div`
    width:auto;
    margin:0px ${heroMargins};
`;
export const HeroText = styled.h1`
    font-size: ${heroTextMobile};
    line-height:38px;
   
`;
export const HeroBody = styled.p`
    margin-top:${topSpace};
    font-size: ${subtitleText};
    line-height:24px;
`;

export const ProjectWrapper = styled.div`
    background-color:#fff;
    border: 1px ${darkestBlue} solid;
    border-radius:${borderRadius};
    margin: 0px ${heroMargins} ${heroMargins} ${heroMargins};

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
        font-size: ${subtitleText};
        font-weight: ${headerTextWeight};
        margin-bottom: 8px;
    }
    p {
        font-size: ${subtitleText}
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
    width: 100%;
    // max-height:555px;
    // order:${props => props.direction};
    background-color:${props => props.fillColor};
    border-top: 1px ${darkestBlue} solid;
    border-radius:${borderRadius};

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
    font-size: ${subtitleText};
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