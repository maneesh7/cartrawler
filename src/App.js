import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/header/NavBar";
import CarList from "./pages/CarList";
import FilterBar from "./components/filterBar/FilterBar";
import FilterDropdown from "./components/filterBar/FilterDropdown";
import Pickup from "./components/pickup/Pickup";
import CarDetails from "./pages/CarDetails";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/carList">
            <div className="main">
              <FilterBar />
              <div className="resultBox">
                <Pickup />
                <FilterDropdown />
                <CarList></CarList>
              </div>
            </div>
          </Route>

          <Route path="/car/:id">
            <div className="detailPage">
              <CarDetails />
            </div>
          </Route>
          <Route path="*">
            <h2>oops!! page not found...</h2>
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
