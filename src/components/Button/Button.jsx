import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ buttonText, href, ...rest }) {
  if (href) {
    return (
      <a className={styles.button} href={href} {...rest}>
        {buttonText}
      </a>
    );
  }
  return (
    <NavLink to={href} className={styles.button}>
      {buttonText}
    </NavLink>
  );
}

export default Button;
