import styles from "./CampersCardHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/store/slices/favoritesSlice";
import { selectIsFavorite } from "@/store/selectors/favoritesSelectors";

function CampersCardHeader({ camper, isTruckPage = false }) {
  const dispatch = useDispatch();

  function handleAddFavorite() {
    dispatch(toggleFavorite(camper));
  }

  const isFavorite = useSelector(selectIsFavorite(camper.id));

  return (
    <>
      <div className={styles.header}>
        <h2 className={`${styles.heading} ${styles.cardHeading}`}>
          {camper.name}
        </h2>
        <div
          className={`${styles.favoriteContainer} ${
            isTruckPage ? styles.truckPageHidden : ""
          }`}
        >
          <h2 className={styles.heading}>€{camper.price.toFixed(2)}</h2>
          <button
            className={`${styles.favoriteButton} ${
              isFavorite ? styles.active : ""
            }`}
            onClick={handleAddFavorite}
          >
            <svg width="26" height="24">
              <use href="/icons/sprite.svg#heart"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.reviews}>
          <svg width="16" height="16" fill="#FFC531">
            <use href="/icons/sprite.svg#star"></use>
          </svg>
          <p>
            {camper.rating} ({camper.reviews.length} Reviews)
          </p>
        </div>
        <div className={styles.location}>
          <svg width="16" height="16">
            <use href="/icons/sprite.svg#map"></use>
          </svg>
          <p>{camper.location}</p>
        </div>
      </div>
      <div
        className={`${styles.favoriteContainer} ${
          isTruckPage ? "" : styles.truckPageHidden
        }`}
      >
        <h2 className={styles.heading}>€{camper.price.toFixed(2)}</h2>
        <button
          className={`${styles.favoriteButton} ${
            isFavorite ? styles.active : ""
          }`}
          onClick={handleAddFavorite}
        >
          <svg width="26" height="24">
            <use href="/icons/sprite.svg#heart"></use>
          </svg>
        </button>
      </div>
    </>
  );
}

export default CampersCardHeader;
