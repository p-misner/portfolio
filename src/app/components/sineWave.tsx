import { useEffect, useRef } from "react";
import { FullWidthWrapper } from "../style/gridLayout";
import {
  HeroSubtitle,
  HeroText,
  SineCanvas,
  SineWaveGridWrapper,
} from "../style/sineWaveStyle";
import { CoreColorInput } from "../style/styleConstants";
import { ColorMixer } from "../utils/utils";

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

type WaveInputs = {
  ctx: any;
  Tmax: number;
  Vmax: number;
  Vp: number;
  phase: number;
  fo: number;
  N: number;
  width: number;
  height: number;
  color: string;
  thick: any;
};
type GraphInputs = {
  ctx: {
    beginPath: () => void;
    lineWidth: any;
    strokeStyle: any;
    moveTo: (arg0: any, arg1: number) => void;
    lineTo: (arg0: any, arg1: number) => void;
    stroke: () => void;
  };
  x0: any;
  y0: any;
  xscale: any;
  yscale: any;
  N: number;
  x: number[];
  y: number[];
  color: string;
  thick: any;
};

function CanvasWave({ color }: { color: string }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = ctx.canvas.width;
    let height = ctx.canvas.height;
    // ctx.fillStyle = "#000000";

    // ctx.fillRect(0, 0, width, height);

    drawWave({
      ctx,
      width: width,
      height: height,
      Tmax: 0.001,
      Vmax: 2,
      Vp: 1,
      phase: 0,
      fo: 1000,
      N: 10000,
      color: `rgba(${color})`,
      thick: 1,
    });
    drawWave({
      ctx,
      width: width,
      height: height,
      Tmax: 0.001,
      Vmax: 12,
      Vp: 1,
      phase: 0,
      fo: 1000,
      N: 1000,
      color: `rgba(${color})`,
      thick: 4,
    });
  }, [color]);
  return <SineCanvas ref={canvasRef}></SineCanvas>;
}

function drawWave({
  ctx,
  width,
  height,
  Tmax,
  Vmax,
  Vp,
  phase,
  fo,
  N,
  color,
  thick,
}: WaveInputs) {
  // define origin at plot center
  let x0 = 0.5 + 0.5 * width; // x0, y0 place plot origin in middle of canvas
  let y0 = 0.5 + 0.5 * height;

  var x = new Array(),
    y = new Array(); // x,y plotting variables
  var dt, tstart, tstop; // time variables

  // define plot paramaters
  tstart = -Tmax;
  tstop = Tmax;
  dt = (tstop - tstart) / (N - 1); // time increment over N points
  let xscale = width / (2 * Tmax); // x pix per s
  let yscale = height / (2 * Vmax); // y pix per V

  // create function
  for (let i = 0; i < N; i++) {
    x[i] = tstart + i * dt;
    y[i] = Vp * Math.sin(2 * 3.1415 * fo * x[i] + (phase * 3.1415) / 180);
  }

  GraphArray({
    ctx,
    x0,
    y0,
    xscale,
    yscale,
    N,
    x,
    y,
    color,
    thick,
  });
}
function GraphArray({
  ctx,
  x0,
  y0,
  xscale,
  yscale,
  N,
  x,
  y,
  color,
  thick,
}: GraphInputs) {
  ctx.beginPath();
  ctx.lineWidth = thick;
  ctx.strokeStyle = color;

  for (let i = 0; i < N; i++) {
    // translate actual x,y to plot xp,yp
    let xp = x0 + x[i] * xscale;
    let yp = y0 - y[i] * yscale;

    // draw ine to next point
    if (i == 0) ctx.moveTo(xp, yp);
    else ctx.lineTo(xp, yp);
  }

  ctx.stroke();
}
