"use client";
import { useContext } from "react";
import {
  Header,
  HeaderWrapper,
  MenuHeader,
  NameHeader,
} from "../style/headerStyle";
import { CoreColorInput } from "../style/styleConstants";
import { ThemeContext } from "./providers";

export default function PageHeader() {
  const theme = useContext(ThemeContext);
  return (
    <HeaderWrapper color={theme?.colorPicked}>
      <Header>
        <NameHeader color={theme?.colorPicked}>
          {" "}
          <a href="/">Priya Misner</a>
        </NameHeader>
        <MenuHeader color={theme?.colorPicked}>
          <a href="/#work">work</a>
          <a href="/#play">play</a>
          {/* <a href="#">about</a> */}
        </MenuHeader>
      </Header>
    </HeaderWrapper>
  );
}
