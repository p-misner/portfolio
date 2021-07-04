import React from 'react';
import styled from 'styled-components';

import commuterFlow from "../Images/explorations/commuterflow.png";
import flowGif from "../Images/explorations/flow.gif";
import comparisonGif from "../Images/explorations/comparison.gif";

const ContentWrapper = styled.div`
    margin: 160px auto 80px auto;
    width: 85vw;
`;
const Spacer = styled.div`
    height: 128px;
`;
const HalfSpacer = styled.div`
    height: 64px;
`;
const HeroBody = styled.p`
    margin-top:24px;
    font-size: 26px;
    line-height:38px;
`;
const BigImage = styled.img`
    width: 85vw;
    margin: 32px auto;
    height: auto;
   
`;
const MediumImage = styled.img`
    width: 60vw;
    margin: 32px 0px 0px 0px;
    height: auto;
    @media (max-width:768px){
        width: 85vw;
    }
`;
const SmallBody = styled.p`
    margin: 0px;
    font-size: 17px;
    line-height:28px;
    margin-bottom:7px;
    color: ${props=> props.inputColor || "#082939"}
`;
const ShortenedBody = styled(SmallBody)`
    max-width: 70vw;
    margin-top: 16px;
`;
const BulletList = styled.ul`
    list-style:square;
    padding-left:48px;
    max-width: 68vw;

`;
const BulletListItem = styled.li`
    font-weight: 300;
    line-height:30px;
`;

export function NetworkFlow(){
    return (
        <ContentWrapper>
            <h1> Network Flow</h1>
            <HeroBody> A prototype network flow visualization built with deck.gl and React for the UrbanismX Research Group</HeroBody>
            
            <HalfSpacer />
            <h2>Project Background</h2>
            <ShortenedBody>
                During the Fall of 2019 and Spring of 2020 I worked with several professors and researchers from the Tufts University UrbanismX 
                Research Group on an interactive map. In my time working with this group, I created wireframes of how the application should look 
                and coded functional prototypes of two mapping features. 
            </ShortenedBody>
            <ShortenedBody>
                The primary goal of this map was to allow urban planning researchers to compare different data sets and visualize the how different 
                variables affected commuter flow. Questions the maps tried to answer included: 
            </ShortenedBody>
            <BulletList>
                <BulletListItem> How can we tell if a city thriving?</BulletListItem>
                <BulletListItem> How does commuting impact a person's life in terms of economic structure? </BulletListItem>
                <BulletListItem> What differences do variables like income, race, occupation, transit mode, etc. reveal about people's commuting patterns?  </BulletListItem>
            </BulletList>
            
            <HalfSpacer />
            <h2>Comparison Map Prototype</h2>
            <MediumImage src={comparisonGif} />
            <ShortenedBody>
                One data set is compared to another data set and the difference between the two maps is shown in an inset map. As you can seen from 
                the image, the user chooses the two data sets they would like to compare from a drop down menu. Both data sets are graphed on a split 
                screen and the difference is shown on an inset map. 
            </ShortenedBody>

            <HalfSpacer />
            <h2>Network Flow Map Prototype</h2>
            <MediumImage src={flowGif} />
            <ShortenedBody>
                Flow is the movement of a person from an origin point to a destination. The map below shows flow from an origin tract to a variety of 
                destination tracts in Massachusetts. By clicking a point on the map, all the various destinations branch out from the point.
            </ShortenedBody>
            
            <HalfSpacer />
            <h2>Development</h2>
            <ShortenedBody>
                I built the map using React and deck.gl, a WebGL-powered visualization framework for large scale datasets. Though the data I 
                received was mostly clean and formatted, I used python with pandas to perform minor data cleaning operations.  
            </ShortenedBody>
        </ContentWrapper>
      
    );
}