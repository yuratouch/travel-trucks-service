// import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";
import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";

function Hero() {
  return (
    <div className={styles.hero}>
      <picture>
        <source srcSet="/images/hero/hero.jpg 1x, /images/hero/hero@2x.jpg 2x" />
        <img
          src="/images/hero/hero.jpg"
          alt="Beautiful sunset with TravelTrucks"
        />
      </picture>
      <Container className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Campers of your dreams</h1>
        <p className={styles.heroSubtitle}>
          You can find everything you want in our catalog
        </p>
        <Button buttonText="View Now" href="/catalog" />
      </Container>
    </div>
  );
}

export default Hero;
