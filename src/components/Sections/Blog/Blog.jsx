import React from 'react';
import css from './Blog.module.css';
import BlogItem from './BlogItem';
import useStrapi from '../../../hooks/useStrapi';
import { useRouteMatch } from 'react-router';

// forwardingRef - naudojama kai reikia perduoti DOM nuoroda SUkurtam komponetui
const Blog = React.forwardRef((props, blogRef) => {
  // const match = useRouteMatch();
  // console.log('match', match);
  function makeCorrectUrl() {
    const howManyItems = props.qty ? `?_limit=${props.qty}` : '';
    if (props.kind === 'paid') return `/canvas-paid-blogs${howManyItems}`;
    return `/canvas-blogs${howManyItems}`;
  }
  const [blogs] = useStrapi(makeCorrectUrl());
  // const firstTwo = blogs.slice(0, 2);
  return (
    <section ref={blogRef} className={`container ${css.blog}`}>
      {props.kind === 'free' && <h1>Check out our blog</h1>}
      {props.kind === 'paid' && <h1>Check out our Member only articles</h1>}
      {blogs.map((b) => (
        <BlogItem key={b.id} blog={b} />
      ))}
    </section>
  );
});

export default Blog;
