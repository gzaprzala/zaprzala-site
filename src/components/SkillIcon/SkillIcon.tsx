import style from './SkillIcon.module.css';

const SkillIcon = (props: { image: string }) => {
  return (
    <div className={style['skillicon']}>
      <img src={props.image} alt='html' />
    </div>
  );
};

export default SkillIcon;
