import React from 'react';
import styled from 'styled-components';
import justacc from "../Images/justacc_cover.png";
import rse from "../Images/rse_cover.png";
import vr from "../Images/vr_cover.png";
const TopSpacer = styled.div`
height:160px;
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
`;
const BoldedLink = styled.span`
    font-weight:500;
    color: ${props => props.inputColor || "#082939"};
    text-decoration: underline;
    cursor:pointer;

    &:hover{
        // font-weight:600;
        opacity:0.6;
    }
`;
const ProjectWrapper = styled.div`
    background-color:${props=> props.fillColor || "yellow"};
    height: 540px;
    @media (max-width: 767px){
        height:auto;
        max-height: 650px;
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
const ProjectButton = styled.button`
    color: ${props=> props.inputColor || "white"};  
   
    &:hover{
        font-weight:600;
    }
    @media (max-width: 767px){
        
        margin-bottom:48px;
    }
`;

export const Home =()=>{
    return (
        <div>
            <Hero />
            <BigProject 
                fillColor="#C5DBDF" 
                direction={-1}
                header="Just Accessibility"
                subheader="An interactive data dashboard built with d3.js and React exploring how Covid-19 impacted accessibility to key services in major cities. Created for the UrbanismX Lab at Tufts University."
                image={justacc}
                link="/justaccessibility"
            />
             <BigProject 
                fillColor="#E56F56"
                direction={1}
                header="Ready.Set.Excel. Diagnostics"
                subheader="helo helo"
                image={rse}
                link="/justaccessibility"
            />
             <BigProject 
                fillColor="#E8C370" 
                direction={-1}
                header="Virtual Reality Driving"
                subheader="VR driving simulations designed and created to research the impact of autonomous vehicles on human-vehicle interaction. "
                image={vr}
                link="/justaccessibility"
            />

        </div>
    )
}

const Hero = ()=>{
    

    return (
        <div>
            <TopSpacer/>
            <Wrapper>
                <h1>Hi There. I'm Priya </h1>
                <HeroBody>Creative Technologist. Designer. Engineer. I thrive at the intersection of design and technology. From coding web maps to tinkering with datasets using d3.js, I love taking messy data and turning it into something both beautiful and understandable. </HeroBody>
                <HeroBody>View my <BoldedLink inputColor="#E8C370">resumé</BoldedLink>, <BoldedLink inputColor="#3C8696">get in touch</BoldedLink>, or check out my <BoldedLink inputColor="#E56F56">past work</BoldedLink>. </HeroBody>
            </Wrapper>
            <TopSpacer/>
            
        </div>
    );
}

const BigProject = ({direction, fillColor,image, header, subheader })=>{
    

    
    return(
        <ProjectWrapper fillColor={fillColor}>
            <ContentWrapper>  
            <ProjectSpacer/>
            <Image direction={direction} src={image} alt="Just Acc Dashboard Mockup" />
            <TextGroup>
                <h2>{header}</h2>
                <p >{subheader}  </p>
                <ProjectButton inputColor={fillColor}> View Project</ProjectButton>
            </TextGroup>  

            </ContentWrapper>
            
            
        </ProjectWrapper>
    );
}

