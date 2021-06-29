import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DictionaryOverviewPage from './pages/DictionaryOverviewPage';
import DictionaryPollenItemDetails from './components/DictionaryPollenItemDetails';
import Layout from './style/Layout';
import UserPage from './pages/UserPage';
import PollenForecastPage from './pages/PollenForecastPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import axios from 'axios';

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
  const [token, setToken] = useState();
  const login = (credentials) => {
    axios
      .post('/auth/login', credentials)
      .then((response) => response.data)
      .then(setToken);
  };

  console.log(token);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path={'/'} exact>
              <LoginPage login={login} />
            </Route>
            <Route path={'/home'} exact>
              <HomePage />
            </Route>
            <Route path={'/dictionary'} exact>
              <DictionaryOverviewPage />
            </Route>
            <Route path={'/dictionary/:id/details'} exact>
              <DictionaryPollenItemDetails />
            </Route>
            <Route path={'/user'} exact>
              <UserPage />
            </Route>
            <Route path={'/pollencount'} exact>
              <PollenForecastPage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
