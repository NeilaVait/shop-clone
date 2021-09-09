import '../style/App.css';
import 'font-awesome/css/font-awesome.css';
import Layout from './Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';

function App() {
  return (
    <Layout>
      {/* <button onClick={btnHandler}>Get ref</button> */}
      <Switch>
        <Route path='/blog'>
          <BlogPage />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
