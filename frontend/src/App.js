import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DictionaryOverviewPage from './pages/DictionaryOverviewPage';
import DictionaryPollenItemDetails from './components/DictionaryPollenItemDetails';
import Layout from './style/Layout';
import UserPage from './pages/UserPage';
import PollenForecastPage from './pages/PollenForecastPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8db596',
    },
    secondary: {
      main: '#F5C0C0',
    },
  },
  typography: {
    fontFamily: 'Assistant',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route component={HomePage} path={'/'} exact />
            <Route
              component={DictionaryOverviewPage}
              path={'/dictionary'}
              exact
            />
            <Route
              component={DictionaryPollenItemDetails}
              path={'/dictionary/:id/details'}
              exact
            />
            <Route component={UserPage} path={'/user'} exact />
            <Route component={PollenForecastPage} path={'/pollencount'} exact />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
