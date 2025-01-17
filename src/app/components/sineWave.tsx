"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { FullWidthWrapper } from "../style/gridLayout";
import {
  Axis,
  FindMeWrapper,
  HeroSubtitle,
  HeroSubtitleWrapper,
  HeroText,
  Line,
  LogoSVG,
  MoveLineGroup,
  MovePath,
  SineSVG,
  SineWaveGridWrapper,
} from "../style/sineWaveStyle";
import { CoreColorInput } from "../style/styleConstants";
import { ArrayRGBA } from "../utils/utils";
import Link from "next/link";
import { ThemeContext } from "./providers";

export default function SineWave() {
  const theme = useContext(ThemeContext);

  return (
    <FullWidthWrapper>
      <SineWaveGridWrapper>
        <HeroText color={theme.colorPicked}> designing with data </HeroText>
        <HeroSubtitleWrapper>
          <HeroSubtitle color={theme.colorPicked}>
            a data visualization designer with a background in mechanical
            engineering, I love working with complex data to transform it into
            something beautiful and usable
          </HeroSubtitle>
          <FindMeWrapper>
            {" "}
            <HeroSubtitle color={theme.colorPicked}>
              find me on the internet at:
            </HeroSubtitle>
            <Link
              // target="_blank"
              // rel="noopener noreferrer"
              href="https://observablehq.com/@pmisner?page=1&sort=stars&direction=desc"
            >
              <LogoSVG
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color={theme.colorPicked}
              >
                <path
                  d="M9.89983 1.56218C6.47984 2.19169 3.49027 4.3871 1.92505 7.42448C1.41636 8.42382 1.07984 9.36022 0.845052 10.4382C0.602444 11.6028 0.602444 13.6566 0.852878 14.8212C1.50244 17.8664 3.13027 20.2979 5.67375 22.0133C6.78505 22.7687 8.12331 23.3196 9.62592 23.6422C10.792 23.894 12.8346 23.894 13.9851 23.6501C16.1451 23.1779 17.9607 22.2179 19.5024 20.7386C21.0911 19.1963 22.0929 17.4887 22.6172 15.4035C24.1511 9.34448 20.5668 3.33267 14.4781 1.74316C13.6564 1.52284 13.4451 1.49923 12.052 1.47562C10.9485 1.45989 10.3537 1.48349 9.89983 1.56218ZM13.4372 4.47366C15.0572 4.993 16.1216 6.23628 16.8103 8.44743C17.2407 9.82448 17.3346 10.5563 17.3346 12.6966C17.3346 14.2232 17.3033 14.774 17.1937 15.3327C16.7007 17.8428 15.7303 19.5661 14.3685 20.3687C13.6407 20.8015 13.0224 20.9746 12.0833 21.014C9.3207 21.1478 7.55201 19.6527 6.69897 16.4658C6.43288 15.4586 6.35462 14.9628 6.26853 13.7274C5.98679 9.73792 7.11375 6.25989 9.10157 5.00087C9.64157 4.65464 10.3303 4.3871 10.9172 4.27694C11.559 4.1589 12.7485 4.25333 13.4372 4.47366Z"
                  fill="#082939"
                ></path>
                <path
                  d="M10.7451 10.029C10.166 10.2572 9.60254 10.7923 9.29732 11.4218C9.07037 11.8782 9.03906 12.0198 9.03906 12.5785C9.03906 13.3339 9.20341 13.8533 9.59471 14.349C10.4086 15.3798 11.786 15.7261 12.9443 15.191C14.3843 14.5221 15.0025 12.8146 14.306 11.3667C14.0556 10.8395 13.3982 10.2257 12.8738 10.029C12.2869 9.80868 11.3165 9.80868 10.7451 10.029Z"
                  // fill="#082939"
                ></path>
              </LogoSVG>
            </Link>
            <Link
              // target="_blank"
              // rel="noopener noreferrer"
              href="https://www.linkedin.com/in/priyamisner/"
            >
              <LogoSVG
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color={theme.colorPicked}
              >
                <path
                  d="M0.942934 0.628092C0.446934 0.892092 0.478934 0.140091 0.478934 12.5001C0.478934 22.4361 0.494934 23.8201 0.598934 24.0201C0.862934 24.5321 0.0789336 24.5001 12.4789 24.5001C22.4149 24.5001 23.7989 24.4841 23.9989 24.3801C24.5109 24.1161 24.4789 24.9001 24.4789 12.5001C24.4789 0.100092 24.5109 0.884092 23.9989 0.620092C23.7989 0.516092 22.4149 0.500093 12.4629 0.500093C2.62293 0.508093 1.12693 0.524092 0.942934 0.628092ZM6.64693 4.17209C6.83093 4.31609 6.83893 4.37209 6.86293 5.59609C6.88693 6.78809 6.87893 6.87609 6.71893 7.08409L6.55093 7.30009H5.07093C3.15093 7.30009 3.27893 7.42009 3.27893 5.68409C3.27893 3.91609 3.17493 4.02009 5.04693 4.02009C6.31893 4.02009 6.47893 4.03609 6.64693 4.17209ZM18.9509 9.16409C20.0629 9.56409 20.7829 10.1801 21.2149 11.1001C21.6309 12.0041 21.6709 12.4681 21.6789 16.6761C21.6789 20.3481 21.6709 20.5081 21.5269 20.6521C21.3109 20.8681 20.8469 20.9241 19.5589 20.8921C18.4709 20.8601 18.4629 20.8601 18.2709 20.6361L18.0789 20.4121V17.4361C18.0789 13.3721 17.9989 12.8281 17.3429 12.2121C16.8709 11.7641 16.5909 11.6601 15.8389 11.6601C15.2309 11.6601 15.0949 11.6921 14.6229 11.9241C13.9109 12.2761 13.4149 12.8201 13.1829 13.5241C13.0229 14.0281 13.0069 14.2521 12.9669 17.2201C12.9349 19.5001 12.8949 20.4281 12.8229 20.5481C12.6629 20.8281 12.2949 20.9001 11.1029 20.9001C9.85493 20.9001 9.49493 20.8041 9.35893 20.4521C9.30293 20.3161 9.28693 18.3641 9.29493 14.8921L9.31893 9.54809L9.50293 9.36409C9.67093 9.19609 9.76693 9.18009 10.7349 9.15609C12.4469 9.10809 12.6389 9.20409 12.6389 10.0521C12.6389 10.9081 12.7509 11.0041 13.2069 10.5321C13.3509 10.3721 13.6949 10.0921 13.9589 9.90009C15.0709 9.10809 15.8309 8.89209 17.3189 8.92409C18.1989 8.94809 18.4469 8.98809 18.9509 9.16409ZM6.68693 9.40409L6.87893 9.62809V15.0201V20.4121L6.68693 20.6361C6.49493 20.8601 6.48693 20.8601 5.39893 20.8921C4.11093 20.9241 3.64693 20.8681 3.43093 20.6521C3.28693 20.5081 3.27893 20.3241 3.27893 15.0361C3.27893 9.13209 3.27093 9.28409 3.70293 9.19609C3.79893 9.17209 4.47093 9.16409 5.18293 9.17209L6.49493 9.18009L6.68693 9.40409Z"
                  // fill="#082939"
                ></path>
              </LogoSVG>
            </Link>
          </FindMeWrapper>
        </HeroSubtitleWrapper>
      </SineWaveGridWrapper>
    </FullWidthWrapper>
  );
}

