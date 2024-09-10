import { useEffect, useRef, useState } from "react";

import {
  ColoredInput,
  Hue,
  HueWrapper,
  SettingModal,
  SettingsButton,
  SettingWrapper,
} from "../style/controlsStyle";
import { ArrayRGBA, colorConverterService } from "../utils/utils";
import { CoreColorInput } from "../style/styleConstants";

export function Settings({
  color,
  waveOptions,
  setWaveOptions,
}: {
  color: ArrayRGBA;
  waveOptions: { a1: number; a2: number; nw1: number; nw2: number };
  setWaveOptions: any;
}) {
  const [modalOpen, setModeOpen] = useState(false);

  return (
    <SettingWrapper>
      <SettingsButton onClick={() => setModeOpen(!modalOpen)} color={color} />
      {modalOpen && (
        <SettingModal color={color}>
          <label htmlFor="nw1">numWaves1: {waveOptions.nw1}</label>
          <ColoredInput
            color={color}
            name="nw1"
            type="range"
            step="0.1"
            min="0.2"
            max="20"
            defaultValue={waveOptions.nw1}
            onChange={(e) => {
              setWaveOptions({ ...waveOptions, nw1: e.target.value });
            }}
          />
          <label htmlFor="nw2">numWaves2: {waveOptions.nw2}</label>
          <ColoredInput
            color={color}
            name="nw2"
            type="range"
            step=".2"
            min="0.2"
            max="20"
            defaultValue={waveOptions.nw2}
            onChange={(e) => {
              setWaveOptions({ ...waveOptions, nw2: e.target.value });
            }}
          />

          <label htmlFor="a1">amp1: {waveOptions.a1}</label>
          <ColoredInput
            color={color}
            name="a1"
            type="range"
            step=".05"
            min="0.05"
            max="1"
            defaultValue={waveOptions.a1}
            onChange={(e) => {
              setWaveOptions({ ...waveOptions, a1: e.target.value });
            }}
          />

          <label htmlFor="a2">amp1: {waveOptions.a2}</label>
          <ColoredInput
            color={color}
            name="a2"
            type="range"
            step=".05"
            min="0.05"
            max="1"
            defaultValue={waveOptions.a2}
            onChange={(e) => {
              setWaveOptions({ ...waveOptions, a2: e.target.value });
            }}
          />
        </SettingModal>
      )}
    </SettingWrapper>
  );
}
export function DayNight() {
  return <div> daynight</div>;
}

interface ColorPickerComponentProps {
  style?: React.CSSProperties;
  setColorPicked(color: ArrayRGBA): void;
  colorPicked: ArrayRGBA;
  //   handleColorSelected(color: string): void;
}

export default function ColorPickerComponent({
  setColorPicked,
  colorPicked,
}: ColorPickerComponentProps) {
  const hueRef = useRef<any>();
  const hueSelectorRef = useRef<any>();
  const isDown = useRef<boolean>(false);
  const mousePosition = useRef<any>();
  const setSaturation = 80;
  const setLightness = 50;
  const MAX_HUE = 240; // hue range
  const MIN_HUE = 60;

  const handleHueCursorPosition = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent
  ): void => {
    const hueRect = hueRef.current.getBoundingClientRect();
    const hueHeight =
      hueRef.current.offsetHeight - hueSelectorRef.current.offsetHeight;

    const mousePositionY = e.clientY - hueRect.top - 8;

    mousePosition.current = {
      y:
        mousePositionY >= 0 && mousePositionY <= hueHeight
          ? mousePositionY
          : mousePositionY > hueHeight
          ? hueHeight
          : 0,
    };

    hueSelectorRef.current.style.top = mousePosition.current.y + "px";
    const hue = (mousePosition.current.y / hueHeight) * MAX_HUE + MIN_HUE;
    hueSelectorRef.current.style.backgroundColor = `hsl(${hue},${setSaturation}%,${setLightness}%)`;

    const hex = colorConverterService.hexToRGB(
      colorConverterService.hslToHex(hue, setSaturation, setLightness)
    );
    // setColorPicked(hex);
    setColorPicked([hex.r, hex.g, hex.b, 1]);
    // inputRef.current.value = hex;
  };

  const handleMouseMove = (e: MouseEvent): void => {
    e.preventDefault();
    if (isDown.current) {
      handleHueCursorPosition(e);
    }
  };
  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement> | MouseEvent
  ): void => {
    isDown.current = true;

    handleHueCursorPosition(e);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = (): void => {
    isDown.current = false;

    window.removeEventListener("mouseup", handleMouseUp);
    window.removeEventListener("mousemove", handleMouseMove);
  };

  return (
    <HueWrapper>
      <Hue
        color={colorPicked}
        ref={hueRef}
        onMouseDown={(e) => handleMouseDown(e)}
        // onClick={(e) => handleHueCursorPosition(e)}
        // onClick={(e) => console.log(e)}
      >
        <span ref={hueSelectorRef} />
      </Hue>
    </HueWrapper>
  );
}
