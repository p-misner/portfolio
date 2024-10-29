"use client";
import { Content, FullWidthImageWrapper } from "@/app/style/contentPageStyle";
import { BottomBit, PageWrapper } from "@/app/style/gridLayout";
import { ArrayRGBA } from "@/app/utils/utils";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import { useContext, useState } from "react";
import TransitNetworks from "../../../../public/Playground/TransitNetworks.gif";
import Comparison from "../../../../public/Playground/comparisonMap.gif";
import About from "@/app/components/about";
import { ThemeContext } from "@/app/components/providers";
import { ControlPanelWrapper } from "@/app/style/controlsStyle";
import ColorPickerComponent from "@/app/components/controls";

const leaguespartan = League_Spartan({ subsets: ["latin"] });

export default function GroIntelligence() {
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
            <h1> Transit Networks</h1>
            <h2>
              Prototype network flow visualization built with deck.gl and React
              for the UrbanismX Research Group
            </h2>

            <h3> Project Background</h3>
            <p>
              During the Fall of 2019 and Spring of 2020 I worked with several
              professors and researchers from the Tufts University UrbanismX
              Research Group on an interactive map. In my time working with this
              group, I created wireframes of how the application should look and
              coded functional prototypes of two mapping features. The primary
              goal of this map was to allow urban planning researchers to
              compare different data sets and visualize the how different
              variables affected commuter flow. Questions the maps tried to
              answer included:
            </p>

            <p>→ How can we tell if a city thriving?</p>
            <p>
              → How does commuting impact a person's life in terms of economic
              structure?
            </p>
            <p>
              → What differences do variables like income, race, occupation,
              transit mode, etc. reveal about people's commuting patterns?
            </p>
            <h3> Network Flow Map Prototype</h3>

            <FullWidthImageWrapper>
              <Image src={TransitNetworks} alt="image of map" />
            </FullWidthImageWrapper>
            <p>
              Flow is the movement of a person from an origin point to a
              destination. The map below shows flow from an origin tract to a
              variety of destination tracts in Massachusetts. By clicking a
              point on the map, all the various destinations branch out from the
              point.
            </p>
            <h3> Comparison Map Prototype</h3>
            <FullWidthImageWrapper>
              <Image src={Comparison} alt="image of map" />
            </FullWidthImageWrapper>
            <p>
              One data set is compared to another data set and the difference
              between the two maps is shown in an inset map. As you can seen
              from the image, the user chooses the two data sets they would like
              to compare from a drop down menu. Both data sets are graphed on a
              split screen and the difference is shown on an inset map.
            </p>

            <h3> Development</h3>
            <p>
              I built the map using React and deck.gl, a WebGL-powered
              visualization framework for large scale datasets. Though the data
              I received was mostly clean and formatted, I used python with
              pandas to perform minor data cleaning operations.
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
