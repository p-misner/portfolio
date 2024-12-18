"use client";
import About from "@/app/components/about";
import ColorPickerComponent from "@/app/components/controls";
import PageHeader from "@/app/components/header";
import {
  Content,
  FullWidthImageWrapper,
  FullWidthImageWrapperContain,
} from "@/app/style/contentPageStyle";
import { ControlPanelWrapper } from "@/app/style/controlsStyle";
import { BottomBit, PageWrapper } from "@/app/style/gridLayout";
import { ArrayRGBA } from "@/app/utils/utils";
import { League_Spartan } from "next/font/google";
import Image from "next/image";
import { useContext, useState } from "react";
const leaguespartan = League_Spartan({ subsets: ["latin"] });
import CharlesRiverCover from "../../../../public/CharlesRiver/CR-Apollo-Showcase.png";
import { ThemeContext } from "@/app/components/providers";

export default function CharlesRiver() {
  const theme = useContext(ThemeContext);

  return (
    <div className={leaguespartan.className}>
      <PageWrapper projectpage={true} color={theme?.colorPicked}>
        {/* <ControlPanelWrapper>
          <ColorPickerComponent />
        </ControlPanelWrapper> */}
        <div>
          <Content color={theme?.colorPicked}>
            <h1> Charles River Labs</h1>
            <h2>
              Data visualization design for Apollo, a real-time toxicology study
              data portal. As the product designer for the Data & Findings
              portion of the portal, I worked with scientists, researchers and
              engineers to best present the range of quantitative and
              qualitative data associated with pre-clinical toxicology studies.
            </h2>
            <h4>
              Note: As my work at Charles River dealt with proprietary data,
              only publicly available images and content are shown to protect
              confidentiality.
            </h4>
            <FullWidthImageWrapperContain>
              <Image src={CharlesRiverCover} alt="image of map" />
            </FullWidthImageWrapperContain>
            <div style={{ height: "699px" }}></div>
          </Content>
        </div>
      </PageWrapper>{" "}
      <BottomBit projectpage={true} color={theme?.colorPicked}>
        <About />
      </BottomBit>
    </div>
  );
}
