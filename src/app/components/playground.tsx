import { useEffect, useRef } from "react";
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
import TransitNetworks from "../../../public/Playground/TransitNetworks.gif";
import Senator from "../../../public/Playground/Senator.png";
import MatterofTime from "../../../public/Playground/MatterofTime.png";

export default function Playground({ color }: CoreColorInput) {
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
    <PlaygroundWrapper color={color}>
      <div id="play" style={{ paddingTop: "40px" }}>
        <GridWrapper>
          <PlaygroundTitle color={color}>Playground</PlaygroundTitle>
          <ScrollInstructions color={color}>
            {" "}
            all the bits and bobs I’ve been playing around with
          </ScrollInstructions>{" "}
          {/* <ScrollAbsolute color={color} t="400px" left="100px">
            scroll →
          </ScrollAbsolute>
          <ScrollAbsolute color={color} t="350px" left="1300px">
            scroll →
          </ScrollAbsolute>
          <ScrollAbsolute color={color} t="700px" left="0px">
            scroll →
          </ScrollAbsolute>
          <ScrollAbsolute color={color} t="900px" left="900px">
            scroll →
          </ScrollAbsolute> */}
        </GridWrapper>
      </div>
      <ProjectScroll
        color={color}
        ref={scrollRef}
        onMouseDown={mouseDownHandler}
      >
        <FunProjectWrapper color={color} rotate={"-19deg"}>
          {" "}
          <FunProjectTitle
            target="_blank"
            rel="noopener noreferrer"
            href="/#play"
            color={color}
          >
            {" "}
            A Matter of Time
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={MatterofTime} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={color} rotate={"23deg"}>
          {" "}
          <FunProjectTitle
            target="_blank"
            rel="noopener noreferrer"
            href="https://goldenyearsapp.herokuapp.com/"
            color={color}
          >
            {" "}
            Golden Years →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={GoldenYears} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={color} rotate={"-15deg"}>
          <FunProjectTitle
            target="_blank"
            rel="noopener noreferrer"
            href="https://p-misner.github.io/wdvp/"
            color={color}
          >
            {" "}
            World of Data →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={WorldofData} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={color} rotate={"-15deg"}>
          <FunProjectTitle
            target="_blank"
            rel="noopener noreferrer"
            href="https://observablehq.com/@pmisner/state-soils?collection=@pmisner/soil"
            color={color}
          >
            {" "}
            State Soil →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={StateSoil} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={color} rotate={"17deg"}>
          <FunProjectTitle
            target="_blank"
            rel="noopener noreferrer"
            href="/transitnetworks"
            color={color}
          >
            {" "}
            Transit Networks →
          </FunProjectTitle>
          <SquareImageWrapper>
            <Image src={TransitNetworks} alt="image of map" draggable="false" />
          </SquareImageWrapper>
        </FunProjectWrapper>

        <FunProjectWrapper color={color} rotate={"-12deg"}>
          <FunProjectTitle
            target="_blank"
            rel="noopener noreferrer"
            href="https://observablehq.com/d/48357752cbe8c36b"
            color={color}
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
