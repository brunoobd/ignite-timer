import { Route, Routes } from "react-router";

import { DefaultLayout } from "@routes/layouts";
import { homePath, historyPath } from "@constants";
import { Home, History } from "@pages";

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path={homePath} element={<Home />} />
      <Route path={historyPath} element={<History />} />
    </Route>
  </Routes>
);
