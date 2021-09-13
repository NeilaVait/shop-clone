import css from './InstaFeed.module.css';

function InstaFeed(props) {
  console.log('props.insta.url', props.insta);
  return (
    <div className={css.insta}>
      {props.insta.map((i) => (
        <img src={`${process.env.REACT_APP_STRAPI_URL}${i.formats.thumbnail.url}`} alt="" />
      ))}
    </div>
  );
}

export default InstaFeed;
