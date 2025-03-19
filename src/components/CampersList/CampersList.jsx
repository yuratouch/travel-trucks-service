import styles from "./CampersList.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "@/store/operations";
import { selectCampers } from "@/store/slices/campersSlice";
import { useSelector } from "react-redux";
import CampersCard from "@/components/CampersCard/CampersCard";

function CampersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers) || [];
  console.log("campers", campers);

  return (
    <main className={styles.campersList}>
      <ul>
        {campers.map((camper) => {
          return <CampersCard camper={camper} key={camper.id} />;
        })}
      </ul>
    </main>
  );
}

export default CampersList;
