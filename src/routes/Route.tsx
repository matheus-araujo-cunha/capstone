import { ComponentType } from "react";
import {
  Route as RouteComponent,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { useAuth } from "../providers/Auth";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const { accessToken } = useAuth();

  return (
    <RouteComponent
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/signin" : "/myCars"} />
        )
      }
    />
  );
};
