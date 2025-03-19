import styles from "./CampersCardHeader.module.css";

function CampersCardHeader({ camper }) {
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.heading}>{camper.name}</h2>
        <h2 className={styles.heading}>€{camper.price.toFixed(2)}</h2>
        <button className={styles.camperCardButton}>
          <svg className={styles.favoriteButton} width="26" height="24">
            <use href="/src/assets/icons/sprite.svg#heart"></use>
          </svg>
        </button>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.reviews}>
          <svg width="16" height="16" fill="#FFC531">
            <use href="/src/assets/icons/sprite.svg#star"></use>
          </svg>
          <p>
            {camper.rating} ({camper.reviews.length} Reviews)
          </p>
        </div>
        <div className={styles.location}>
          <svg width="16" height="16">
            <use href="/src/assets/icons/sprite.svg#map"></use>
          </svg>
          <p>{camper.location}</p>
        </div>
      </div>
    </>
  );
}

export default CampersCardHeader;
