import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';

import justacc from "../Images/justacc_cover.png";
import rse from "../Images/rse_cover.png";
import vr from "../Images/vr_cover.png";

import commuterFlow from "../Images/explorations/commuterflow.png";
import usLegislation from "../Images/explorations/parttime.png";
import superMario from "../Images/explorations/supermario.png";
import greenEggs from "../Images/explorations/greeneggs.png";
import thirtyDay from "../Images/explorations/30day.png";

import resume from "../Images/PriyaMisnerResume.pdf"
const TopSpacer = styled.div`
    height:160px;
`;
const BottomSpacer = styled.div`
    height:25vh;
`;
const ProjectSpacer = styled.div`
    height:0px;
`;
const Wrapper = styled.div`
    width:90vw;
    margin:0 auto;
    max-width: 1200px;
`;
const HeroBody = styled.p`
    margin-top:24px;
    font-size: 26px;
    line-height:38px;
    @media (max-width:800px){
        font-size:20px;
        line-height:28px;
    }
`;
const BoldedLink = styled.a`
    font-weight:500;
    color: ${props => props.inputColor || "#082939"};
    text-decoration: underline;
    cursor:pointer;

    &:hover{
        // font-weight:600;
        opacity:0.6;
    }
    &:visited {
        color: ${props => props.inputColor || "#082939"}; 
    }
`;
const ProjectWrapper = styled.div`
    background-color:${props=> props.fillColor || "yellow"};
    // height: 540px;
    @media (max-width: 767px){
        height:auto;
        // max-height: 730px;
    }
`;

const ContentWrapper = styled.div`
    width: 85vw;
    margin: 0 auto;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
   
    @media (max-width: 767px){
        flex-direction:column;
        flex-flow:column;
        align-item:flex-start;
        justify-content:flex-end;
    }
`;

const Image = styled.img`
    width: 35vw;
    height: auto;
    max-height:555px;
    order:${props => props.direction};
    @media (max-width: 767px){
        height:200px;
        margin-bottom: 24px;
        width:auto;
        order:-1;
    }
`;
const TextGroup = styled.div`
    width: 50vw;
    margin: 144px 0px;
    @media (max-width: 767px){
        width:80vw;
        margin:0px;
    }
`;
const ButtonGroup = styled.div`
    display: inline-flex;
    flex-direction:row;
    @media (max-width: 767px){
        flex-direction: column-reverse;
    }
`;
const ProjectButton = styled.button`
    color: ${props=> props.inputColor || "white"};  
   
    &:hover{
        // font-weight:600;
    }
    @media (max-width: 767px){
        
        margin-bottom:48px;
    }
`;
const ButtonSpacer = styled.div`
height:48px;
`

const ProjectButtonOutline = styled.button`
    color:  #082939;
    background-color: transparent;
    border:  2px solid #082939;
    margin-left:24px;
    width:193px;
   
    &:hover{
        // font-weight:600;
    }
    @media (max-width: 767px){
        margin-left:0px;
        
        // margin-bottom:48px;
    }
`;

const HorizontalInfo = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: flex-start;
    margin: 0 auto;
    flex-wrap:wrap;
    margin-top: ${props => props.position=="first" ? "0px" : "24px"};

    
`;
const Column = styled.div`
    display: flex;
    flex-flow:column nowrap;
    margin: 0px 32px 0px 0px;
    flex: ${props=>props.flexgrow || 1} 1 0px;

`;

const RegBody = styled.p`
    font-weight:300;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height:24px;
`;
const ThinBody  = styled(RegBody)`
    font-weight:200;
`;
const BoldBody = styled(RegBody)`
    font-weight:400;
`;

const JobHeading = styled.p`
    font-weight:400;
    opacity:0.4;
    margin-top: ${props => props.position=="first" ? "24px" : "48px"};
`;

const ItalicBody = styled(RegBody)`
    font-style: italic;
    font-weight:200;
`;
const ExplorationCard = styled.div`
    height: 360px;
    background-color: ${props=> props.fill || "darkblue"};
    width: 300px;
    margin-right:48px;
    flex-shrink:0;
`;

const ExplorationImg =styled.img`
    margin: 16px 16px;
    width: 268px;
    height: 170px;
    object-fit:cover;
`;
const ExplorationH3 = styled.h3`
    margin-bottom: 4px;
`;
const ExplorationText = styled.div`
    margin: 0px 16px;
    width: 268px;
