import css from './FooterTop.module.css';
import useStrapi from './../../../hooks/useStrapi';
import { useState, useEffect } from 'react';
import LinkColumn from './LinkColumn';
import InstaFeed from './InstaFeed';

function FooterTop() {
  const [data, setData] = useState([]);

  const [{ column }] = useStrapi(`/canvas-footer`);

  useEffect(() => {
    setData(column);
  }, [column]);

  console.log('data', data);

  return (
    <div className={css['footer-top']}>
      {data?.map((d) => (
        <div key={d.id} className={css['footer-card']}>
          <h3>{d.title}</h3>
          <LinkColumn links={d.canvas_footer_link_text} />
          <InstaFeed insta={d.InstaFeed} />
        </div>
      ))}
    </div>
  );
}

export default FooterTop;
