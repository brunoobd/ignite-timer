import { Outlet } from "react-router";
import { Header } from "@routes/layouts/Default/components/Header";
import { DefaultLayoutContainer } from "./style";

export const DefaultLayout = () => (
  <DefaultLayoutContainer>
    <Header />
    <Outlet />
  </DefaultLayoutContainer>
);
