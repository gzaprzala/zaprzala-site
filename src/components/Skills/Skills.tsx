import style from './Skills.module.css';
import cpp from '@assets/img/cpp.svg';
import figma from '@assets/img/figma.svg';
import html from '@assets/img/html.svg';
import java from '@assets/img/java.svg';
import js from '@assets/img/js.svg';
import react from '@assets/img/react.svg';
import css from '@assets/img/css.svg';
import python from '@assets/img/python.svg';
import after from '@assets/img/after.svg';
import php from '@assets/img/php.svg';
import photoshop from '@assets/img/photoshop.svg';
import blender from '@assets/img/blender.svg';
import trello from '@assets/img/trello.svg';
import office from '@assets/img/office.svg';
import vsc from '@assets/img/vsc.svg';
import git from '@assets/img/git.svg';
import ts from '@assets/img/ts.svg';
import github from '@assets/img/github.svg';
import docker from '@assets/img/docker.svg';
import node from '@assets/img/node.svg';
import postgre from '@assets/img/postgre.svg';
import mysql from '@assets/img/mysql.svg';
import jetbrains from '@assets/img/jetbrains.svg';
import spring from '@assets/img/spring.svg';
import SkillIcon from '../SkillIcon/SkillIcon';

const Skills = () => {
  return (
    <div className={style['skills-container']}>
      <span className={style['skills-span']}>familiar/worked with</span>
      <div className={style['skills-icons']}>
        <SkillIcon image={js} />
        <SkillIcon image={react} />
        <SkillIcon image={css} />
        <SkillIcon image={java} />
        <SkillIcon image={ts} />
        <SkillIcon image={spring} />
        <SkillIcon image={html} />
        <SkillIcon image={cpp} />
        <SkillIcon image={python} />
        <SkillIcon image={after} />
        <SkillIcon image={php} />
        <SkillIcon image={photoshop} />
        <SkillIcon image={blender} />
        <SkillIcon image={trello} />
        <SkillIcon image={office} />
        <SkillIcon image={vsc} />
        <SkillIcon image={jetbrains} />
        <SkillIcon image={git} />
        <SkillIcon image={figma} />
        <SkillIcon image={github} />
        <SkillIcon image={docker} />
        <SkillIcon image={node} />
        <SkillIcon image={mysql} />
        <SkillIcon image={postgre} />
      </div>
    </div>
  );
};

export default Skills;
