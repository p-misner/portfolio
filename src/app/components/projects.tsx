import { FullWidthWrapper, GridWrapper } from "../style/gridLayout";
import { MenuHeader, NameHeader } from "../style/headerStyle";

export default function Projects() {
  return (
    <FullWidthWrapper>
      <GridWrapper>
        <NameHeader>Priya Misner</NameHeader>
        <MenuHeader>
          <a href="#">work</a>
          <a href="#">fun</a>
          <a href="#">about</a>
        </MenuHeader>
      </GridWrapper>
    </FullWidthWrapper>
  );
}
