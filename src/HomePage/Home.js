import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

// import justacc from "../Images/justacc_cover.png";
// import rse from "../Images/rse_cover.png";
// import vr from "../Images/vr_cover.png";
import justacc from '../Projects/GeoViz.png';
import rse from '../Projects/Test.png';
import vr from '../Projects/SelfDrive.png';
import grointel from '../Projects/GroIntelligenceCover.png';
import wave from '../Projects/spiral.png';
import wavehorizontal from '../Projects/wavehorizontal.png';

import commuterFlow from '../Images/explorations/commuterflow.png';
import statesoils from '../Images/explorations/statesoils.png';
import superMario from '../Images/explorations/supermario.png';
import greenEggs from '../Images/explorations/greeneggs.png';
import thirtyDay from '../Images/explorations/30day.png';
import charts2022 from '../Images/explorations/2022charts.png';
import senators from '../Images/explorations/senators.png';
import goldenyears from '../Images/explorations/goldenyears.jpg';
import sage from '../Images/explorations/sageacademy.png';
import pedcrossing from '../Images/vr/users.png';

import {
  LinkedInIcon,
  ObservableIcon,
  TwitterIcon,
} from '../Images/svgs/iconsSvg';

import {
  TopSpacer,
  BottomSpacer,
  Wrapper,
  HeroBody,
  HeroText,
  ProjectWrapper,
  ContentWrapper,
  Image,
  HorizontalInfo,
  Column,
  RegBody,
  BoldBody,
  SmallCaps,
  ItalicBody,
  ExplorationCard,
  ExplorationImg,
  ExplorationText,
  ExplorationBody,
  HorizontalRow,
  SectionHeading,
  IconRow,
  WaveImg,
  Squiggle,
} from './HomeStylesheet.js';
import { BoldedLink } from '../Explorations/DetailsStylesheet';

export const Home = () => {
  ReactGA.pageview(window.location.pathname);
  return (
    <Wrapper>
      <TopSpacer />
      <Hero />
      <BigProject
        fillColor="#C5DBDF"
        direction={-1}
        header="Gro Intelligence"
        subheader="A peek into the projects I've worked on. Working with agriculture, climate and economic data, I've designed experiences from the tiniest of micro-visualizations to overhauling the way we communicate the climate's impact on crop health."
        image={grointel}
        link="/grointelligence"
        projectdemo={{
          display: true,
          link: 'https://justaccessibility.herokuapp.com',
        }}
      />
      <BigProject
        fillColor="#C5DBDF"
        direction={-1}
        header="Geographic Visualization for Covid-19's Impact on Essential Services"
        subheader="An interactive data dashboard built with d3.js and React exploring how Covid-19 impacted accessibility to food, grocery and health care in major cities. "
        image={justacc}
        link="/justaccessibility"
        projectdemo={{
          display: true,
          link: 'https://justaccessibility.herokuapp.com',
        }}
      />
      <BigProject
        fillColor="#E56F56"
        direction={1}
        header="Redesigning Results for Adaptive Assessments"
        subheader="Information design communicating results of adaptive math assessments identifying gaps in math understanding.  Created for Ready.Set.Excel, a nonprofit supporting students in the SF Bay Area.  "
        image={rse}
        link="/rse"
        projectdemo={{ display: false }}
      />
      {/* <BigProject
        fillColor="#E8C370"
        direction={-1}
        header="Virtual Reality Driving"
        subheader="Human Factors research into Human-Vehicle Interaction using custom built driving simulations. Covers thesis research at Tufts University and research internship at Volpe. "
        image={vr}
        link="/vrdriving"
        projectdemo={{ display: false }}
      /> */}

      <Explorations />

      <Experience />
    </Wrapper>
  );
};

const Hero = () => {
  return (
    <div>
      <HeroText>Hi There. I'm Priya. </HeroText>
      <HeroBody>
        From coding geographic data maps to finding insights in datasets
        visually, I love taking dense data and turning it into something
        beautiful and meaningful. Currently at{' '}
        <BoldedLink>
          <a href="https://gro-intelligence.com/">Gro Intelligence</a>
        </BoldedLink>{' '}
        doing data visualization.{' '}
      </HeroBody>
      <IconRow>
        <HeroBody>Find me on the Internet: </HeroBody>
        <a
          title="View my Observable profile"
          href="https://observablehq.com/@pmisner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ObservableIcon />
        </a>
        <a
          title="View my Twitter profile"
          href="https://twitter.com/priyamisner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          title="View my LinkedIn profile"
          href="https://www.linkedin.com/in/priyamisner/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </IconRow>
      <BottomSpacer id="work" />
    </div>
  );
};

