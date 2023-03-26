import Project from '@components/Project/Project';
import { Link } from 'react-router-dom';
import style from './Projects.module.css';
import js from '@assets/img/js-nn.svg';
import react from '@assets/img/react-nn.svg';
import java from '@assets/img/java-nn.svg';
import spring from '@assets/img/spring-nn.svg';
import mysql from '@assets/img/mysql-nn.svg';
import postgre from '@assets/img/postgre-nn.svg';
import ts from '@assets/img/ts-nn.svg';
import php from '@assets/img/php-nn.svg';
import node from '@assets/img/node-nn.svg';
import mongo from '@assets/img/mongo-nn.svg';

const Projects = () => {
  return (
    <div className={style['projects-container']}>
      <div className={style['projects-content']}>
        <span className={style['projects-span']}>solo/group projects</span>
        <div className={style['projects-list']}>
          <Link to='https://github.com/gzaprzala/student-benchmark'>
            <Project
              title='student-benchmark'
              status='finished'
              images={[react, spring, ts, js, mysql, java]}
            />
          </Link>
          <Link to='https://github.com/gzaprzala/petsh'>
            <Project
              title='petsh'
              status='finished'
              images={[js, php, postgre]}
            />
          </Link>
          <Link to='https://github.com/gzaprzala/library-management-system'>
            <Project
              title='library-management-system'
              status='finished'
              images={[ts]}
            />
          </Link>
          <Link to='https://github.com/gzaprzala/wiselify'>
            <Project
              title='wiselify'
              status='in progress'
              images={[ts, react, postgre, spring, java]}
            />
          </Link>
          <Link to='https://github.com/gzaprzala/quiztec'>
            <Project
              title='quiztec'
              status='in progress'
              images={[ts, mongo, react, node]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
