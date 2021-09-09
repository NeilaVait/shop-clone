import css from './Header.module.css';
import { useState, useEffect } from 'react';
import useStrapi from '../../hooks/useStrapi';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Header({ page }) {
  // sekti ar dokumentas yra slenkamas zemyn
  const [navState, setNavState] = useState(false);
  const [menuItems] = useStrapi('/canvas-menus');
  const match = useRouteMatch();
  // useEffect(() => {
  //   console.log('match', match);
  // }, [match]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(e) {
    const dist = window.pageYOffset;
    // console.log('scroll ', dist);
    if (dist > 200) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }
  // if (isLoading) return <header>Loading ...</header>;
  return (
    <header
      className={`${css.header} ${
        navState || page === 'blog' ? css.active : ''
      } `}
    >
      <Link className={css.logo} to='/'>
        Canvas<strong>Store</strong>
      </Link>
      <nav className={css['main-nav']}>
        {menuItems.map((l) => (
          <Link key={l.link} to={l.link}>
            {l.title}
          </Link>
        ))}
      </nav>
      <nav className={css['side-nav']}>
        <Link to='/login'>SignUp/Login</Link>
        <a href='/'>Cart</a>
      </nav>
    </header>
  );
}