`;
const ExplorationBody = styled(RegBody)`    
    margin-bottom:16px;
`;
const ExplorationLink = styled(Link)`
    text-decoration: underline;
    font-weight: 400;

`;
const HorizontalRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items: flex-start;
    // margin: 0 auto 48px auto;
    flex-wrap: nowrap;
    margin-top: ${props => props.position=="first" ? "0px" : "24px"};
    overflow-x: scroll;
`;


export const Home =()=>{
    ReactGA.pageview(window.location.pathname);
    return (
        <div>
            <Hero />
            <BigProject 
                fillColor="#C5DBDF" 
                direction={-1}
                header="Geographic Visualization for Covid-19's Impact on Essential Services"
                subheader="An interactive data dashboard built with d3.js and React exploring how Covid-19 impacted accessibility to food, grocery and health care in major cities. "
                subheader2="Employed by UrbanismX Research Group at Tufts University."
                image={justacc}
                link="/justaccessibility"
                projectdemo={{display:true, link:"https://justaccessibility.herokuapp.com"}}
            />
             <BigProject 
                fillColor="#E56F56"
                direction={1}
                header="Redesigning Results for Adaptive Assessments"
                subheader="Information design communicating results of adaptive diagnostic math assessments aimed at identifying student skills gaps in math.  Created for Ready.Set.Excel, an educational nonprofit supporting students in the San Francisco Bay Area.  "
                image={rse}
                link="/rse"
                projectdemo={{display:false}}
            />
             <BigProject 
                fillColor="#E8C370" 
                direction={-1}
                header="Virtual Reality Driving"
                subheader="Human Factors research into Human-Vehicle Interaction using custom built driving simulations. Covers thesis research at Tufts University and research internship at Volpe. "
                image={vr}
                link="/vrdriving"
                projectdemo={{display:false}}
            />
            
            <Explorations />

            <Experience />

        </div>
    )
}


const Hero = ()=>{
    

    return (
        <div>
            <TopSpacer/>
            <Wrapper>
                <h1>Hi There.  I'm Priya. </h1>
                <HeroBody>Creative Coder. <BoldedLink > <a href="https://engineering.tufts.edu/news-events/news/safer-driving" target="_blank" rel="noreferrer noopener">Fulbright Scholar</a>.</BoldedLink> Designer. Mechanical Engineer. 
                I thrive at the intersection of design and technology. From coding geographic data maps to finding insights in datasets visually, I love taking dense data and turning it into something beautiful and meaningful. </HeroBody>
                <HeroBody>View my <BoldedLink inputColor="#E8C370" href={resume} download>resumé</BoldedLink>, <BoldedLink inputColor="#3C8696" href="mailto:priyamisner@gmail.com">get in touch</BoldedLink>, or check out my <BoldedLink inputColor="#E56F56" onClick={()=>window.scrollBy(0, window.innerHeight*0.7)}>past work</BoldedLink>. </HeroBody>
            </Wrapper>
            <BottomSpacer/>
            
        </div>
    );
}

const BigProject = ({direction, fillColor,image, header, subheader,link, projectdemo })=>{
    

    
    return(
        <ProjectWrapper fillColor={fillColor}>
            <ContentWrapper>  
            <ProjectSpacer/>
            <Image direction={direction} src={image} alt="Just Acc Dashboard Mockup" />
            <TextGroup>
                <h2>{header}</h2>
                <p >{subheader}  </p>
                <ButtonGroup>
                    <Link to={link}><ProjectButton inputColor={fillColor}> Read Case Study</ProjectButton></Link>
                    {
                        projectdemo.display
                        ?
                        <a href={projectdemo.link} target="_blank" rel="noreferrer noopener"> <ProjectButtonOutline inputColor={fillColor}>View Beta Site</ProjectButtonOutline></a>
                        :
                        null
                    }
                </ButtonGroup>
            </TextGroup>  

            </ContentWrapper>
            
            
        </ProjectWrapper>
    );
}

const ExplorationProject = ({fill,link, img, header, subheader, buttontext})=>{
    return(
        
            <ExplorationCard fill={fill}>
                <Link to={link} ><ExplorationImg src={img}/></Link>
                <ExplorationText>
                    <ExplorationH3> {header}</ExplorationH3>
                    <ExplorationBody> {subheader}</ExplorationBody>
                    <ExplorationLink to={link}>{buttontext}</ExplorationLink>
                </ExplorationText>
                
            </ExplorationCard>
        

    )
}


