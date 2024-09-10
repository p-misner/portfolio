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

export default function SineWave({
  color,
  waveOptions,
}: {
  color: ArrayRGBA;
  waveOptions: { a1: number; a2: number; nw1: number; nw2: number };
}) {
  return (
    <FullWidthWrapper>
      <SineWaveGridWrapper>
        <HeroText color={color}> designing with data </HeroText>
        <HeroSubtitle color={color}>
          a data visualization designer with a background in engineering, I love
          working with complex data and turning it into something beautiful into
          data driven designer
        </HeroSubtitle>
        <CanvasWave color={color} waveOptions={waveOptions} />
      </SineWaveGridWrapper>
    </FullWidthWrapper>
  );
}

export function CanvasWave({
  color,
  waveOptions,
}: {
  color: ArrayRGBA;
  waveOptions: { a1: number; a2: number; nw1: number; nw2: number };
}) {
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const [svgDim, setSvgDim] = useState({ h: 0, w: 0 });
  let progress = 0;

  var origin = {
    x: 0,
    y: 300,
  };
  let amp1 = (svgDim.h * waveOptions.a1) / 4;
  let angfreq1 = (2 * Math.PI) / (svgDim.w / waveOptions.nw1); //w = 2PI/T
  let phase1 = 0;

  let amp2 = (svgDim.h * waveOptions.a2) / 4;
  let angfreq2 = (2 * Math.PI) / (svgDim.w / waveOptions.nw2); //w = 2PI/T
  let phase2 = 0;

  useEffect(() => {
    if (svgRef.current) {
      setSvgDim({
        h: svgRef.current.getBoundingClientRect().height,
        w: svgRef.current.getBoundingClientRect().width,
      });
    }
    let svg = svgRef.current;
  }, []);

  const setPath = ({ numWaves, amp }: { numWaves: number; amp: number }) => {
    let centerHeight = origin.y;
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
        d={setPath({ numWaves: waveOptions.nw1, amp: waveOptions.a1 })}
      />
      <MovePath
        ref={pathRef}
        color={color}
        dasharray="4 4"
        d={setPath({ numWaves: waveOptions.nw2, amp: waveOptions.a2 })}
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
