import styles from "./CampersList.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchCampers } from "@/store/operations";
import { selectLoader } from "@/store/selectors/campersSelectors";
import { selectFilteredCampers } from "@/store/selectors/filtersSelectors";
import { useSelector } from "react-redux";
import CampersCard from "@/components/CampersCard/CampersCard";
import LoadMore from "@/components/LoadMore/LoadMore";
import Loader from "@/components/Loader/Loader";
import { CARDS_TO_SHOW, CARDS_HEIGHT_TO_SCROLL } from "@/configs/constants.js";

function CampersList() {
  const [visibleCount, setVisibleCount] = useState(CARDS_TO_SHOW);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredCampers = useSelector(selectFilteredCampers) || [];
  const visibleCampers = filteredCampers.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
    setIsLoadingMore(true);
  };

  const isLoading = useSelector(selectLoader);
  const isLoadMoreHidden = visibleCount >= filteredCampers.length;

  const isNoResults = useMemo(() => {
    return filteredCampers.length === 0 && !isLoading;
  }, [filteredCampers, isLoading]);

  useEffect(() => {
    if (isLoadingMore) {
      window.scrollBy({
        top: CARDS_HEIGHT_TO_SCROLL,
        behavior: "smooth",
      });
      setIsLoadingMore(false);
    }
  }, [visibleCount, isLoadingMore]);

  return (
    <main className={styles.campersList}>
      {isNoResults && (
        <p className={styles.noResults}>
          No campers match your filters. Please try adjusting your search
          criteria.
        </p>
      )}
      <ul>
        {visibleCampers.map((camper) => {
          return <CampersCard camper={camper} key={camper.id} />;
        })}
      </ul>
      <LoadMore onClick={handleLoadMore} isHidden={isLoadMoreHidden} />
      <Loader isLoading={isLoading} />
    </main>
  );
}

export default CampersList;
