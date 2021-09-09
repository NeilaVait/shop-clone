import '../style/App.css';
import 'font-awesome/css/font-awesome.css';
import Layout from './Layout/Layout';

import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <button onClick={btnHandler}>Get ref</button> */}
      <Switch>
        <Route path='/blog'>
          <BlogPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
