"use client";
import { useEffect, useRef, useState } from "react";
import { Hue, HueWrapper, SettingsButton } from "../style/controlsStyle";
import { ArrayRGBA, colorConverterService } from "../utils/utils";
import styled from "styled-components";
import { CoreColorInput } from "../style/styleConstants";

export function Settings({ color }: CoreColorInput) {
  return <SettingsButton color={color} />;
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
    console.log(isDown.current);
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
