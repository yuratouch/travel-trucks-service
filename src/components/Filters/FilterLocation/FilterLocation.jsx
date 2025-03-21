import styles from "./FilterLocation.module.css";

const FilterLocation = () => {
  return (
    <div className={styles.locationWrapper}>
      <label className={styles.locationLabel} htmlFor="location">
        Location
      </label>
      <div className={styles.locationInputWrapper}>
        <svg width="20" height="20" className={styles.locationIcon}>
          <use href="/src/assets/icons/sprite.svg#map"></use>
        </svg>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City"
          className={styles.locationInput}
        />
      </div>
    </div>
  );
};

export default FilterLocation;
