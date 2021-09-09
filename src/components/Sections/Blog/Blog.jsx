import React from 'react';
import css from './Blog.module.css';
import BlogItem from './BlogItem';
import useStrapi from '../../../hooks/useStrapi';
import { useRouteMatch } from 'react-router';

// forwardingRef - naudojama kai reikia perduoti DOM nuoroda SUkurtam komponetui
const Blog = React.forwardRef((props, blogRef) => {
  // const match = useRouteMatch();
  // console.log('match', match);
  const howManyItems = props.qty ? `?_limit=${props.qty}` : '';
  const [blogs] = useStrapi(`/canvas-blogs${howManyItems}`);
  // const firstTwo = blogs.slice(0, 2);
  return (
    <section ref={blogRef} className={`container ${css.blog}`}>
      {blogs.map((b) => (
        <BlogItem key={b.id} blog={b} />
      ))}
    </section>
  );
});

export default Blog;
