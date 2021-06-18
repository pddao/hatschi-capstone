import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";
import DictionaryPollenItemDetails from "./components/DictionaryPollenItemDetails";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={HomePage}></Route>
        <Route
          path={"/dictionary"}
          exact
          component={DictionaryOverviewPage}
        ></Route>
        <Route
          path={"/dictionary/:pollenItem.id/details"}
          component={DictionaryPollenItemDetails}
        ></Route>
      </Switch>
    </Router>
  );
}
