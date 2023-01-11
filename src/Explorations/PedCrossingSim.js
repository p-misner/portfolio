import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import GoToTop from '../Projects/GoToTop';

import stages from '../Images/vr/stages.png';
import users from '../Images/vr/users.png';

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

const HorizontalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 24px;
`;

export function PedCrossingSim() {
  ReactGA.pageview(window.location.pathname);

  return (
    <Wrapper>
      <TopSpacer />
      <HeroText>Pedestrian Crossing Simulator</HeroText>
      <HeroBody>
        An experiment evaluating the comfort levels of pedestrians in crossing
        the road at any given time using a simulated road environment.
      </HeroBody>

      <h2>Project Background</h2>
      <RegBody>
        As part of a research seminar on autonomous systems, I worked in a group
        of three to design and implement an experiment evaluating the comfort
        levels of pedestrians in crossing the road at any given time. We looked
        into how a pedestrian's comfort levels changed in response to their
        distance from oncoming traffic and in response to different types of
        vehicles (large, small, autonomous, manual).
      </RegBody>
      <RegBody>
        Along with designing the experiment, I was responsible for creating a
        simulation in Unity that modeled a two lane road where cars drove past a
        pedestrian and analyzing the data. My group partners conducted the
        literature review, created the demographic survey and 3D printed a dial
        that fit over a potentiometer
      </RegBody>
      <h3> Methods and Simulation </h3>
      <RegBody>
        Ten participants were recruited for this experiment; the majority were
        students in the Mechanical Engineering department. The experiment is a
        within-subjects design, meaning that each participant experienced each
        experimental condition. Specifically, each participant was exposed to no
        fewer than three of each simulated car type over 18 cars. The cars range
        in size, speed, and type (autonomous, non-autonomous). Two different
        versions of the videos were created to add randomization and account for
        unforseen confounds.
      </RegBody>
      <HorizontalInfo>
        <Column>
          <BigImage src={stages} />
          <RegBody>
            <BoldBody>Stills from Study </BoldBody> Images of the virtual truck
            driving by on a road.
          </RegBody>
        </Column>

        <Column>
          <BigImage src={users} />
          <RegBody>
            <BoldBody>User Testing </BoldBody> Users twisted a dial to indicate
            comfortability as they watched the vehicles pass them by.
          </RegBody>
        </Column>
      </HorizontalInfo>
      <RegBody>
        Prior to starting the video, participants read through a page of
        instructions detailing an interpretation of the dial and how it should
        be used, that they can say "pause" or "stop" at any time and that cars
        of a red color signified autonomous vehicles. After watching the full
        simulation, the experimenter saved the data to their computer and
        distributed a post-questionnaire to the participant. The post
        questionnaire aims to gather demographic information of each
        participant, as well as some further questions related to their
        experience watching the simulation.
      </RegBody>
      <RegBody>
        I created mixed a customizable driving simulation using the Unity game
        engine that generated vehicles in a roadway while allowing vehicle
        appearance, vehicle speed and the driving environment to be changed.
        During the 8 minute simulation, 18 cars appeared (three cases for each
        dependent variable, with the remainder a control). Only one car appeared
        on the road at a time with a short gap between one car exiting the
        environment and the next car appearing. While initially the simulation
        worked inside an Oculus Rift, it was easier recruit study participants
        if I saved the simulation as a video and played it on my personal
        laptop.
      </RegBody>

      <GoToTop />
    </Wrapper>
  );
}
