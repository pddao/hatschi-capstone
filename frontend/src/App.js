import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";
import DictionaryPollenItemDetails from "./components/DictionaryPollenItemDetails";
import Layout from "./navigation/Layout";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={HomePage} path={"/"} exact />
          <Route
            component={DictionaryOverviewPage}
            path={"/dictionary"}
            exact
          />
          <Route
            component={DictionaryPollenItemDetails}
            path={"/dictionary/:id/details"}
            exact
          />
          <Route component={UserPage} path={"/user"} exact />
        </Switch>
      </Layout>
    </Router>
  );
}
