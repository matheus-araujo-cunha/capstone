import { Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import { Home } from "../pages/Home";
=======
>>>>>>> feat: remove Header component from route
import Login from "../pages/Login";
import { MyCars } from "../pages/MyCars";
import { Signup } from "../pages/Signup";
import { SearchCar } from "../pages/SearchCars";
export const Routes = () => {
  return (
    <Switch>
<<<<<<< HEAD
      <Route exact path="/" component={Home} />
=======
      <Route exact path="/" />
>>>>>>> feat: remove Header component from route
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/myCars" component={MyCars} />
      <Route path="/searchCars" component={SearchCar} />
    </Switch>
  );
};
