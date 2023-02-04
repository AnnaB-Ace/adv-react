import { lazy, LazyExoticComponent } from "react";

const Lazy1 = lazy(
  () =>
    import(/*webpackChunkName:"LazyPage1"*/ "../../01-Lazyload/pages/LazyPage1")
);
const Lazy2 = lazy(
  () =>
    import(/*webpackChunkName:"LazyPage1"*/ "../../01-Lazyload/pages/LazyPage2")
);
const Lazy3 = lazy(
  () =>
    import(/*webpackChunkName:"LazyPage1"*/ "../../01-Lazyload/pages/LazyPage3")
);

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
];