import { Route, Routes } from "react-router";

import { DefaultLayout } from "@routes/layouts";
import { Home } from "@pages";

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);
