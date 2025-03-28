import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Container from "@/components/Container/Container";

function Header() {
  const addActive = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`.trim();

  return (
    <header className={styles.header}>
      <Container>
        <NavLink to="/" className={styles.navLogo}>
          <svg width="132" height="16">
            <use href="/icons/sprite.svg#logo"></use>
          </svg>
        </NavLink>
        <ul className={styles.navigation}>
          <li>
            <NavLink to="/" className={addActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" end className={addActive}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Header;
