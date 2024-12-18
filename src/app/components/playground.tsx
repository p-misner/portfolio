import { useContext, useEffect, useRef } from "react";
import { GridWrapper } from "../style/gridLayout";
import {
  FunProjectTitle,
  FunProjectWrapper,
  PlaygroundTitle,
  PlaygroundWrapper,
  ProjectScroll,
  ScrollAbsolute,
  ScrollInstructions,
  SquareImageWrapper,
} from "../style/playgroundStyle";
import { CoreColorInput } from "../style/styleConstants";
import { ImageWrapper } from "../style/projectsStyle";
import Image from "next/image";
import TestImg from "../../../public/ApolloSplash.png";
import WorldofData from "../../../public/Playground/WorldofData.png";
import GoldenYears from "../../../public/Playground/GoldenYears_Cover.png";
import StateSoil from "../../../public/Playground/StateSoil.png";
import Munsell from "../../../public/Playground/Munsell.png";
import TransitNetworks from "../../../public/Playground/TransitNetworks.gif";
import Senator from "../../../public/Playground/Senator.png";
import MatterofTime from "../../../public/Playground/MatterofTime.png";
import DLPInmates from "../../../public/Playground/DLP_inmates.png";
import { ThemeContext } from "./providers";

export default function Playground() {
  const theme = useContext(ThemeContext);

  const scrollRef = useRef<HTMLDivElement>(null);
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e: any) {
    if (!scrollRef.current) return;
    scrollRef.current.style.cursor = "grabbing";
    // scrollRef.current.userSelect = "none";
    pos = {
      // The current scroll
      left: scrollRef.current.scrollLeft,
      top: scrollRef.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e: any) {
    if (!scrollRef.current) return;

    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    scrollRef.current.scrollTop = pos.top - dy;
    scrollRef.current.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    if (!scrollRef.current) return;

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    scrollRef.current.style.cursor = "grab";
    scrollRef.current.style.removeProperty("user-select");
  };

  return (
    <PlaygroundWrapper color={theme?.colorPicked}>
      <div id="play" style={{ paddingTop: "40px" }}>
        <GridWrapper>
          <PlaygroundTitle color={theme?.colorPicked}>
            Playground
          </PlaygroundTitle>
          <ScrollInstructions color={theme?.colorPicked}>
            {" "}
            all the bits and bobs I’ve been playing around with
          </ScrollInstructions>{" "}
          <ScrollAbsolute color={theme?.colorPicked} t="400px" left="100px">
            scroll →
          </ScrollAbsolute>
          <ScrollAbsolute color={theme?.colorPicked} t="350px" left="1300px">
            scroll →
          </ScrollAbsolute>
          <ScrollAbsolute color={theme?.colorPicked} t="700px" left="0px">
            scroll →
          </ScrollAbsolute>
          <ScrollAbsolute color={theme?.colorPicked} t="900px" left="900px">
            scroll →
          </ScrollAbsolute>
        </GridWrapper>
      </div>
      <ProjectScroll
        color={theme?.colorPicked}
        ref={scrollRef}
        onMouseDown={mouseDownHandler}
      >
        <FunProjectWrapper color={theme?.colorPicked} rotate={"-19deg"}>
          {" "}
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://matteroftime.priyamisner.com/"
            color={theme?.colorPicked}
          >
            {" "}
            A Matter of Time
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={MatterofTime} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={theme?.colorPicked} rotate={"3deg"}>
          {" "}
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://blog.priyamisner.com/projects/inmatedeaths"
            color={theme?.colorPicked}
          >
            {" "}
            DLP: Federal Inmates
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image
              src={DLPInmates}
              alt="image of web page with text and chart"
              draggable="false"
            />
          </SquareImageWrapper>
        </FunProjectWrapper>
        <FunProjectWrapper color={theme?.colorPicked} rotate={"23deg"}>
          {" "}
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://goldenyearsapp.herokuapp.com/"
            color={theme?.colorPicked}
          >
            {" "}
            Golden Years →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={GoldenYears} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={theme?.colorPicked} rotate={"-15deg"}>
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://p-misner.github.io/wdvp/"
            color={theme?.colorPicked}
          >
            {" "}
            World of Data →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={WorldofData} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={theme?.colorPicked} rotate={"-15deg"}>
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://observablehq.com/@pmisner/state-soils?collection=@pmisner/soil"
            color={theme?.colorPicked}
          >
            {" "}
            State Soil →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={StateSoil} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={theme?.colorPicked} rotate={"17deg"}>
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="/projects/transitnetworks"
            color={theme?.colorPicked}
          >
            {" "}
            Transit Networks →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={TransitNetworks} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>
        <FunProjectWrapper color={theme?.colorPicked} rotate={"-15deg"}>
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://observablehq.com/@pmisner/soil-colors"
            color={theme?.colorPicked}
          >
            {" "}
            Munsell Color System →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image
              src={Munsell}
              alt="image of chromatic arrangement of colors"
              draggable="false"
            />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={theme?.colorPicked} rotate={"-12deg"}>
          <FunProjectTitle
            // target="_blank"
            // rel="noopener noreferrer"
            href="https://observablehq.com/d/48357752cbe8c36b"
            color={theme?.colorPicked}
          >
            {" "}
            Is My Senator Older Than... →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={Senator} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>
      </ProjectScroll>
    </PlaygroundWrapper>
  );
}
