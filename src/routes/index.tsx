import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import { MyCars } from "../pages/MyCars";
import { Signup } from "../pages/Signup";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/myCars" component={MyCars} />
      <Route path="searchCars" />
    </Switch>
  );
};
