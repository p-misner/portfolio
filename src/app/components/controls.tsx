"use client";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SettingIcon from "../../../public/settingicon.svg";

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
import { ThemeContext } from "./providers";

export function Settings() {
  const [modalOpen, setModeOpen] = useState(false);
  const theme = useContext(ThemeContext);

  return (
    <SettingWrapper>
      <SettingsButton
        onClick={() => setModeOpen(!modalOpen)}
        color={theme.colorPicked}
      >
        {modalOpen ? (
          <p>X</p>
        ) : (
          <Image src={SettingIcon} alt="settings icon" width="20" height="20" />
        )}
      </SettingsButton>
      {modalOpen && (
        <SettingModal color={theme.colorPicked}>
          <label htmlFor="nw1">numWaves1: {theme.waveOptions.nw1}</label>
          <ColoredInput
            color={theme.colorPicked}
            name="nw1"
            type="range"
            step="0.1"
            min="0.2"
            max="20"
            defaultValue={theme.waveOptions.nw1}
            onChange={(e) => {
              theme.setWaveOptions({
                ...theme.waveOptions,
                nw1: e.target.value,
              });
            }}
          />
          <label htmlFor="nw2">numWaves2: {theme.waveOptions.nw2}</label>
          <ColoredInput
            color={theme.colorPicked}
            name="nw2"
            type="range"
            step=".2"
            min="0.2"
            max="20"
            defaultValue={theme.waveOptions.nw2}
            onChange={(e) => {
              theme.setWaveOptions({
                ...theme.waveOptions,
                nw2: e.target.value,
              });
            }}
          />

          <label htmlFor="a1">amp1: {theme.waveOptions.a1}</label>
          <ColoredInput
            color={theme.colorPicked}
            name="a1"
            type="range"
            step=".05"
            min="0.05"
            max="1"
            defaultValue={theme.waveOptions.a1}
            onChange={(e) => {
              theme.setWaveOptions({
                ...theme.waveOptions,
                a1: e.target.value,
              });
            }}
          />

          <label htmlFor="a2">amp2: {theme.waveOptions.a2}</label>
          <ColoredInput
            color={theme.colorPicked}
            name="a2"
            type="range"
            step=".05"
            min="0.05"
            max="1"
            defaultValue={theme.waveOptions.a2}
            onChange={(e) => {
              theme.setWaveOptions({
                ...theme.waveOptions,
                a2: e.target.value,
              });
            }}
          />
        </SettingModal>
      )}
    </SettingWrapper>
  );
}

interface ColorPickerComponentProps {
  style?: React.CSSProperties;
  setColorPicked(color: ArrayRGBA): void;
  colorPicked: ArrayRGBA;
  //   handleColorSelected(color: string): void;
}

export default function ColorPickerComponent() {
  const hueRef = useRef<any>();
  const hueSelectorRef = useRef<any>();
  const isDown = useRef<boolean>(false);
  const mousePosition = useRef<any>();
  const setSaturation = 80;
  const setLightness = 50;
  const MAX_HUE = 240; // hue range
  const MIN_HUE = 60;
  const theme = useContext(ThemeContext);

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
    theme?.setColorPicked([hex.r, hex.g, hex.b, 1]);
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
        color={theme?.colorPicked}
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
