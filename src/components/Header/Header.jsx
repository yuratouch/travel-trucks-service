import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Container from "../Container/Container";

function Header() {
  const addActive = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`.trim();

  return (
    <header className={styles.header}>
      <Container>
        <NavLink to="/" className={styles.navLogo}>
          <svg width="132" height="16">
            <use href="/src/assets/icons/sprite.svg#logo"></use>
          </svg>
        </NavLink>
        <ul className={styles.navigation}>
          <li>
            <NavLink to="/" className={addActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={addActive}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Header;
