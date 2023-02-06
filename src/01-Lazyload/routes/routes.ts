import { lazy, LazyExoticComponent } from "react";

interface Route {
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  name: string;
  children?: Route[];
}
const LazyPage1 = lazy(
  () => import(/* webpackChunkName: "LazyPage1" */ "../pages/LazyPage1")
);
const LazyPage2 = lazy(
  () => import(/* webpackChunkName: "LazyPage2" */ "../pages/LazyPage2")
);
const LazyPage3 = lazy(
  () => import(/* webpackChunkName: "LazyPage3" */ "../pages/LazyPage3")
);
export const routes: Route[] = [
  {
    path: "lazy1",
    Component: LazyPage1,
    name: "LazyPage-1",
  },
  {
    path: "lazy2",
    Component: LazyPage2,
    name: "LazyPage-2",
  },
  {
    path: "lazy3",
    Component: LazyPage3,
    name: "LazyPage-3",
  },
];
