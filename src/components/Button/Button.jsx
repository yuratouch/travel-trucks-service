import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ buttonText, href, className = "", ...rest }) {
  const combinedClassName = `${styles.button} ${className}`.trim();

  if (href) {
    return (
      <a className={combinedClassName} href={href} {...rest}>
        {buttonText}
      </a>
    );
  }
  return (
    <NavLink to={href} className={combinedClassName}>
      {buttonText}
    </NavLink>
  );
}

export default Button;
