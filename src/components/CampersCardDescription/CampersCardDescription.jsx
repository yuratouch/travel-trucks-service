import styles from "./CampersCardDescription.module.css";

function CampersCardDescription({ description }) {
  return <p className={styles.description}>{description.slice(0, 61)}...</p>;
}

export default CampersCardDescription;
