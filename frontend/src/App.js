import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";
import DictionaryPollenItem from "./components/DictionaryPollenItem";

export default function App() {

  return (
    <Router>
        <Switch>
            <Route path={"/"} exact>
                <HomePage/>
            </Route>
            <Route path={"/dictionary"} exact>
                <DictionaryOverviewPage/>
            </Route>
            <Route path={"/dictionary/item"}>
                <DictionaryPollenItem/>
            </Route>
        </Switch>
    </Router>
  );
}
