import css from './Header.module.css';
import { useState, useEffect } from 'react';
import useStrapi from '../../hooks/useStrapi';

export default function Header() {
  // sekti ar dokumentas yra slenkamas zemyn
  const [navState, setNavState] = useState(false);
  const [menuItems] = useStrapi('/canvas-menus');

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
    <header className={`${css.header} ${navState ? css.active : ''}`}>
      <a className={css.logo} href='/'>
        Canvas<strong>Store</strong>
      </a>
      <nav className={css['main-nav']}>
        {menuItems.map((l) => (
          <a key={l.link} href={l.link}>
            {l.title}
          </a>
        ))}
      </nav>
      <nav className={css['side-nav']}>
        <a href='/'>SignUp/Login</a>
        <a href='/'>Cart</a>
      </nav>
    </header>
  );
}
