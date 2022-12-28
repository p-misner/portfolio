import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import GoToTop from "../Projects/GoToTop";

import flowGif from "../Images/explorations/flow.gif";
import comparisonGif from "../Images/explorations/comparison.gif";
import {Wrapper, TopSpacer, HeroText, HeroBody, RegBody, BulletList, 
    BulletListItem, MediumImage, HalfSpacer} from "./DetailsStylesheet.js";


export function NetworkFlow(){
    ReactGA.pageview(window.location.pathname);

    return (
        <Wrapper>
            <TopSpacer />
            <HeroText> Network Flow</HeroText>
            <HeroBody> A prototype network flow visualization built with deck.gl and React for the UrbanismX Research Group</HeroBody>
            <h2>Project Background</h2>
            <RegBody>
                During the Fall of 2019 and Spring of 2020 I worked with several professors and researchers from the Tufts University UrbanismX 
                Research Group on an interactive map. In my time working with this group, I created wireframes of how the application should look 
                and coded functional prototypes of two mapping features. 
            </RegBody>
            <RegBody>
                The primary goal of this map was to allow urban planning researchers to compare different data sets and visualize the how different 
                variables affected commuter flow. Questions the maps tried to answer included: 
            </RegBody>
            <BulletList>
                <BulletListItem> How can we tell if a city thriving?</BulletListItem>
                <BulletListItem> How does commuting impact a person's life in terms of economic structure? </BulletListItem>
                <BulletListItem> What differences do variables like income, race, occupation, transit mode, etc. reveal about people's commuting patterns?  </BulletListItem>
            </BulletList>
            
            <h2>Comparison Map Prototype</h2>
            <MediumImage src={comparisonGif} />
            <RegBody>
                One data set is compared to another data set and the difference between the two maps is shown in an inset map. As you can seen from 
                the image, the user chooses the two data sets they would like to compare from a drop down menu. Both data sets are graphed on a split 
                screen and the difference is shown on an inset map. 
            </RegBody>

            <h2>Network Flow Map Prototype</h2>
            <MediumImage src={flowGif} />
            <RegBody>
                Flow is the movement of a person from an origin point to a destination. The map below shows flow from an origin tract to a variety of 
                destination tracts in Massachusetts. By clicking a point on the map, all the various destinations branch out from the point.
            </RegBody>
            
            <h2>Development</h2>
            <RegBody>
                I built the map using React and deck.gl, a WebGL-powered visualization framework for large scale datasets. Though the data I 
                received was mostly clean and formatted, I used python with pandas to perform minor data cleaning operations.  
            </RegBody>
            <GoToTop />
        </Wrapper>
      
    );
}