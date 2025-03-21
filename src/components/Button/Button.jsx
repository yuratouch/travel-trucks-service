import { NavLink } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ buttonText, href, className = "", ...rest }) {
  const combinedClassName = `${styles.button} ${className}`.trim();

  if (href) {
    return (
      <NavLink
        to={href}
        className={combinedClassName}
        target={rest.target || "_self"}
      >
        {buttonText}
      </NavLink>
    );
  }

  return (
    <button className={combinedClassName} {...rest}>
      {buttonText}
    </button>
  );
}

export default Button;
