"use client";
import ColorPickerComponent from "@/app/components/controls";
import PageHeader from "@/app/components/header";
import {
  Content,
  FullWidthImageWrapper,
  SmallColumn,
} from "@/app/style/contentPageStyle";
import { ControlPanelWrapper } from "@/app/style/controlsStyle";
import { BottomBit, PageWrapper } from "@/app/style/gridLayout";
import { ArrayRGBA } from "@/app/utils/utils";
import { League_Spartan } from "next/font/google";
import { useContext, useState } from "react";
import HeroImg from "../../../../public/UrbanismX/justacc_multiple.png";
import DatatoDesignImg from "../../../..//public/UrbanismX/GeoViz_datadetails.png";
import Process from "../../../../public/UrbanismX/PrototypeProcessBlue.jpg";
import BlackWhiteMap from "../../../../public/UrbanismX/JustAccGif.gif";
import AccIndex from "../../../../public/UrbanismX/AccIndexGif.gif";
import DistanceCityCenter from "../../../../public/UrbanismX/LineGraphsGif.gif";
import Image from "next/image";
import About from "@/app/components/about";
import { ThemeContext } from "@/app/components/providers";

const leaguespartan = League_Spartan({ subsets: ["latin"] });

export default function UrbanismX() {
  const defaultColor: ArrayRGBA = [25, 149, 230, 1];
  const [colorPicked, setColorPicked] = useState<ArrayRGBA>(defaultColor);
  const theme = useContext(ThemeContext);

  return (
    <div className={leaguespartan.className}>
      <PageWrapper projectpage={true} color={theme?.colorPicked}>
        <ControlPanelWrapper>
          <ColorPickerComponent />
        </ControlPanelWrapper>
        <div>
          <Content color={theme?.colorPicked}>
            <h1> UrbanismX at Tufts</h1>
            <h2>
              Building an interactive data dashboard built under Dr. Shan Jiang
              for Tufts University's UrbanismX Research Group . This
              visualization explores how Covid-19 impacted accessibility to
              food, grocery and health services in the United States's top
              twenty-five metropolitan areas.
            </h2>
            <FullWidthImageWrapper>
              <Image src={HeroImg} alt="image of map" />
            </FullWidthImageWrapper>
            <SmallColumn gridColumn="2 / span 2">
              <p>Duration</p>
              <p>5 months</p>
              <p>Dec 2020- May 2021</p>
            </SmallColumn>
            <SmallColumn gridColumn="4 / span 2">
              <p>Team Members</p>
              <p>Dr. Shan Jiang</p>
              <p>(Principle Investigator)</p>
              <p>Jianying Wang</p>
              <p>(Research Lead)</p>
              <p>Priya Misner</p>
              <p>(Website and Visualization)</p>
            </SmallColumn>
            <SmallColumn gridColumn="6 / span 4">
              <p> Tasks</p>
              <p>
                {" "}
                Designed charts, maps, and user flow based on an exisiting
                research paper and data.
              </p>
              <p> Coded the data dashboard for both web and mobile screens.</p>
            </SmallColumn>
            <SmallColumn gridColumn="10/ span 2">
              <p>Tools</p>
              <p>Figma</p>
              <p>Mapbox</p>
              <p>React</p>
              <p>React Map GL</p>
              <p>d3.js</p>
              <p>python</p>
            </SmallColumn>
            <h3> The Challenge</h3>
            <p>
              Dr. Shan Jiang approached me at the end of 2020 to develop a
              visualization for her lab's research into the impact of the
              Covid-19 pandemic on access to services like food, grocery and
              health care in cities. A draft of a research paper existed when I
              came on board, as did a powerpoint with preliminary findings.
            </p>
            <p>
              The challenge: to transform the static images and text from a
              research paper into a tool that allowed researchers to explore the
              multitude of variables studied but also told a story about the
              research to other practitioners in the urban planning field. I
              wanted the visualization to entice people to play around with the
              various variables while discovering the impact Covid-19 had on
              food, grocery and health care accessibility.
            </p>
            <h3> From Data to Design</h3>
            <p>
              With twenty-five cities worth of .csv files to Excel sheets with
              rows of statistics to the conclusions drawn in the research paper
              draft, there was a lot of information to sort through before any
              thought of design could begin. Armed with the graphing
              capabilities of Excel, kepler.gl, and a notebook, I realized that
              the data files could be easily split into two groups. One set of
              data compared the cities to each other while the geographical data
              displayed how areas of a specific city had changed during the
              pandemic.
            </p>
            <FullWidthImageWrapper>
              <Image src={DatatoDesignImg} alt="list of csvs" />
            </FullWidthImageWrapper>
            <p>
              The flow of the app had to account for the two different data
              perspectives. Before jumping into the design of the chart and map
              components, I sketched out some wireframes of the dashboard using
              the original graphics from the research paper draft as
              placeholders.
            </p>
            <p>
              The initial wireframes provided a good structure to the project
              but now the finer details had to be ironed out. In the initial
              prototypes, users were able to display both the accessibility rank
              index graph and the accessibility gap plots at the same time. The
              amount of data being displayed became overwhelming. Later versions
              of the dashboard split the graph and dot plots into separate tabs.
            </p>
            <FullWidthImageWrapper>
              <Image src={Process} alt="stages of dashboard design" />
            </FullWidthImageWrapper>
            <h3> A Closer Look: Charts and Maps</h3>
            <p>
              Three of the more interesting graphics developed for the Just
              Accessibility dashboard are highlighted in this section.
            </p>
            <SmallColumn gridColumn="2 /span 5">
              <p>Black vs White Accessibility Comparison</p>
              <FullWidthImageWrapper>
                <Image src={BlackWhiteMap} alt="gif of map" />
              </FullWidthImageWrapper>

              <p>
                This map uses both color and interactive buttons to display the
                geographical areas where the pandemic impacted resident's access
                to Grocery services.
              </p>
              <p>
                {" "}
                This map also uses a slider to display the Accessibility Index
                of geographical tracts. I experimented with making the map
                three-dimensiona; where height represented Accessibility Index
                but the slider was a much more understandable solution.
              </p>
            </SmallColumn>
            <SmallColumn gridColumn="7 /span 5">
              <p>Accessibility Index</p>
              <FullWidthImageWrapper>
                <Image src={AccIndex} alt="gif of map" />
              </FullWidthImageWrapper>

              <p>
                The Accessibility Index map displays the Accessibility Index
                (rated from 1 to 10) using a diverging color gradient. By
                toggling Display Increase and Display Decrease, most city maps
                follow the trend that the suburbs improved in accessibility
                during the pandemic while accessibility in a city's center
                worsened.
              </p>
            </SmallColumn>
            <SmallColumn gridColumn="2 /span 5">
              <p>Accessibility Index vs Distance from City Center</p>
              <FullWidthImageWrapper>
                <Image src={DistanceCityCenter} alt="gif of map" />
              </FullWidthImageWrapper>

              <p>
                Showing the relationship between Accessibility Index and
                distance from a city's center, this line graph allows users to
                add and remove cities at will. Other features include adding a
                geographic group of cities and highlighting specific cities on
                click.
              </p>
            </SmallColumn>

            <h3> Development Details</h3>
            <p>
              This dashboard was built using React as the frontend framework.
              The package React-Map-GL was used to allow the feature's of Mapbox
              GL JS to be used inside a React application. All graphs and charts
              were built with the help of d3.js . Major thanks to Amanda
              Wattenberger's article on using React and d3.js together. Dropdown
              menus were created using the react-select package and the
              navigation icons were modified from The Noun Project.
            </p>
          </Content>
        </div>
      </PageWrapper>{" "}
      <BottomBit projectpage={true} color={theme?.colorPicked}>
        <About />
      </BottomBit>
    </div>
  );
}
