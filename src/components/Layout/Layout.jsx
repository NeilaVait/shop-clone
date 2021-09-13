import Header from './Header';
import css from './Layout.module.css';
import FooterTop from './Footer/FooterTop';
import FooterBottom from './Footer/FooterBottom';

export default function Layout({ children, page }) {
  return (
    <>
      <Header page={page} />
      {/* {page === 'blog' && <aside>Info about blogs</aside>} */}
      {children}
      <FooterTop />
      <FooterBottom />
    </>
  );
}
