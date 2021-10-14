import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import FoodDetails from "./Pages/FoodDetails/FoodDetails";
import HeaderSection from "./Pages/Home/HeaderSection/HeaderSection";
import Home from './Pages/Home/Home';
import Footer from "./Pages/Shared/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Router>
        <HeaderSection></HeaderSection>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/food/:foodId">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="*">

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
