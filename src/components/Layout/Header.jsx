import css from './Header.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Header() {
  // sekti ar dokumentas yra slenkamas zemyn
  const [navState, setNavState] = useState(false);

  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // turim tureti state kad issaugoti meniu
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError('');
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_STRAPI_URL}/canvas-menus`
        );
        console.log(data);
        setMenuItems(data);
      } catch (error) {
        setError('Something went wrong');
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  // parsisiusti meniu

  // panaudoti meniu vietoj Links

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
