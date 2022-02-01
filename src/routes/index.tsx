import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import { MyCars } from "../pages/MyCars";
import { SearchCar } from "../pages/SearchCars";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route path="/signin" component={Login} />
      <Route path="/signup" />
      <Route path="/myCars" component={MyCars} />
      <Route path="/searchCars" component={SearchCar} />
    </Switch>
  );
};
