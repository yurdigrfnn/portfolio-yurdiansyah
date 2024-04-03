import { MainLayout } from "../components/Layout";
import { Home } from "../features/home";

export const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
];
