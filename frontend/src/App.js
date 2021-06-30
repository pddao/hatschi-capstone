import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DictionaryOverviewPage from './pages/DictionaryOverviewPage';
import DictionaryPollenItemDetails from './components/DictionaryPollenItemDetails';
import Layout from './style/Layout';
import UserPage from './pages/UserPage';
import PollenForecastPage from './pages/PollenForecastPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import LoginPage from './pages/LoginPage';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './routing/PrivateRoute';

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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route path={'/'} exact>
              <LoginPage />
            </Route>
            <PrivateRoute path={'/home'} exact>
              <HomePage />
            </PrivateRoute>
            <PrivateRoute path={'/dictionary'} exact>
              <DictionaryOverviewPage />
            </PrivateRoute>
            <PrivateRoute path={'/dictionary/:id/details'} exact>
              <DictionaryPollenItemDetails />
            </PrivateRoute>
            <PrivateRoute path={'/user'} exact>
              <UserPage />
            </PrivateRoute>
            <PrivateRoute path={'/pollencount'} exact>
              <PollenForecastPage />
            </PrivateRoute>
          </Switch>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}
