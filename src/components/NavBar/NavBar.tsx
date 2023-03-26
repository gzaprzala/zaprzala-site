import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import gh from '@assets/img/gh.svg';
import li from '@assets/img/li.svg';

const NavBar = () => {
  return (
    <div className={style['navbar']}>
      <div className={style['navbar-links']}>
        <ul>
          <li>
            <Link to='https://github.com/gzaprzala' target='_blank'>
              <span className={style['navbar-link']}>github</span>
              <img src={gh} alt='github' />
            </Link>
          </li>
          <li>
            <Link
              to='https://www.linkedin.com/in/grzegorz-zaprza%C5%82a-82866126b/'
              target='_blank'>
              <span className={style['navbar-link']}>linkedin</span>
              <img src={li} alt='linkedin' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
