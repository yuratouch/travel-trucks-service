import styles from "./CampersList.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCampers } from "@/store/operations";
import { selectCampers, selectLoader } from "@/store/slices/campersSlice";
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

  const campers = useSelector(selectCampers) || [];
  const visibleCampers = campers.slice(0, visibleCount);

  const isLoading = useSelector(selectLoader);
  const isLoadMoreHidden = visibleCount >= campers.length;

  useEffect(() => {
    if (isLoadingMore) {
      window.scrollBy({
        top: CARDS_HEIGHT_TO_SCROLL,
        behavior: "smooth",
      });
      setIsLoadingMore(false);
    }
  }, [visibleCount, isLoadingMore]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
    setIsLoadingMore(true);
  };

  return (
    <main className={styles.campersList}>
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
