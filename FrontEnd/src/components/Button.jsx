import styles from '../styles/Button.module.css';
function Button(opt) {
  return (
       <span className={styles.mainChild} {...opt}>
        {/* <p align="center"> */}
          {opt.text}
        {/* </p> */}
       </span>
  );
}
export default Button;
