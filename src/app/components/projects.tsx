import Image from "next/image";
import GroImage from "../../../public/GroDashboards.png";
import ApolloImg from "../../../public/ApolloSplash.png";
import UrbanismXImg from "../../../public/UrbanismXSplash.png";
import {
  CRImageWrapper,
  ImageWrapper,
  ProjectInfo,
  ProjectSubtitle,
  ProjectLink,
  ProjectWrapper,
  ProjectTitle,
} from "../style/projectsStyle";
import { CoreColorInput } from "../style/styleConstants";
import { useContext } from "react";
import { ThemeContext } from "./providers";

export function GroIntelligenceProject() {
  const theme = useContext(ThemeContext);

  return (
    <ProjectWrapper color={theme?.colorPicked}>
      <ProjectLink color={theme?.colorPicked} href="/projects/grointelligence">
        <ProjectInfo color={theme?.colorPicked}>
          <ProjectTitle color={theme?.colorPicked}>
            {" "}
            Gro Intelligence <span>→</span>
          </ProjectTitle>
          <ProjectSubtitle color={theme?.colorPicked}>
            Working across agriculture, climate and economic data, I designed
            experiences from the tiniest of micro-visualizations to overhauling
            the way we communicate the climate's impact on crop health.
          </ProjectSubtitle>
        </ProjectInfo>
        <ImageWrapper>
          <Image src={GroImage} alt="image of map" />
        </ImageWrapper>
      </ProjectLink>
    </ProjectWrapper>
  );
}
export function CharlesRiver() {
  const theme = useContext(ThemeContext);

  return (
    <ProjectWrapper color={theme?.colorPicked}>
      <ProjectLink color={theme?.colorPicked} href="/projects/charlesriver">
        <ProjectInfo color={theme?.colorPicked}>
          <ProjectTitle color={theme?.colorPicked}>
            {" "}
            Charles River Labs <span>→</span>
          </ProjectTitle>
          <ProjectSubtitle color={theme?.colorPicked}>
            {" "}
            Data visualization design for Apollo, a real-time toxicology study
            data portal
          </ProjectSubtitle>
        </ProjectInfo>
        <CRImageWrapper>
          <Image src={ApolloImg} alt="image of map" />
        </CRImageWrapper>
      </ProjectLink>
    </ProjectWrapper>
  );
}

export function UrbanismX() {
  const theme = useContext(ThemeContext);

  return (
    <ProjectWrapper color={theme?.colorPicked}>
      <ProjectLink color={theme?.colorPicked} href="/projects/urbanismx">
        <ProjectInfo color={theme?.colorPicked}>
          <ProjectTitle color={theme?.colorPicked}>
            {" "}
            UrbanismX at Tufts <span>→</span>
          </ProjectTitle>
          <ProjectSubtitle color={theme?.colorPicked}>
            Built a map-based dashboard exploring how Covid-19 impacted
            accessibility to food, grocery and health services in the United
            States's top twenty-five metropolitan areas.
          </ProjectSubtitle>
        </ProjectInfo>
        <CRImageWrapper>
          <Image src={UrbanismXImg} alt="image of map" />
        </CRImageWrapper>
      </ProjectLink>
    </ProjectWrapper>
  );
}
