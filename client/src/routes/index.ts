import HomePage from "../pages/HomePage";
import IRoute from "./routerInterface";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: HomePage,
    exact: true,
  },
];

export default routes;
