import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import GoToTop from './GoToTop';

import justaccBig from '../Images/justacc_multiple.png';
import justaccDataDort from '../Images/GeoViz_datadetails.png';
import justaccWireframe from '../Images/PrototypeProcessBlue.jpeg';
import raceMapGif from '../Images/JustAccGif.gif';
import accIndexGif from '../Images/AccIndexGif.gif';
import lineGraphGif from '../Images/LineGraphsGif.gif';

import rseBig from '../Images/rse_multiplescreens.png';
import rseSiteAnalysis from '../Images/rse_siteflow.png';
import rseOrigGraphs from '../Images/rse_originalgraphs.png';
import rseHierarchy from '../Images/rse_hierarchy.png';
import rseOriginal from '../Images/rse_original.png';
import rseVersion2 from '../Images/rse_version2.png';
import rseVersion3 from '../Images/rse_version3.png';
import rseVersion4 from '../Images/rse_version4.png';
import rseVersion5 from '../Images/rse_version5.png';
import rseVersion6 from '../Images/rse_version6.png';
import rseTableFinalMore from '../Images/rse_moretables.png';
import rseTableColor from '../Images/rse_tablecolors.png';
import rseTableStyle from '../Images/rse_tablestyleguide.png';

import xaxisGif from '../Images/gro/xaxis_resize.gif';
import chartDS from '../Images/gro/ChartDS_Gro.png';
import bespoke from '../Images/gro/BespokeCharts.png';

import {
  Wrapper,
  TopSpacer,
  HeroText,
  HeroBody,
  BigImage,
  RegBody,
  BoldedLink,
  UnboldedLink,
  Video,
  RoleColumn,
  BulletList,
  BulletListItem,
  ItalicCaption,
  ItalicBody,
  tabletBreakpoint,
} from '../Explorations/DetailsStylesheet.js';

const Column = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0px 32px 0px 0px;
  flex: 1 1 0px;
`;
const HorizontalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 24px;
`;
const TwoRow = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 24px;
`;
const LeftHandSide = styled.div`
  margin: 0 auto;
`;
const RightHandSide = styled.div``;
const BoldBody = styled.span`
  font-weight: 500;
