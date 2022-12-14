import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';

// import justacc from "../Images/justacc_cover.png";
// import rse from "../Images/rse_cover.png";
// import vr from "../Images/vr_cover.png";
import justacc from "../Projects/GeoViz.png"
import rse from "../Projects/Test.png"
import vr from "../Projects/SelfDrive.png"

import commuterFlow from "../Images/explorations/commuterflow.png";
import usLegislation from "../Images/explorations/parttime.png";
import superMario from "../Images/explorations/supermario.png";
import greenEggs from "../Images/explorations/greeneggs.png";
import thirtyDay from "../Images/explorations/30day.png";

import resume from "../Images/PriyaMisnerResume.pdf";

import {TopSpacer, BottomSpacer, Wrapper, HeroBody,HeroText, ProjectWrapper, ContentWrapper, 
    Image, HorizontalInfo, Column, RegBody, BoldBody, JobHeading, ItalicBody,ExplorationCard,
     ExplorationImg, ExplorationText,ExplorationBody, HorizontalRow} from "./HomeStylesheet.js";
 


export const Home =()=>{
    ReactGA.pageview(window.location.pathname);
    return (
        <Wrapper>
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

        </Wrapper>
    )
}


const Hero = ()=>{
    return (
        <div>
            <TopSpacer/>
                <HeroText>Hi There.  I'm Priya. </HeroText>
                <HeroBody>Creative Coder. Designer. Mechanical Engineer. 
                I thrive at the intersection of design and technology. From coding geographic data maps to finding insights in datasets visually, I love taking dense data and turning it into something beautiful and meaningful. </HeroBody>
                <HeroBody>Find me on the Internet:  </HeroBody>
            <BottomSpacer id="work" />
            
        </div>
    );
}

const BigProject = ({direction, fillColor,image, header, subheader,link, projectdemo })=>{
    return(
        <ProjectWrapper >
            <ContentWrapper>  
                <h3>Case Study </h3>
                <h2>{header}</h2>
                <p >{subheader}  </p>
            </ContentWrapper>
            <Image  image= {image} fillColor={fillColor}  />
        </ProjectWrapper>
            
            
    );
}

const ExplorationProject = ({fill,link, img, header, subheader, buttontext})=>{
    return(
        
            <ExplorationCard fill={fill}>
                <ExplorationText>
                    <h3> {header}</h3>
                    <ExplorationBody> {subheader}</ExplorationBody>
                    {/* <ExplorationLink to={link}>{buttontext}</ExplorationLink> */}
                </ExplorationText>
                <Link to={link} ><ExplorationImg src={img}/></Link>
            </ExplorationCard>
        

    )
}


const Explorations = ()=>{
    return(
        <div>
            <TopSpacer />
            <h2 id="explorations"> Explorations</h2>
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
                    subheader="Using machine learning and LEGO Mindstorms to play Super Mario irl"
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
                    subheader="d3.js visualization of legislative schedules "
                    buttontext="Coming Soon"
                />
               
                <ExplorationProject 
                    fill="#F2A267" 
                    img={greenEggs}
                    link={"#"}
                    header="Green Eggs and Ham"
                    subheader="A collapsible tree of the fifty words Dr. Seuss' used to write the book"
                    buttontext="Coming Soon"
                />
            </HorizontalRow>
            
        </div>
    );
}

const Experience = ()=>{
    return(
        <div>
            <TopSpacer />
               
            <h2> Experience</h2>
            <JobHeading position="first"> work and research</JobHeading>
            <HorizontalInfo position="first">
                <Column flexgrow="2">
                    <BoldBody>Data Visualization Developer</BoldBody>
                    <RegBody>UrbanismX Research Group </RegBody>
                    <ItalicBody>Oct 2019-present</ItalicBody>
                </Column>
                
                <Column flexgrow="5" className="descrip">
                <RegBody>
 
                           
                → Designing and developing data visualizations based on ongoing research 
                </RegBody>
                
                </Column>
            </HorizontalInfo>
            <HorizontalInfo >
                <Column flexgrow="2">
                    <BoldBody>Data Visualization Designer</BoldBody>
                    <RegBody>Ready.Set.Excel. </RegBody>
                    <ItalicBody>December 2020-present</ItalicBody>
                </Column>
                
                <Column flexgrow="5" className="descrip">
                <RegBody>
                → Information design for reporting results and analysis
                </RegBody>
                
                </Column>
            </HorizontalInfo>
            <HorizontalInfo>
                <Column flexgrow="2">
                    <BoldBody>Transportation Human Factors Intern</BoldBody>
                    <RegBody>Volpe National Transportation Research Systems Center </RegBody>
                    <ItalicBody>June 2019- Aug 2019</ItalicBody>
                </Column>
                
                <Column flexgrow="5" className="descrip">
                    <RegBody>→ Coded human factors driving simulations for ongoing research studies</RegBody>
                    <RegBody>→ Interviewed research participants and guided particpants through experimental procedures </RegBody>
                </Column>
            </HorizontalInfo>
            <HorizontalInfo>
                <Column flexgrow="2">
                    <BoldBody> Intern</BoldBody>
                    <RegBody>Autonomous Marine Systems </RegBody>
                    <ItalicBody>February 2018 - May 2018</ItalicBody>
                </Column>
                
                <Column flexgrow="5" className="descrip">
                    <RegBody>→ Designed data visualizations to analyze data coming off an autonmous drone’s sensors</RegBody>
                </Column>
            </HorizontalInfo>
            
            <JobHeading > awards</JobHeading>
            <HorizontalInfo position="first">
                <Column flexgrow="2">
                    <BoldBody> 2020-21 Fulbright-Nehru Research Fellow</BoldBody>
                    <ItalicBody>suspended due to Covid-19</ItalicBody>
                </Column>
                
                <Column flexgrow="5"className="descrip">
                    <RegBody>→ Fully funded year-long fellowship in New Delhi, India in collaboration with the IIIT-Delhi’s Weave Labs and SaveLIFE Foundation exploring the use of virtual reality to increase road safety</RegBody>
                </Column>
            </HorizontalInfo>

            <TopSpacer />


        </div>
    );
}

