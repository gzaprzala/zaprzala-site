import style from './Project.module.css';

const Project = (props: {
  title: string;
  status: string;
  images: string[];
}) => {
  return (
    <div className={style['project']}>
      <span>{props.title}</span>
      <span
        className={
          props.status === 'finished'
            ? style['project-finished']
            : style['project-inprogress']
        }>
        {props.status}
      </span>
      <div className={style['project-images-container']}>
        {props.images.map((image) => (
          <img src={image} className={style['project-images']} />
        ))}
      </div>
    </div>
  );
};

export default Project;