`;

export const Project_JustAcc = () => {
  ReactGA.pageview(window.location.pathname);
  return (
    <Wrapper>
      <TopSpacer />
      <HeroText>
        Geographic Visualization for Covid-19's Impact on Essential Services
      </HeroText>
      <HeroBody>
        An interactive data dashboard built under{' '}
        <BoldedLink>
          <a
            href="https://sites.google.com/view/shan-jiang/publications"
            target="_blank"
            rel="noreferrer noopener"
          >
            Dr. Shan Jiang
          </a>
        </BoldedLink>{' '}
        at Tufts University's{' '}
        <BoldedLink>
          <a
            href="https://as.tufts.edu/uep/people/faculty/shan-jiang"
            target="_blank"
            rel="noreferrer noopener"
          >
            UrbanismX Research Group
          </a>
        </BoldedLink>
        . This visualization explores how Covid-19 impacted accessibility to
        food, grocery and health services in the United States's top twenty-five
        metropolitan areas.
      </HeroBody>
      <BigImage src={justaccBig} />

      <HorizontalInfo>
        <RoleColumn>
          <h3>Duration</h3>
          <RegBody> 5 months</RegBody>
          <ItalicBody> Dec. 2020-May 2021</ItalicBody>
        </RoleColumn>
        <RoleColumn>
          <h3>Team Members</h3>
          <RegBody>
            {' '}
            Dr. Shan Jiang <ItalicBody>
              (Principle Investigator)
            </ItalicBody>{' '}
          </RegBody>
          <RegBody>
            {' '}
            Jianying Wang <ItalicBody>(Research Lead)</ItalicBody>{' '}
          </RegBody>
          <RegBody>
            {' '}
            Priya Misner <ItalicBody>
              (Website and Visualization)
            </ItalicBody>{' '}
          </RegBody>
        </RoleColumn>
        <RoleColumn>
          <h3>Tasks</h3>
          <RegBody>
            {' '}
            Designed charts, maps, and user flow based on an exisiting research
            paper and data.{' '}
          </RegBody>
          <RegBody>
            {' '}
            Coded the data dashboard for both web and mobile screens.{' '}
          </RegBody>
        </RoleColumn>
        <RoleColumn>
          <h3>Tools</h3>
          <RegBody> Sketching </RegBody>
          <RegBody> Figma </RegBody>
          <RegBody> Mapbox </RegBody>
          <RegBody> React </RegBody>
          <RegBody>
            {' '}
            <UnboldedLink>
              {' '}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://visgl.github.io/react-map-gl/"
              >
                React Map GL{' '}
              </a>{' '}
            </UnboldedLink>{' '}
          </RegBody>
          <RegBody> d3.js </RegBody>
          <RegBody> python </RegBody>
        </RoleColumn>
      </HorizontalInfo>
      <h2>The Challenge</h2>
      <RegBody>
        Dr. Shan Jiang approached me at the end of 2020 to develop a
        visualization for her lab's research into the impact of the Covid-19
        pandemic on access to services like food, grocery and health care in
        cities. A draft of a research paper existed when I came on board, as did
        a powerpoint with preliminary findings.
      </RegBody>
      <RegBody>
        The challenge: to transform the static images and text from a research
        paper into a tool that allowed{' '}
        <BoldBody>researchers to explore </BoldBody>
        the multitude of variables studied but also{' '}
        <BoldBody>told a story </BoldBody>about the research to other
        practitioners in the urban planning field. I wanted the visualization to
        entice people to play around with the various variables while
        discovering the impact Covid-19 had on food, grocery and health care
        accessibility.
      </RegBody>

      <h2> From Data to Design </h2>
      <RegBody>
        {' '}
        With twenty-five cities worth of .csv files to Excel sheets with rows of
        statistics to the conclusions drawn in the research paper draft, there
        was a lot of information to sort through before any thought of design
        could begin. Armed with the graphing capabilities of Excel,{' '}
        <BoldedLink>
          <a href="https://kepler.gl/"> kepler.gl</a>
        </BoldedLink>
        , and a notebook, I realized that the data files could be easily split
        into two groups. One set of data compared the cities to each other while
        the geographical data displayed how areas of a specific city had changed
        during the pandemic.{' '}
      </RegBody>
      <BigImage src={justaccDataDort} />
      <ItalicCaption>
        Organizing data files and categorizing variable types into two groups{' '}
      </ItalicCaption>

      <RegBody>
        {' '}
        The flow of the app had to account for the two different data
        perspectives. Before jumping into the design of the chart and map
        components, I sketched out some wireframes of the dashboard using the
        original graphics from the research paper draft as placeholders.
      </RegBody>
      <RegBody>
        The initial wireframes provided a good structure to the project but now
        the finer details had to be ironed out. In the initial prototypes, users
        were able to display both the accessibility rank index graph and the
        accessibility gap plots at the same time. The amount of data being
        displayed became overwhelming. Later versions of the dashboard split the
        graph and dot plots into separate tabs.
      </RegBody>
      <BigImage src={justaccWireframe} />
      <h2> A Closer Look: Charts and Maps</h2>
      <RegBody inputColor="#EBF3F4">
        Three of the more interesting graphics developed for the Just
        Accessibility dashboard are highlighted in this section.
      </RegBody>
      <HorizontalInfo>
        <Column>
          <BigImage src={raceMapGif} />
          <RegBody inputColor="#EBF3F4">
            The Black vs White Accessibility Comparison map uses both color and
            interactive buttons to display the geographical areas where the
            pandemic impacted resident's access to Grocery services.
          </RegBody>
          <RegBody inputColor="#EBF3F4">
            This map also uses a slider to display the Accessibility Index of
            geographical tracts. I experimented with making the map
            three-dimensioanl where height represented Accessibility Index but
            the slider was a much more understandable solution.
          </RegBody>
        </Column>
        <Column>
          <BigImage src={accIndexGif} />
          <RegBody inputColor="#EBF3F4">
            The Accessibility Index map displays the Accessibility Index (rated
            from 1 to 10) using a diverging color gradient. By toggling{' '}
            <BoldBody>Display Increase </BoldBody>and{' '}
            <BoldBody>Display Decrease</BoldBody>, most city maps follow the
            trend that the suburbs improved in accessibility during the pandemic
            while accessibility in a city's center worsened.
          </RegBody>
        </Column>
      </HorizontalInfo>
      <HorizontalInfo>
        <Column>
          <BigImage src={lineGraphGif} />
          <RegBody inputColor="#EBF3F4">
            Showing the relationship between Accessibility Index and distance
            from a city's center, this line graph allows users to add and remove
            cities at will. Other features include adding a geographic group of
            cities and highlighting specific cities on click.
          </RegBody>
        </Column>
        <Column>
          <RegBody />
        </Column>
      </HorizontalInfo>

      <h2> Development Details</h2>
      <RegBody>
        This dashboard was built using{' '}
        <BoldedLink>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React
          </a>
        </BoldedLink>{' '}
        as the frontend framework. The package{' '}
        <BoldedLink>
          <a
            href="https://visgl.github.io/react-map-gl/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React-Map-GL{' '}
          </a>
        </BoldedLink>
        was used to allow the feature's of{' '}
        <BoldedLink>
          <a
            href="https://www.mapbox.com/mapbox-gljs"
            target="_blank"
            rel="noreferrer noopener"
          >
            Mapbox GL JS{' '}
          </a>
        </BoldedLink>
        to be used inside a React application. All graphs and charts were built
        with the help of{' '}
        <BoldedLink>
          <a href="https://d3js.org/" target="_blank" rel="noreferrer noopener">
            d3.js{' '}
          </a>
        </BoldedLink>
        . Major thanks to Amanda Wattenberger's{' '}
        <BoldedLink>
          <a
            href="https://wattenberger.com/blog/react-and-d3"
            target="_blank"
            rel="noreferrer noopener"
          >
            article{' '}
          </a>
        </BoldedLink>{' '}
        on using React and d3.js together. Dropdown menus were created using the{' '}
        <BoldedLink>
          <a
            href="https://www.react-select.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            react-select{' '}
          </a>
        </BoldedLink>{' '}
        package and the navigation icons were modified from{' '}
        <BoldedLink>
          <a
            href="https://www.thenounproject.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            The Noun Project
          </a>
        </BoldedLink>
        .
      </RegBody>

      <RegBody>
        The beta version of the Just Accessibility dashboard is being{' '}
        <BoldedLink>
          <a
            href="https://justaccessibility.herokuapp.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            hosted on Heroku
          </a>
        </BoldedLink>{' '}
        but the final version will be hosted on the UrbanismX website using
        Tufts University servers.
      </RegBody>

      <GoToTop />
    </Wrapper>
  );
};

export const Project_RSE = () => {
  ReactGA.pageview(window.location.pathname);

  return (
    <Wrapper>
      <TopSpacer />
      <HeroText>Redesigning Results for Adaptive Assessments </HeroText>
      <HeroBody>
        Information design communicating the results of adaptive diagnostic math
        assessments aimed at identifying student skills gaps in math. Created
        for{' '}
        <BoldedLink>
          <a
            href="https://www.readysetexcel.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Ready.Set.Excel.{' '}
          </a>
        </BoldedLink>
        an educational nonprofit supporting students in the San Francisco Bay
        Area.
      </HeroBody>
      <BigImage src={rseBig} />
      <HorizontalInfo>
        <RoleColumn>
          <h3>Duration</h3>
          <RegBody> 4 months</RegBody>
          <ItalicBody> March. 2021-June 2021</ItalicBody>
        </RoleColumn>
        <RoleColumn>
          <h3>Role</h3>
          <RegBody> Sole Designer </RegBody>
        </RoleColumn>
        <RoleColumn maxWidth="500px">
          <h3>Tasks</h3>
          <RegBody>
            {' '}
            Performed site analysis on current system to identify strengths and
            weaknesses{' '}
          </RegBody>
          <RegBody> Redesigned charts and tables reporting results </RegBody>
          <RegBody> Defined hierarchy of features and charts </RegBody>
          <RegBody> Tested new designs on users </RegBody>
        </RoleColumn>
        <RoleColumn>
          <h3>Tools</h3>
          <RegBody> Pen and Paper </RegBody>
          <RegBody> Figma </RegBody>
          <RegBody> Adobe Illustrator </RegBody>
          <RegBody> User Testing </RegBody>
          <RegBody> Information Design </RegBody>
        </RoleColumn>
      </HorizontalInfo>
      <h2>The Challenge</h2>
      <RegBody>
        For many students struggling in math, their lack of understanding often
        stems from fundamental math concepts they failed to grasp in elementary
        and middle school. Ready.Set.Excel. has developed an innovative,
        adaptive assessment that adjusts based on student responses to figure
        out where student's misunderstanding begin.
      </RegBody>
      <RegBody>
        Teachers loved the assessment and found Ready.Set.Excel's analysis of
        students to be very accurate... once they were able to figure out how to
        read the assessment results. The big hurdles Ready.Set.Excel. faced in
        communicating the results of their adaptive assessments were:
      </RegBody>
      <BulletList>
        <BulletListItem>
          Demonstrating that not all students received the same questions
        </BulletListItem>
        <BulletListItem>
          Indicating which students were struggling and which students were
          meeting grade level expectations
        </BulletListItem>
        <BulletListItem>
          Emphasizing that a low percentage score on a concept did not
          necessarily indicate failure.{' '}
        </BulletListItem>
      </BulletList>

      <h2>Analyzing the Original Site</h2>
      <RegBody>
        {' '}
        Ready.Set.Excel. had lots of useful features built into their website
        including filtering by first or last name, displaying the most missed
        question, graphs displaying scores by concept among many other features.
        However, getting to a feature took a lot of clicks. For example, for a
        teacher to view their class' score on a bar graph they had to:
      </RegBody>
      <RegBody>
        {' '}
        Login ➝ Select Class Name from Dropdown ➝ Click Results/Analysis Tab ➝
        Click Class Cateogry Score Button ➝ View Class Graphs.
      </RegBody>
      <RegBody>
        That's five clicks for a pretty common action! Some actions took as many
        as nine clicks.
      </RegBody>
      <BigImage src={rseSiteAnalysis} />
      <ItalicCaption>
        A site map of the original Ready. Set. Excel. data portal .
      </ItalicCaption>

      <RegBody>
        Another big point of confusion for many teachers was the fact that a 50%
        on the diagnostic assessment could mean that student was performing
        above grade expectations. For example, for rising 6th graders, students
        are only expected to get a 40% on the Fraction Equivalence concept as
        most of this topic would be covered in the second half of 7th grade.
        But, separating the score from every teacher's perception that 50% meant
        failure was proving difficult.
      </RegBody>
      <RegBody>
        The category bubbles graph was much clearer to teachers as it indicated
        pictorally what students got wrong or right and if they were presented
        with upper or lower level questions.
      </RegBody>
      <BigImage src={rseOrigGraphs} />
      <ItalicCaption>
        The original visualizations used to communicate test results to students
        and teachers.
      </ItalicCaption>

      <h2>A New Information Hierarchy</h2>
      <RegBody>
        More so than the graphs themselves, teacher's biggest complaint about
        Ready.Set.Excel's results was that the information was hard to locate
        and the current site was difficult to navigate. As a first step, I
        focused on the information hierarchy of the assessment results page over
        the visual style of the charts.
      </RegBody>
      <RegBody>
        After conversations with the Ready.Set.Excel. team, teachers and looking
        at other products in the same space (i.e. Schoology and SchoolLoop), the
        common thread was wanting to begin with an overview of how a class was
        doing before diving into specific students or specific assessments. With
        this goal of <BoldBody>starting with an overview</BoldBody> and{' '}
        <BoldBody>minimizing clicks </BoldBody> when accessing more specific
        information, I set to work.
      </RegBody>

      <BigImage src={rseHierarchy} />
      <RegBody>
        In the new site hierarchy the user is immediately taken to a class
        overview page after selecting the class. If the teacher wanted to see
        more details, clicking on a student name or expanding a graph would
        reveal further information. Users could now view the class overview bar
        graph in two clicks.
      </RegBody>
      <h2>Redesigning Result Graphs</h2>
      <BigImage src={rseVersion6} />
      <RegBody>
        The goal of the original bar graph used by Ready.Set.Excel. was to show
        if a student was meeting grade expectations on a math concept. However,
        if a teacher didn't understand or notice the dotted line indicating the
        grade expectation, they would incorrectly rely on the percentage to tell
        them if a student was succeeding. To get to the final graph currently
        being used by Ready.Set.Excel, I went through a lot of different
        iterations.
      </RegBody>
      <HorizontalInfo>
        <Column>
          <BigImage src={rseOriginal} />

          <RegBody>
            <BoldBody>Original Graph </BoldBody> Used to display student and
            class results.
          </RegBody>
        </Column>
        <Column>
          <BigImage src={rseVersion2} />
          <RegBody>
            <BoldBody>V2: Modernized Original </BoldBody> My first draft simply
            modernized the existing draft. While it looked a bit better than the
            orignal, it had all the same issues as before.
          </RegBody>
        </Column>
        <Column>
          <BigImage src={rseVersion3} />

          <RegBody>
            <BoldBody>V3: Red Bad, Green Good </BoldBody> I wanted to use color
            as a clear indicator of success and failure. This version still has
            the percent numbers, but I was pleased with how it emphasized the
            expectation line.
          </RegBody>
        </Column>
      </HorizontalInfo>
      <HorizontalInfo>
        <Column>
          <BigImage src={rseVersion4} />
          <RegBody>
            <BoldBody>V4: No Numbers, Just Color </BoldBody> As a different tact
            to solving the percentage perception problem, I used the 3 stages of
            problem solving to display the results. While getting rid of the
            numbers was a good move, this solution was visually too messy.
          </RegBody>
        </Column>
        <Column>
          <BigImage src={rseVersion5} />

          <RegBody>
            <BoldBody>V5: Starting At The Expectation Line </BoldBody> Combining
            the best parts of v3 and v4, I created a bar graph that used the
            expectation line as a starting point rather than zero. The use of
            color emphasized clearly who was succeeding (or not).
          </RegBody>
        </Column>
        <Column>
          <RegBody />
        </Column>
      </HorizontalInfo>

      <h2>Redesigning Result Tables</h2>

      {/* <BigImage src={rseTableFinal}/> */}
      <BigImage src={rseTableFinalMore} />
      <RegBody>
        A lot of the information buried within the original Ready.Set.Excel.
        results page came in the form of tables: tables of students enrolled in
        a class section, tables of assessment results, tables of concept
        weaknesses and strengths. While tables are a great way to present a lot
        of data concisely, having so many different tables each in a different
        style made them difficult to scan.
      </RegBody>
      <RegBody>
        Ready.Set.Excel. needed a unified table style that could be applied to
        all their tabular data. Further, these tables had to be easy to scan to
        allow teachers to quickly skim through all their students results with
        ease. I was heavily inspired by the tables{' '}
        <BoldedLink>
          <a
            href="https://www.fivethirtyeight.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Five Thirty Eight
          </a>
        </BoldedLink>{' '}
        uses to display sports statistics (
        <UnboldedLink>
          <a
            href="https://fivethirtyeight.com/features/nfl-week-13-playoff-implications-be-thankful-for-meaningful-games-this-thanksgiving/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Example 1
          </a>
        </UnboldedLink>
        ,{' '}
        <UnboldedLink>
          <a
            href="https://projects.fivethirtyeight.com/soccer-predictions/premier-league/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2
          </a>
        </UnboldedLink>
        , and{' '}
        <UnboldedLink>
          <a
            href="https://fivethirtyeight.com/features/how-fivethirtyeight-calculates-pollster-ratings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            3
          </a>
        </UnboldedLink>
        ).
      </RegBody>
      <RegBody>
        While designing the tables, one of the big decisions I made was the
        color scheme of the table cells. A cell's background would be colored
        according to their score. Effectively, the two color schemes differed in
        which group they chose to highlight and which group to deemphasize.
      </RegBody>
      <BigImage src={rseTableColor} />

      <ItalicCaption>
        Color scheme explorations for the data tables.
      </ItalicCaption>

      <RegBody>
        The Monochromatic Color Scheme focused on the worst scores, while high
        scores faded into the background. The Diverging Color Scheme focused on
        the top and bottom scores while deemphasizing the middle. Since
        Ready.Set.Excel. wanted to celebrate student's successes while also
        identifying their weaknesses, I chose to use the Diverging Color Scheme.
      </RegBody>
      <RegBody>
        To ensure all the tables felt cohesive, I created a style guide defining
        how tables could be put together.
      </RegBody>
      <BigImage src={rseTableStyle} />

      <GoToTop />
    </Wrapper>
  );
};

export const Project_VRDriving = () => {
  ReactGA.pageview(window.location.pathname);

  return (
    <Wrapper>
      <TopSpacer />
      <HeroText>Gro Intelligence</HeroText>
      <HeroBody>
        A peek into some of the projects I've worked on. Working across
        agriculture, climate and economic data, I've designed experiences from
        the tiniest of micro-visualizations to overhauling the way we
        communicate the climate's impact on crop health.
      </HeroBody>
      {/* <BigImage src={airsimcover} /> */}
      <ItalicCaption>
        {' '}
        Note: As much of my work at Gro deal with proprietary data, the images
        and content presented may have been adjusted to protect confidentiality.
        To learn more, feel free to reach out- happy to chat.
      </ItalicCaption>
      <h2>Beyond Graphs: Dashboards with Insight</h2>
      <h2>Chart Design System</h2>
      <TwoRow>
        <LeftHandSide>
          <BigImage src={chartDS} />
        </LeftHandSide>
        <RightHandSide>
          <RegBody>
            A design system dealing with basic UI elements and typography was
            already in place when I joined Gro. Due to the expansive amount of
            topics and data types Gro works with, chart styles were varied and
            not standard across products. My task centered on finding a way to
            lightweight approach to unifying charts at Gro while also allowing
            for flexibility in terms of screen sizing, data range, chart type
            (line, bar, area, etc.) and additional context.
          </RegBody>
          <RegBody>
            Interactive features like an x-axis that changes how the date
            formatting based on the data range exemplify the philosophy behind
            this system: providing users with the context relevant to the level
            they are at but nothing extra.
          </RegBody>
          <BigImage src={xaxisGif} />
          <RegBody>
            Throughout the process, I worked closely with stakeholders, subject
            matter experts and developers to improve the consistency and quality
            of our standardized data visualization components.
          </RegBody>
        </RightHandSide>
      </TwoRow>
      <h2>Bespoke Charts + Infographics </h2>
      <TwoRow>
        <LeftHandSide>
          <BigImage src={bespoke} />
        </LeftHandSide>
        <RightHandSide>
          <RegBody>
            Creating custom charts and visualizations for key projects is a
            regular part of my work. This involves working closely with the
            project team and subject matter experts to understand their needs
            and developing creative solutions (often under tight deadlines!) to
            communicate complex data in an engaging way.
          </RegBody>
          <RegBody>
            Some public work of mine you can view:
            <BoldedLink>
              <a href="https://community.gro-intelligence.com/global-fertilizer-impact-monitor/info">
                {' '}
                Fertilizer 101 from the Global Fertilizer Impact Monitor
              </a>
            </BoldedLink>
          </RegBody>
        </RightHandSide>
      </TwoRow>

      <GoToTop />
    </Wrapper>
  );
};
