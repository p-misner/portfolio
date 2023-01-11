import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import GoToTop from '../Projects/GoToTop';

import airsimcover from '../Images/airsim_cover.png';
import brainstorm from '../Images/vr/brainstorm.JPG';
import research from '../Images/vr/researchposter.png';
import cartrigger from '../Images/vr/cartriggers.png';
import pause from '../Images/vr/pause.png';

import {
  Wrapper,
  TopSpacer,
  HeroText,
  HeroBody,
  RegBody,
  BigImage,
  Video,
  BoldedLink,
  BoldBody,
} from './DetailsStylesheet.js';

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0px 32px 0px 0px;
  flex: ${(props) => props.grow || '1'} 1 0px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const RowImage = styled.img`
  width: 90%;
  margin: 32px 0px 0px 0px;
  height: auto;
`;

const Issues = styled.div`
  background-color: #f2a267;
  padding: 20px;
  width: auto;
`;

const HorizontalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export function LowCostSim() {
  ReactGA.pageview(window.location.pathname);

  return (
    <Wrapper>
      <TopSpacer />
      <HeroText>Low-Cost VR Driving Simulator</HeroText>
      <HeroBody>
        Designing and developing a realistic autonomous driving experience via a
        virtual reality headset from my senior honors thesis at Tufts
        University.
      </HeroBody>
      <BigImage src={airsimcover} />

      <h2>Project Background</h2>
      <RegBody>
        For my senior thesis, I worked under{' '}
        <BoldedLink href="https://engineering.tufts.edu/me/people/faculty/james-intriligator">
          Professor James Intrilligator
        </BoldedLink>{' '}
        and{' '}
        <BoldedLink href="https://sites.tufts.edu/humanfactors/faculty/">
          Professor Hal Miller Jacobs
        </BoldedLink>{' '}
        in the Tufts Human Factors department. I led a team of four other
        students to design and develop a realistic autonomous driving experience
        via a virtual reality headset. The main goal of the project was to offer
        a cheaper, more portable alternative to a full-scale driving simulator.
      </RegBody>
      <RegBody>
        I recieved honors for my thesis as well as IRB approval to conduct a
        study on autonomous driving using the simulator. I was awarded a
        Fulbright-Nehru Student Research Fellowship to continue the work in
        India. Both the fellowship and the research study have been suspended
        due to Covid-19.
      </RegBody>
      <HorizontalInfo>
        <Column>
          <BigImage src={brainstorm} />
          <RegBody>
            <BoldBody>Feature Brainstorm </BoldBody> Priya Misner and Julie
            Yeung brainstorming possible features and scenarios for the
            simulator
          </RegBody>
        </Column>

        <Column>
          <BigImage src={research} />
          <RegBody>
            <BoldBody>Presentation </BoldBody> Presenting our first prototype
            and research poster with team members Korri Lampedusa and Julie
            Yeung at the ENP 94 Poster Session.
          </RegBody>
        </Column>
      </HorizontalInfo>

      <RegBody>
        The suburban environment was created using Microsoft AirSim and the
        Unity game engine. For the vehicle, we downloaded a five passenger sedan
        from the Unity Asset Store and added an interactive infotainment screen
        to the dashboard of the vehicle. While initially we planned on
        integrating a GT Force Gaming Wheel into the simulation, a virtual
        driving wheel controlled via the Oculus Hand Controllers was more
        intuitive for the user to interact with.
      </RegBody>
      <RegBody>
        Key features included path planning and stop/go triggers for autonomous
        driving, VR tunneling to limit VR sickness, custom distractions tasks
        and basic data collection.
      </RegBody>
      <HorizontalInfo>
        <Column>
          <BigImage src={cartrigger} />
          <RegBody>
            <BoldBody>Path Planning </BoldBody> Users can plot out a path for
            the car to follow by simply attaching a prewritten script and
            dragging and dropping cubes.
          </RegBody>
        </Column>

        <Column>
          <BigImage src={pause} />
          <RegBody>
            <BoldBody>Stop/Go Triggers </BoldBody> Control the car's movement by
            placing a trigger in the vehicles's path
          </RegBody>
        </Column>
      </HorizontalInfo>
      <RegBody>
        A video of a test run taken just before the pandemic put the research on
        pause.
      </RegBody>
      <Video
        src="https://www.youtube.com/embed/_TRtJpTSgFI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <GoToTop />
    </Wrapper>
  );
}
