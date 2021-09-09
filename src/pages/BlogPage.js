import Blog from '../components/Sections/Blog/Blog';
import Layout from '../components/Layout/Layout';
import { Switch, Route } from 'react-router-dom';

export default function BlogPage() {
  return (
    <Layout page='blog'>
      <Switch>
        <Route path='/blog/:blogId'>
          <h2>Single blog page</h2>
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
      </Switch>
    </Layout>
  );
}