export function CanvasWave() {
  const theme = useContext(ThemeContext);
  const pathRef = useRef(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgDim, setSvgDim] = useState({ h: 0, w: 0 });
  let progress = 0;

  var origin = {
    x: 0,
    y: 300,
  };
  let amp1 = (svgDim.h * theme.waveOptions.a1) / 4;
  let angfreq1 = (2 * Math.PI) / (svgDim.w / theme.waveOptions.nw1); //w = 2PI/T
  let phase1 = 0;

  let amp2 = (svgDim.h * theme.waveOptions.a2) / 4;
  let angfreq2 = (2 * Math.PI) / (svgDim.w / theme.waveOptions.nw2); //w = 2PI/T
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
    color: any;
    thickness: number;
    dasharray: string;
  }) => {
    var rarity = 1; // point spacing

    let lineArray: any = Array.from(Array(3000).keys());

    return (
      <MoveLineGroup>
        {lineArray.map((x: number) => (
          <Line
            color={theme.colorPicked}
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
        color={theme.colorPicked}
        d={setPath({
          numWaves: theme.waveOptions.nw1,
          amp: theme.waveOptions.a1,
        })}
      />
      <MovePath
        ref={pathRef}
        color={theme.colorPicked}
        // dasharray="4 4"
        d={setPath({
          numWaves: theme.waveOptions.nw2,
          amp: theme.waveOptions.a2,
        })}
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
        color: theme,
        thickness: 2,
        dasharray: "2 2",
      })}
      {/* <Axis d={`M 0 ${svgDim.h / 2} L ${svgDim.w} ${svgDim.h / 2}`} /> */}
    </SineSVG>
  );
}
