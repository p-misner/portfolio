import React from 'react';
import styled from 'styled-components';

const TopSpacer = styled.div`
height:160px;
`;
const BottomSpacer = styled.div`
height:160px;
`;


export const Home =()=>{
    return (
        <div>
            <Hero />
            <BigProject 
                fillColor="#C5DBDF" 
            />
             <BigProject 
                fillColor="#E56F56" 
            />
             <BigProject 
                fillColor="#E8C370" 
            />

        </div>
    )
}

const Hero = ()=>{
    const Wrapper = styled.div`
        width:90vw;
        margin:0 auto;
        `;
    const HeroBody = styled.p`
        margin-top:24px;
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

const BigProject = ({direction, fillColor})=>{
    const ProjectWrapper = styled.div`
        background-color:${props=> props.fillColor || "yellow"};
    
    `;
    return(
        <ProjectWrapper fillColor={fillColor}>
            <TopSpacer/>
        </ProjectWrapper>
    );
}

