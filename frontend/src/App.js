import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme/HatschiTheme';
import HomePage from './pages/HomePage';
import DictionaryOverviewPage from './pages/DictionaryOverviewPage';
import DictionaryDetailsPage from './pages/DictionaryDetailsPage';
import Layout from './style/Layout';
import UserPage from './pages/UserPage';
import PollenForecastPage from './pages/PollenForecastPage';
import LoginPage from './pages/LoginPage';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './routing/PrivateRoute';

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
              <DictionaryDetailsPage />
            </PrivateRoute>
            <PrivateRoute path={'/user'} exact>
              <UserPage />
            </PrivateRoute>
            <PrivateRoute path={'/forecast'} exact>
              <PollenForecastPage />
            </PrivateRoute>
          </Switch>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}
