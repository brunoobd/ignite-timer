import styled from "styled-components";

import { NavLink } from "react-router";

import { Timer, Scroll } from "@phosphor-icons/react";

import { logo } from "@assets";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
}))``;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavigationItem = styled(NavLink)`
  padding: 0.1875rem 0.3125rem;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-bottom: 0.1875rem solid transparent;

  transition-duration: 0.1s;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.COLORS.GREEN_500};
  }

  &.active {
    color: ${({ theme }) => theme.COLORS.GREEN_500};
  }
`;

export const TimerIcon = styled(Timer).attrs(() => ({
  size: 30,
}))``;

export const ScrollIcon = styled(Scroll).attrs(() => ({
  size: 30,
}))``;
