import {
  Header,
  HeaderWrapper,
  MenuHeader,
  NameHeader,
} from "../style/headerStyle";
import { CoreColorInput } from "../style/styleConstants";

export default function PageHeader({ color }: CoreColorInput) {
  return (
    <HeaderWrapper color={color}>
      <Header>
        <NameHeader color={color}>
          {" "}
          <a href="/">Priya Misner</a>
        </NameHeader>
        <MenuHeader color={color}>
          <a href="/#work">work</a>
          <a href="/#play">play</a>
          {/* <a href="#">about</a> */}
        </MenuHeader>
      </Header>
    </HeaderWrapper>
  );
}
