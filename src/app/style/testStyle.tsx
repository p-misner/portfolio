"use client";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

type BackgroundType = {
  color?: string;
};
export const RedBackground = styled.div<BackgroundType>`
  background-color: ${(props) => (props.color ? props.color : "red")};
`;