const BigProject = ({
  direction,
  fillColor,
  image,
  header,
  subheader,
  link,
  projectdemo,
}) => {
  return (
    <Link to={link}>
      <ProjectWrapper>
        <ContentWrapper>
          <SmallCaps>
            {header.includes('Gro') ? 'Work Experience' : 'Case Study'}{' '}
          </SmallCaps>
          <h2>{header}</h2>
          <RegBody>{subheader} </RegBody>
        </ContentWrapper>
        <WaveImg imageVert={wave} imageHoriz={wavehorizontal} />
        <Image image={image} fillColor={fillColor} />
      </ProjectWrapper>
    </Link>
  );
};

const ExplorationProject = ({ fill, link, img, header, subheader, design }) => {
  if (link.includes('http')) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ExplorationCard fill={fill}>
          {design === 'one' ? <Squiggle /> : null}

          <ExplorationText>
            <h3> {header}</h3>
            <ExplorationBody> {subheader}</ExplorationBody>
          </ExplorationText>
          <ExplorationImg src={img} />
        </ExplorationCard>
      </a>
    );
  }

  return (
    <Link to={link}>
      <ExplorationCard fill={fill}>
        {design === 'one' ? <Squiggle /> : null}
        <ExplorationText>
          <h3> {header}</h3>
          <ExplorationBody> {subheader}</ExplorationBody>
        </ExplorationText>
        <ExplorationImg src={img} />
      </ExplorationCard>
    </Link>
  );
};

const Explorations = () => {
  return (
    <div>
      <SectionHeading id="explorations"> Explorations</SectionHeading>
      <ExplorationBody>
        {' '}
        Smaller scale projects and ideas I've been tinkering with{' '}
      </ExplorationBody>
      <HorizontalRow>
        {/* <ExplorationProject 
                    fill="#c6dbdf"
                    img={goldenyears}
                    link={"https://observablehq.com/d/48357752cbe8c36b"}
                    header="Golden Years"
                    subheader="An interactive calendar + scrapbook of the dogs my family has fostered"
                    buttontext="View Project"
                /> */}

        <ExplorationProject
          fill="#c6dbdf"
          img={senators}
          link={'https://observablehq.com/d/48357752cbe8c36b'}
          header="How Many Senators Are Older Than..."
          subheader="Exploring d3.js' force and the wikipedia api"
          buttontext="View Project"
        />
        <ExplorationProject
          fill="#c6dbdf"
          img={charts2022}
          link={
            'https://observablehq.com/@pmisner/reflections-on-2022s-30-day-chart-challenge?collection=@pmisner/2022-thirty-day-chart-challenge'
          }
          header="2022 Chart Collection"
          subheader="Graphs and charts created for the Twitter 2022 #30DayChartChallenge"
          buttontext="View Project"
        />
        <ExplorationProject
          fill="#c6dbdf"
          img={statesoils}
          link={
            'https://observablehq.com/@pmisner/state-soils?collection=@pmisner/soil'
          }
          header="Soil Colors"
          subheader="A dive into the Munsell color system and the 50 state's official soils"
          buttontext="View Project"
          design="one"
        />
        <ExplorationProject
          fill="#c6dbdf"
          img={thirtyDay}
          link={'./chartcollection'}
          header="2021 Chart Collection"
          subheader="Graphs and charts created for the Twitter 2021 #30DayChartChallenge"
          buttontext="View Project"
        />
        <ExplorationProject
          fill="#E8C370"
          img={sage}
          link={'https://p-misner.github.io/SageAcademy/index.html'}
          header="Sage Academy"
          subheader="Designed a course in 3D Printing and electronics for middle schoolers"
          buttontext="View Project"
        />
        <ExplorationProject
          fill="#E8C370"
          img={commuterFlow}
          link={'./networkflow'}
          header="Network Flow"
          subheader="Prototype network flow visualization built with deck.gl and React"
          buttontext="View Project"
        />
        <ExplorationProject
          fill="#E56F56"
          img={superMario}
          link={'./pandemicmario'}
          header="Pandemic Super Mario"
          subheader="Using machine learning and LEGO Mindstorms to play Super Mario irl"
          buttontext="View Project"
        />
        <ExplorationProject
          fill="#c6dbdf"
          img={vr}
          link={'./lowcostsim'}
          header="Low Cost Driving Simulator"
          subheader="senior honors thesis on virtual reality + driving"
          buttontext="View Project"
        />
        <ExplorationProject
          fill="#c6dbdf"
          img={pedcrossing}
          link={'./pedcrossingsim'}
          header="Pedestrian Crossing Simulator"
          subheader="Simulating the experience of crossing the road "
          buttontext="View Project"
        />

        <ExplorationProject
          fill="#F2A267"
          img={greenEggs}
          link={'https://observablehq.com/@pmisner/green-eggs-and-ham'}
          header="Green Eggs and Ham"
          subheader="A collapsible tree of the fifty words Dr. Seuss' used to write the book"
          buttontext="Coming Soon"
        />
      </HorizontalRow>
    </div>
  );
};

