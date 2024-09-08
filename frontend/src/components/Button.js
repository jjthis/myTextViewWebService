import styles from '../styles/Button.module.css';
function Button({onClick:func,style:st,text}) {
  return (
       <div className={styles.mainChild} onClick={func} style={st}>
        <p align="center">
          {text}
        </p>
       </div>
  );
}
export default Button;
