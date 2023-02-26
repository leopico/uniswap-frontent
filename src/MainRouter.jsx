import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./pages/layout/Root";
import Pool from "./pages/Pool";
import Error from "./components/errorpage/Error";
import Tokens from "./pages/Tokens";
import Swap from "./pages/Swap";

const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Swap />} />
      <Route path="/tokens" element={<Tokens />} />
      <Route path="/pool" element={<Pool />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export default MainRouter;
