import css from './Hero.module.css';
import Button from '../UI/Button';
import Icon from '../UI/Icon';

const social = [
  {
    title: 'Facebook',
    icon: 'facebook',
    link: 'http://www.facebook.com',
  },
  {
    title: 'Instagram',
    icon: 'instagram',
    link: 'http://www.instagram.com',
  },
  { title: 'Youtube', icon: 'youtube-play', link: 'http://www.youtube.com' },
];
export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css['center-part']}>
        <h1>Get the new Mop Dog</h1>
        <p>You know you want it.</p>
        <div className={css.controll}>
          <Button>Shop men</Button>
          <Button>Shop Woman</Button>
        </div>
      </div>
      {/* socialLinks komponentas, pernaudojam Shippinge  */}
      <div className={css.social}>
        <div className={css.dash}></div>
        {social.map((s) => (
          <a key={s.link} target='_blank' rel='noreferrer' href={s.link}>
            <Icon icon={s.icon} />
          </a>
        ))}
      </div>
    </section>
  );
}
