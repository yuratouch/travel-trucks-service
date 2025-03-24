import styles from "./FilterLocation.module.css";
import { useSearchParams } from "react-router-dom";
import { useCallback, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/store/slices/filtersSlice";
import { selectLocation } from "@/store/selectors/filtersSelectors";

const FilterLocation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const reduxLocation = useSelector(selectLocation);
  const [locationValue, setLocationValue] = useState("");

  const debounceTimeout = useRef(null);

  useEffect(() => {
    const urlLocation = searchParams.get("location") || "";
    setLocationValue(urlLocation);
    dispatch(setLocation(urlLocation));
  }, [searchParams, dispatch]);

  useEffect(() => {
    setLocationValue(reduxLocation);
  }, [reduxLocation]);

  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      setLocationValue(value);

      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

      debounceTimeout.current = setTimeout(() => {
        value
          ? searchParams.set("location", value)
          : searchParams.delete("location");
        setSearchParams(searchParams);

        dispatch(setLocation(value));
      }, 500);
    },
    [searchParams, setSearchParams, dispatch]
  );

  return (
    <div className={styles.locationWrapper}>
      <label className={styles.locationLabel} htmlFor="location">
        Location
      </label>
      <div className={styles.locationInputWrapper}>
        <svg width="20" height="20" className={styles.locationIcon}>
          <use href="/icons/sprite.svg#map"></use>
        </svg>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City"
          className={styles.locationInput}
          value={locationValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterLocation;
