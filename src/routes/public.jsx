import { MainLayout } from "../components/Layout";

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <>p</> },
      { path: "/about", element: <>h</> },
    ],
  },
];
