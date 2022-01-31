import { ComponentType } from "react";
import {
  Route as RouteComponent,
  Redirect,
  RouteProps,
} from "react-router-dom";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  return (
    <RouteComponent
      {...rest}
      render={() =>
        isPrivate === false ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/signin" : "/myCars"} />
        )
      }
    />
  );
};
