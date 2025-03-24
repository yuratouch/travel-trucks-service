import styles from "./CampersList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCampers } from "@/store/operations";
import CampersCard from "@/components/CampersCard/CampersCard";
import LoadMore from "@/components/LoadMore/LoadMore";
import Loader from "@/components/Loader/Loader";
import {
  CARDS_TO_SHOW,
  CARDS_HEIGHT_TO_SCROLL,
  SEARCH_PARAMS_CONFIG,
} from "@/configs/constants.js";
import {
  selectLoader,
  selectCampers,
} from "@/store/selectors/campersSelectors";

function CampersList() {
  const [visibleCount, setVisibleCount] = useState(CARDS_TO_SHOW);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const allCampers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const filteredCampers = useMemo(() => {
    const location = searchParams.get("location") || "";
    const equipment = searchParams.get("equipment")?.split(",") || [];
    const type = searchParams.get("type");

    const engineFilters = equipment.filter((item) =>
      SEARCH_PARAMS_CONFIG.engineOptions.includes(item)
    );
    const transmissionFilters = equipment.filter((item) =>
      SEARCH_PARAMS_CONFIG.transmissionOptions.includes(item)
    );
    const booleanFilters = equipment.filter((item) =>
      SEARCH_PARAMS_CONFIG.booleanOptions.includes(item)
    );

    return allCampers.filter((camper) => {
      const locationMatch = location
        ? camper.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const typeMatch = type ? camper.form === type : true;

      const booleanMatch = booleanFilters.every((key) => camper[key] === true);

      const engineMatch = engineFilters.length
        ? engineFilters.includes(camper.engine)
        : true;

      const transmissionMatch = transmissionFilters.length
        ? transmissionFilters.includes(camper.transmission)
        : true;

      return (
        locationMatch &&
        typeMatch &&
        booleanMatch &&
        engineMatch &&
        transmissionMatch
      );
    });
  }, [searchParams, allCampers]);

  const visibleCampers = filteredCampers.slice(0, visibleCount);
  const isLoadMoreHidden = visibleCount >= filteredCampers.length;

  function handleLoadMore() {
    setVisibleCount((prev) => prev + CARDS_TO_SHOW);
    setIsLoadingMore(true);
  }

  useEffect(() => {
    if (isLoadingMore) {
      window.scrollBy({ top: CARDS_HEIGHT_TO_SCROLL, behavior: "smooth" });
      setIsLoadingMore(false);
    }
  }, [visibleCount, isLoadingMore]);

  const isNoResults = useMemo(
    () => filteredCampers.length === 0 && !isLoading,
    [filteredCampers, isLoading]
  );

  return (
    <main className={styles.campersList}>
      {isNoResults && (
        <p className={styles.noResults}>
          No campers match your filters. Please try adjusting your search
          criteria.
        </p>
      )}
      <ul>
        {visibleCampers.map((camper) => (
          <CampersCard camper={camper} key={camper.id} />
        ))}
      </ul>
      <LoadMore onClick={handleLoadMore} isHidden={isLoadMoreHidden} />
      <Loader isLoading={isLoading} />
    </main>
  );
}

export default CampersList;
