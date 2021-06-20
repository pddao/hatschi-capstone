import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";
import DictionaryPollenItemDetails from "./components/DictionaryPollenItemDetails";
import Page from "./components/Page";

export default function App() {
  return (
    <Router>
      <Page>
        <Switch>
          <Route component={HomePage} path={"/"} exact></Route>
          <Route
            component={DictionaryOverviewPage}
            path={"/dictionary"}
            exact
          ></Route>
          <Route
            component={DictionaryPollenItemDetails}
            path={"/dictionary/:id/details"}
            exact
          ></Route>
        </Switch>
      </Page>
    </Router>
  );
}
