import ColorPickerComponent from "@/app/components/controls";
import PageHeader from "@/app/components/header";
import { Content } from "@/app/style/contentPageStyle";
import { ControlPanelWrapper } from "@/app/style/controlsStyle";
import { PageWrapper } from "@/app/style/gridLayout";
import { ArrayRGBA } from "@/app/utils/utils";
import { League_Spartan } from "next/font/google";
import { useState } from "react";
const leaguespartan = League_Spartan({ subsets: ["latin"] });

export default function CharlesRiver() {
  const [colorPicked, setColorPicked] = useState<ArrayRGBA>([25, 230, 220, 1]);

  return (
    <div className={leaguespartan.className}>
      <ControlPanelWrapper>
        <ColorPickerComponent
          setColorPicked={setColorPicked}
          colorPicked={colorPicked}
        />
      </ControlPanelWrapper>
      <PageHeader color={colorPicked} />
      <PageWrapper color={colorPicked}>
        <div>
          <Content color={colorPicked}>
            <h1> Charles River Labs</h1>
            <h2>coming soon</h2>
            <div style={{ height: "699px" }}></div>
          </Content>
        </div>
      </PageWrapper>{" "}
    </div>
  );
}
