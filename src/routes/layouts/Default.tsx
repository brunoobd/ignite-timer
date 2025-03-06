import { Outlet } from "react-router";
import { Header } from "@components";

export const DefaultLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);
