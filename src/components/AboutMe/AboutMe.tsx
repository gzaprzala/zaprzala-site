import style from './AboutMe.module.css';
import photo from '@assets/img/profilepic.jpg';

const AboutMe = () => {
  return (
    <div className={style['aboutme-container']}>
      <div className={style['aboutme-content']}>
        <img src={photo} alt='photo' className={style['aboutme-photo']} />
        <div className={style['aboutme-span']}>
          <span className={style['aboutme-span-big']}>
            Hi, I'm Grzegorz Zaprzała
          </span>
          <span className={style['aboutme-span-small']}>
            3rd year Computer Science student at Cracow University of Technology
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
