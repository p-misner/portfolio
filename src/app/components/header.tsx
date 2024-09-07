import { FullWidthWrapper, GridWrapper } from "../style/gridLayout";
import { Header, MenuHeader, NameHeader } from "../style/headerStyle";
import { CoreColorInput } from "../style/styleConstants";

export default function PageHeader({ color }: CoreColorInput) {
  return (
    <FullWidthWrapper>
      <Header>
        <NameHeader color={color}>Priya Misner</NameHeader>
        <MenuHeader color={color}>
          <a href="#">work</a>
          <a href="#">fun</a>
          <a href="#">about</a>
        </MenuHeader>
      </Header>
    </FullWidthWrapper>
  );
}
