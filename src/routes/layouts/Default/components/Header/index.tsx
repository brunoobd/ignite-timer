import {
  HeaderContainer,
  Logo,
  Navigation,
  NavigationItem,
  TimerIcon,
  ScrollIcon,
} from "./styles";

export const Header = () => (
  <HeaderContainer>
    <Logo />

    <Navigation>
      <NavigationItem to="/">
        <TimerIcon />
      </NavigationItem>

      <NavigationItem to="/history">
        <ScrollIcon />
      </NavigationItem>
    </Navigation>
  </HeaderContainer>
);