const Explorations = ()=>{
    return(
        <Wrapper>
            <TopSpacer />
            <h2> Explorations</h2>
            <HeroBody> Smaller scale projects and ideas I've been tinkering with </HeroBody>
            <HorizontalRow>
                <ExplorationProject 
                    fill="#E8C370"
                    img={commuterFlow}
                    link={"./networkflow"}
                    header="Network Flow"
                    subheader="Prototype network flow visualization built with deck.gl and React"
                    buttontext="View Project"

                />
                 <ExplorationProject 
                    fill="#E56F56"
                    img={superMario}
                    link={"./pandemicmario"}
                    header="Pandemic Super Mario"
                    subheader="Using machine learning and LEGO Mindstorms to play Super Mario during the pandemic"
                    buttontext="View Project"
                />
                 <ExplorationProject 
                    fill="#c6dbdf"
                    img={thirtyDay}
                    link={"./chartcollection"}
                    header="Chart Collection"
                    subheader="Graphs and charts created for Twitter's #30DayChartChallenge"
                    buttontext="View Project"
                />
                <ExplorationProject 
                    fill="#E8C370"
                    img={usLegislation}
                    link={"#"}
                    header="State Legislative Calendars"
                    subheader="d3.js visualization of state legislative calendars from 2012-2020"
                    buttontext="Coming Soon"
                />
               
                <ExplorationProject 
                    fill="#F2A267" 
                    img={greenEggs}
                    link={"#"}
                    header="Green Eggs and Ham"
                    subheader="A collapsible radial tree depicting Dr. Seuss' words"
                    buttontext="Coming Soon"
                />
            </HorizontalRow>
            
        </Wrapper>
    );
}

const Experience = ()=>{
    return(
        <Wrapper>
            <TopSpacer />
               
            <h2> Experience</h2>
            <JobHeading position="first"> work and research</JobHeading>
            <HorizontalInfo position="first">
                <Column flexgrow="2">
                    <BoldBody>Data Visualization Developer</BoldBody>
                    <ThinBody>UrbanismX Research Group </ThinBody>
                    <ItalicBody>Oct 2019-present</ItalicBody>
                </Column>
                
                <Column flexgrow="5">
                <RegBody>
                        Designing and developing data visualizations based on ongoing research 
                </RegBody>
                
                </Column>
            </HorizontalInfo>
            <HorizontalInfo >
                <Column flexgrow="2">
                    <BoldBody>Data Visualization Designer</BoldBody>
                    <ThinBody>Ready.Set.Excel. </ThinBody>
                    <ItalicBody>December 2020-present</ItalicBody>
                </Column>
                
                <Column flexgrow="5">
                <RegBody>
                    Information design for reporting results and analysis
                </RegBody>
                
                </Column>
            </HorizontalInfo>
            <HorizontalInfo>
                <Column flexgrow="2">
                    <BoldBody>Transportation Human Factors Intern</BoldBody>
                    <ThinBody>Volpe National Transportation Research Systems Center </ThinBody>
                    <ItalicBody>June 2019- Aug 2019</ItalicBody>
                </Column>
                
                <Column flexgrow="5">
                    <RegBody>Coded human factors driving simulations for ongoing research studies</RegBody>
                    <RegBody>Interviewed research participants and guided particpants through experimental procedures </RegBody>
                </Column>
            </HorizontalInfo>
            <HorizontalInfo>
                <Column flexgrow="2">
                    <BoldBody> Intern</BoldBody>
                    <ThinBody>Autonomous Marine Systems </ThinBody>
                    <ItalicBody>February 2018 - May 2018</ItalicBody>
                </Column>
                
                <Column flexgrow="5">
                    <RegBody>Designed data visualizations to analyze data coming off an autonmous drone’s sensors</RegBody>
                </Column>
            </HorizontalInfo>
            
            <JobHeading > awards</JobHeading>
            <HorizontalInfo position="first">
                <Column flexgrow="2">
                    <BoldBody> 2020-21 Fulbright Research Fellow</BoldBody>
                    <ItalicBody>suspended due to Covid-19</ItalicBody>
                </Column>
                
                <Column flexgrow="5">
                    <RegBody>Fully funded year-long fellowship in New Delhi, India in collaboration with the IIIT-Delhi’s Weave Labs and SaveLIFE Foundation exploring the use of virtual reality to increase road safety</RegBody>
                </Column>
            </HorizontalInfo>

            <TopSpacer />


        </Wrapper>
    );
}

