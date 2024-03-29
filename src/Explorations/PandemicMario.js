import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import GoToTop from '../Projects/GoToTop';

import build from '../Images/explorations/mario/physicalrobot.JPG';
import stages from '../Images/explorations/mario/mariomodel.png';
import hands from '../Images/explorations/mario/hands.png';

import {
  Wrapper,
  TopSpacer,
  HeroText,
  HeroBody,
  RegBody,
  MonospaceBody,
  MonospaceHeader,
  BulletList,
  BulletListItem,
  BoldBulletBody,
  ItalicCaption,
  HalfSpacer,
  BigImage,
  Video,
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

export function PandemicMario() {
  ReactGA.pageview(window.location.pathname);

  return (
    <Wrapper>
      <TopSpacer />
      <HeroText> Pandemic Mario</HeroText>
      <HeroBody>
        {' '}
        Control Mario using your hands and a LEGO Mindstorm. Help him as he
        tries to avoid catching the coronavirus. A final project for a college
        robotics course.{' '}
      </HeroBody>
      <Video
        src="https://www.youtube.com/embed/gRAhf-MZgH0"
        frameborder="0"
        allow="accelerometer; autoplay; gyroscope; picture-in-picture"
        allowfullscreen
      ></Video>

      <h2>Project Background</h2>
      <RegBody>
        Due to Covid-19, Tufts University sent all its students home right
        before the start of my robotics final project. Our new challenge for the
        robotics final was to move a machine across our screens via zoom as part
        of a class-wide virtual Rube-Goldberg machine. Armed with an EV3 LEGO
        Mindstorm kit, my laptop and whatever else could be found around my
        house, I got to work. Needing a hero to defeat coronavirus and banish
        any quarantine boredom, I created Super Mario: At Home, the only
        unauthorized, interactive Super Mario game that lets players play both
        in cyberspace and real life.
      </RegBody>
      <RegBody>The features of this game include:</RegBody>
      <BulletList>
        <BulletListItem>
          {' '}
          <BoldBulletBody>Hardware: </BoldBulletBody>A conveyer belt that moves
          a LEGO Mario and is mounted on an EV3 with wheels{' '}
        </BulletListItem>
        <BulletListItem>
          {' '}
          <BoldBulletBody>Communication: </BoldBulletBody>EV3 and laptop talk
          via serial{' '}
        </BulletListItem>
        <BulletListItem>
          {' '}
          <BoldBulletBody>Communication: </BoldBulletBody>A server built with
          p5.serialport gets serial data from computer USB to the browser{' '}
        </BulletListItem>
        <BulletListItem>
          {' '}
          <BoldBulletBody>Virtual Game: </BoldBulletBody>A mini-game synced with
          the physical EV3 robot has the player avoid virtual objects like the
          coronavirus to reach an end flag{' '}
        </BulletListItem>
        <BulletListItem>
          {' '}
          <BoldBulletBody>Machine Learning: </BoldBulletBody>Mario's movements
          in the virtual and physical world are controlled via hand movements
          interpreted by a neural net created using Teachable Machines{' '}
        </BulletListItem>
      </BulletList>

      <h2>The Build</h2>
      <RegBody>
        The physical portion of the mario robot consists of a the EV3 on wheels
        driven by two large motors. A conveyer belt mounted atop the EV3 and
        driven by a medium motor holds a model of Mario built in Lego. When
        virtual Mario jumps in the game, the conveyer belt also moves the LEGO
        Mario up and down in the physical world.
      </RegBody>
      <RegBody>
        Initially, Mario was painted on a piece of paper but was then rebuilt to
        stay true to the LEGO theme. Rather than holding a 3D ball to carry
        across the screen, the LEGO Mario holds a LEGO replica of the
        coronavirus to represent the ball and the current times.
      </RegBody>
      <Row>
        <Column grow="1.25">
          <RowImage src={build} />
          <ItalicCaption>
            {' '}
            The EV3-mounted conveyer belt holding a LEGO Mario{' '}
          </ItalicCaption>
        </Column>
        <Column grow="2">
          <RowImage src={stages} />
          <ItalicCaption>
            {' '}
            Images showing the transformation of paper Mario to LEGO Mario
            holding coronavirus{' '}
          </ItalicCaption>
        </Column>
      </Row>

      <h2>Communication </h2>
      <RegBody>
        To talk to the other robots making up the virtual Rube Goldberg machine,
        my Super Mario robot checks a SystemLink tag in the cloud to begin its
        journey across the screen. When the Super Mario robot wins the game, it
        resets it's own start tag to false and sets the next robot's tag to
        true.
      </RegBody>
      <RegBody>
        Serial communction was used to send data back and forth between the
        laptop and the EV3. To get data from the USB port of the laptop to the
        browser, I used the{' '}
        <a
          href="https://github.com/p5-serial/p5.serialport"
          target="_blank"
          rel="noreferrer noopener"
        >
          p5.serialport library
        </a>{' '}
        to create a node.js based WebSocket server that served the serial data
        to the browser. The data sent over serial indicated four states in the
        game: begin, jump, game over and game won.
      </RegBody>
      <Issues>
        <MonospaceHeader> Serial Communication Issues</MonospaceHeader>
        <MonospaceBody>
          Initally, I had the EV3 talk via serial to an Arduino which would in
          turn talk over serial to a computer. While this setup worked in
          pieces, I often recieved garbage data over the connection. In the
          final project, I cut out the Arduino middleman and ordered a cable
          that let the EV3 send serial data directly to the computer's USB port.
        </MonospaceBody>
      </Issues>

      {/* <HalfSpacer />
             <h2>Virtual Game </h2>
            <ShortenedBody>
                To get the full Super Mario experience, I built a short game in the browser using p5.js and the p5.play library. The movement of Mario is 
                controlled using hand commands shown to the laptop's camera. Mario's movements are controlled using hand movements. But, since the machine 
                learning algorithm is highly dependent on the environment seen by the computer camera, chances are low that it would work with another 
                user's setup and movements. 
            </ShortenedBody>
            <ShortenedBody>
            Below, is a version of the game that can be played with the w key. Full screen is necessary to view the full game.
            </ShortenedBody>
            <div id="mariocontainer"></div> */}

      <h2>Machine Learning: Hand Control </h2>
      <RegBody>
        I trained a neural net with images of my hands in different positions
        using Google's Teachable Machines. The neural net was trained to
        recognize three different poses using about 50 images per pose: an open
        hand for start, a finger pointing upward for jump and a blank wall to
        recognize no command. The model was hosted by Teachable Machines and
        could be accessed in the browser using p5.js
      </RegBody>
      <BigImage src={hands} />
      <ItalicCaption>
        {' '}
        Reproductions of what the hand poses would look like to control Mario.
        From left to right: Start Pose, Jump Pose, No Pose{' '}
      </ItalicCaption>

      <GoToTop />
    </Wrapper>
  );
}
