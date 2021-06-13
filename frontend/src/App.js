import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DictionaryOverviewPage from "./pages/DictionaryOverviewPage";

export default function App() {

  return (
    <Router>
        <Switch>
            <Route path={"/"}>
                <DictionaryOverviewPage/>
            </Route>
        </Switch>
    </Router>
  );
}
