import css from './Hero.module.css';
import Button from '../UI/Button';
import Icon from '../UI/Icon';
import SocialLinks from '../UI/SocialLinks.style';

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
      <SocialLinks dash hero />
    </section>
  );
}
