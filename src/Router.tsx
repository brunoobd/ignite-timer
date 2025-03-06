import { Route, Routes } from "react-router";
import { Home } from "@pages";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
