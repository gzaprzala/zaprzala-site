import AboutMe from '@/components/AboutMe/AboutMe';
import NavBar from '@/components/NavBar/NavBar';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import style from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={style['homepage-container']}>
      <NavBar />
      <div className={style['homepage-content']}>
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
  );
};

export default HomePage;
