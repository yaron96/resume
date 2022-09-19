import { useRoutes } from "react-router";
import { paths } from "shared/lib/paths";
import { HomePage } from "./home";

export const Routes = () => {
  const element = useRoutes([
    {
      path: paths.home(),
      element: <HomePage />,
    },
  ]);

  return element;
};
