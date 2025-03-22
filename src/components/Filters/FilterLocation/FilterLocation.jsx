import styles from "./FilterLocation.module.css";
import { useDispatch } from "react-redux";
import { setLocation } from "@/store/slices/filtersSlice";
import { useCallback, useRef } from "react";

const FilterLocation = () => {
  const dispatch = useDispatch();
  const debounceTimeout = useRef(null);

  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        dispatch(setLocation(value));
      }, 500);
    },
    [dispatch]
  );

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
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterLocation;
