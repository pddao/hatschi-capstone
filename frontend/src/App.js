import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";
import DictionaryPollenItem from "./components/DictionaryPollenItem";

export default function App() {

  return (
    <Router>
        <Switch>
            <Route path={"/"} exact component={HomePage}></Route>
            <Route exact path={"/dictionary"} component={DictionaryOverviewPage}></Route>
            <Route path={"/dictionary/item"} component={DictionaryPollenItem}></Route>
        </Switch>
    </Router>
  );
}
