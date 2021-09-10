import css from './Hero.module.css';
import Button from '../UI/Button';
import SocialLinks from '../UI/SocialLinks.style';
import useStrapi from '../../hooks/useStrapi';

export default function Hero() {
  // panautoti useStrapi
  const [heroData, isLoading] = useStrapi('/canvas-hero');
  // console.log(heroData);
  // supildyti reiksmes
  return (
    <section className={css.hero}>
      <div className={css['center-part']}>
        <h1>{isLoading ? '...' : heroData.title}</h1>
        <p>{heroData.subtitle}</p>
        <div className={css.controll}>
          <Button>{heroData.button1}</Button>
          <Button>{heroData.button2}</Button>
        </div>
      </div>
      <SocialLinks dash hero />
    </section>
  );
}
