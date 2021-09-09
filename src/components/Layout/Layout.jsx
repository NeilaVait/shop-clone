import Header from './Header';
import css from './Layout.module.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <Router>
      <Header />
      {children}
    </Router>
  );
}
