import css from './BlogItem.module.css';
import Icon from '../../UI/Icon';

export default function BlogItem({ blog: b }) {
  return (
    <article className={css['blog-item']}>
      <img src={process.env.REACT_APP_STRAPI_URL + b.image.url} alt={b.title} />
      <h3 className='title'>{b.title}</h3>
      {/* TODO: panaudoti summary, jei nera tada nukirpri pagr text */}
      <p>{b.summary}</p>
      {b.address && (
        <address>
          <strong>
            <Icon icon='map-marker' />
            Headquaters:
          </strong>{' '}
          <a href='http://google.com' target='_blank' rel='noreferrer'>
            {b.address}
          </a>
        </address>
      )}
      <a href={b.link}>
        View details <Icon icon='long-arrow-right' />
      </a>
    </article>
  );
}
