import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import FoodDetails from "./Pages/FoodDetails/FoodDetails";
import HeaderSection from "./Pages/Home/HeaderSection/HeaderSection";
import Home from './Pages/Home/Home';

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
          <Route path="*">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
