import { Route } from 'react-router-dom';
import useAuthCtx from './../hooks/useAuthCtx';
import LoginForm from './Login/LoginForm';
import LoginPage from './../pages/LoginPage';

function ProtectedRoute({ path, children }) {
  const { isLoggedIn } = useAuthCtx();
  return (
    <Route path={path}>
      {isLoggedIn && children}
      {!isLoggedIn && <LoginPage />}
    </Route>
  );
}

export default ProtectedRoute;