const Experience = () => {
  return (
    <div>
      <SectionHeading> Experience</SectionHeading>
      <SmallCaps position="first"> work and research</SmallCaps>
      <HorizontalInfo position="first">
        <Column flexgrow="2">
          <BoldBody>Gro Intelligence</BoldBody>
          <RegBody> Data Visualization Specialist</RegBody>
          <ItalicBody>Aug 2021-present</ItalicBody>
        </Column>

        <Column flexgrow="5" className="descrip">
          <RegBody>
            → Working to make agriculture, trade and climate data accessible and
            understandable to a wide audience through data visualization and
            design
          </RegBody>
        </Column>
      </HorizontalInfo>
      <HorizontalInfo>
        <Column flexgrow="2">
          <BoldBody>UrbanismX Research Group</BoldBody>
          <RegBody>Data Visualization Developer </RegBody>
          <ItalicBody>Oct 2019-Aug 2021</ItalicBody>
        </Column>

        <Column flexgrow="5" className="descrip">
          <RegBody>
            → Designed and developed data viz based web appliocations to support
            ongoing research on transportation
          </RegBody>
        </Column>
      </HorizontalInfo>
      <HorizontalInfo>
        <Column flexgrow="2">
          <BoldBody>Ready.Set.Excel.</BoldBody>
          <RegBody> Data Visualization Designer</RegBody>
          <ItalicBody>Dec 2020-Jul 2021</ItalicBody>
        </Column>

        <Column flexgrow="5" className="descrip">
          <RegBody>
            → Information design for reporting results and analysis
          </RegBody>
        </Column>
      </HorizontalInfo>
      <HorizontalInfo>
        <Column flexgrow="2">
          <BoldBody>
            Volpe National Transportation Research Systems Center
          </BoldBody>
          <RegBody>Transportation Human Factors Intern</RegBody>
          <ItalicBody>June 2019- Aug 2019</ItalicBody>
        </Column>

        <Column flexgrow="5" className="descrip">
          <RegBody>
            → Coded human factors driving simulations for ongoing research
            studies
          </RegBody>
          <RegBody>
            → Interviewed research participants and guided participants through
            experimental procedures{' '}
          </RegBody>
        </Column>
      </HorizontalInfo>
      <HorizontalInfo>
        <Column flexgrow="2">
          <BoldBody> Intern</BoldBody>
          <RegBody>Autonomous Marine Systems </RegBody>
          <ItalicBody>February 2018 - May 2018</ItalicBody>
        </Column>

        <Column flexgrow="5" className="descrip">
          <RegBody>
            → Designed data visualizations to analyze data coming off an
            autonomous drone’s sensors
          </RegBody>
        </Column>
      </HorizontalInfo>

      <SmallCaps> awards</SmallCaps>
      <HorizontalInfo position="first">
        <Column flexgrow="2">
          <BoldBody> 2020-21 Fulbright Scholar</BoldBody>
          <ItalicBody>suspended due to Covid-19</ItalicBody>
        </Column>

        <Column flexgrow="5" className="descrip">
          <RegBody>
            → Fully funded fellowship in collaboration with the IIIT-Delhi’s
            Weave Labs and SaveLIFE Foundation exploring the use of virtual
            reality to increase road safety
          </RegBody>
        </Column>
      </HorizontalInfo>
    </div>
  );
};
