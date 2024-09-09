"use client";
import { useEffect, useRef, useState } from "react";
import { FullWidthWrapper } from "../style/gridLayout";
import {
  Axis,
  HeroSubtitle,
  HeroText,
  Line,
  MoveLineGroup,
  MovePath,
  SineSVG,
  SineWaveGridWrapper,
} from "../style/sineWaveStyle";
import { CoreColorInput } from "../style/styleConstants";
import { ArrayRGBA } from "../utils/utils";

export default function SineWave({ color }: CoreColorInput) {
  return (
    <FullWidthWrapper>
      <SineWaveGridWrapper>
        <HeroText color={color}> designing with data </HeroText>
        <HeroSubtitle color={color}>
          a data visualization designer with a background in engineering, I love
          working with complex data and turning it into something beautiful into
          data driven designer
        </HeroSubtitle>
        <CanvasWave color={color} />
      </SineWaveGridWrapper>
    </FullWidthWrapper>
  );
}

export function CanvasWave({ color }: CoreColorInput) {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const [svgDim, setSvgDim] = useState({ h: 0, w: 0 });
  let progress = 0;

  var origin = {
    x: 0,
    y: svgDim.h / 2,
  };
  let hi = "ho";
  let a1 = 0.25;
  let a2 = 0.5;
  let nw1 = 4;
  let nw2 = 1.2;
  let amp1 = (svgDim.h * a1) / 4;
  let angfreq1 = (2 * Math.PI) / (svgDim.w / nw1); //w = 2PI/T
  let phase1 = 0;

  let amp2 = (svgDim.h * a2) / 4;
  let angfreq2 = (2 * Math.PI) / (svgDim.w / nw2); //w = 2PI/T
  let phase2 = 0;

  useEffect(() => {
    setPath(progress);
    if (svgRef.current) {
      setSvgDim({
        h: svgRef.current.getBoundingClientRect().height,
        w: svgRef.current.getBoundingClientRect().width,
      });
    }
    let svg = svgRef.current;
  }, []);

  const setPath = ({ numWaves, amp }: { numWaves: number; amp: number }) => {
    //https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_Introductory_Physics_-_Building_Models_to_Describe_Our_World_(Martin_Neary_Rinaldo_and_Woodman)/14%3A_Waves/14.06%3A_Superposition_of_waves_and_interference

    // Step 1: Create Animated Normal Sine Waves

    // let wavelength = 10; wavelenght is reverse of numWaves
    // let numWaves = 2; // whole and  numbers only;
    // let amp = 0.3;

    let centerHeight = svgDim.h / 2;
    let bottomFraction = numWaves * 4;

    let startPath = `M 0 ${centerHeight}`;
    let singleWave = `q ${svgDim.w / bottomFraction} ${
      (amp * svgDim.h) / 2
    },   ${(2 * svgDim.w) / bottomFraction} 0 q ${svgDim.w / bottomFraction} ${
      (-1 * amp * svgDim.h) / 2
    },   ${(2 * svgDim.w) / bottomFraction} 0`;

    // const multipleWaves = singleWave.repeat(numWaves * 4);
    const multipleWaves = singleWave.repeat(numWaves * 4);
    const path = startPath + multipleWaves;
    return path;
  };

  const combineTwoSinesCircles_Append = ({
    origin,
    svg,
    amp1,
    amp2,
    angfreq1,
    angfreq2,
    phase1,
    phase2,
    color,
    thickness,
    dasharray,
  }: {
    origin: {
      x: number;
      y: number;
    };
    svg: any;
    amp1: number;
    amp2: number;
    angfreq1: number;
    angfreq2: number;
    phase1: number;
    phase2: number;
    color: ArrayRGBA;
    thickness: number;
    dasharray: string;
  }) => {
    var rarity = 1; // point spacing

    let lineArray: any = Array.from(Array(3000).keys());

    return (
      <MoveLineGroup>
        {lineArray.map((x: number) => (
          <Line
            color={color}
            // strokeDasharray={dasharray}
            // strokeWidth={`${thickness}px`}
            // r={4}
            key={x}
            x1={(x - 2) * rarity + origin.x}
            y1={(
              amp1 * Math.sin(angfreq1 * (x - 1) + phase1) +
              amp2 * Math.sin(angfreq2 * (x - 1) + phase2) +
              origin.y
            ).toFixed(5)}
            x2={x * rarity + origin.x}
            y2={(
              amp1 * Math.sin(angfreq1 * x + phase1) +
              amp2 * Math.sin(angfreq2 * x + phase2) +
              origin.y
            ).toFixed(5)}
          />
        ))}
      </MoveLineGroup>
    );
  };

  return (
    <SineSVG ref={svgRef}>
      <MovePath
        ref={pathRef}
        color={color}
        d={setPath({ numWaves: nw1, amp: a1 })}
      />
      <MovePath
        ref={pathRef}
        color={color}
        dasharray="4 4"
        d={setPath({ numWaves: nw2, amp: a2 })}
      />
      {combineTwoSinesCircles_Append({
        origin,
        svg: svgRef.current,
        amp1,
        amp2,
        angfreq1,
        angfreq2,
        phase1,
        phase2,
        color: color,
        thickness: 2,
        dasharray: "2 2",
      })}
      {/* <Axis d={`M 0 ${svgDim.h / 2} L ${svgDim.w} ${svgDim.h / 2}`} /> */}
    </SineSVG>
  );
}
