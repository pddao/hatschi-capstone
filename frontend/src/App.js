import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";
import DictionaryPollenItemDetails from "./components/DictionaryPollenItemDetails";
import Layout from "./components/Layout";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Router>
      <Layout>
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
          <Route component={UserPage} path={"/user"} exact></Route>
        </Switch>
      </Layout>
    </Router>
  );
}
