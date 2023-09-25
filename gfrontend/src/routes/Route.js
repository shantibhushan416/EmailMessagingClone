import { lazy } from "react";

const Emails = lazy(() => import("../components/Email"));
const Main = lazy(() => import("../pages/Main"));
const ViewEmails = lazy(() => import("../components/ViewEmails"));

export const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Emails,
  },
  invalid: {
    path: "/*",
    element: Emails,
  },
  view: {
    path: "/view",
    element: ViewEmails,
  },
};
