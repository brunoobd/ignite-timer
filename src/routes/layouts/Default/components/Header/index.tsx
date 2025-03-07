import {
  HeaderContainer,
  Logo,
  Navigation,
  NavigationItem,
  TimerIcon,
  ScrollIcon,
} from "./styles";

import { homePath, historyPath } from "@constants";

export const Header = () => (
  <HeaderContainer>
    <Logo />

    <Navigation>
      <NavigationItem to={homePath}>
        <TimerIcon />
      </NavigationItem>

      <NavigationItem to={historyPath}>
        <ScrollIcon />
      </NavigationItem>
    </Navigation>
  </HeaderContainer>
);
