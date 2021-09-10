import '../style/App.css';
import 'font-awesome/css/font-awesome.css';
import Layout from './Layout/Layout';

import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AuthProvider from '../store/AuthProvider';
import MembersOnlyPage from '../pages/MembersOnlyPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <button onClick={btnHandler}>Get ref</button> */}
        <Switch>
          <Route path='/membersonlypage'>
            <MembersOnlyPage />
          </Route>
          <Route path='/blog'>
            <BlogPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
