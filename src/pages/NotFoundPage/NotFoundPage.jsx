import styles from "./NotFoundPage.module.css";
import Button from "@/components/Button/Button";

function NotFoundPage() {
  return (
    <>
      <h1 className={styles.notFoundHeading}>
        Oopsie! Seems like your travels led you to unknown frontiers. Time to
        turn the wheels around and head back home.
      </h1>
      <Button buttonText="Go Home" href="/" className={styles.notFoundButton} />
    </>
  );
}

export default NotFoundPage;
