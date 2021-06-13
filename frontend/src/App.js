import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";
import DictionaryPollenItem from "./components/DictionaryPollenItem";

export default function App() {

  return (
    <Router>
        <Switch>
            <Route path={"/item"} component={DictionaryPollenItem}>
                <DictionaryPollenItem/>
            </Route>
            <Route path={"/"}>
                <DictionaryOverviewPage/>
            </Route>
        </Switch>
    </Router>
  );
}
