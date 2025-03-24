import styles from "./CamperDetailsPage.module.css";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCamperById } from "@/store/operations";
import Loader from "@/components/Loader/Loader";
import CampersCardHeader from "@/components/CampersCardHeader/CampersCardHeader";
import Container from "@/components/Container/Container";
import CampersGallery from "@/components/CampersGallery/CampersGallery";
import CampersCardDescription from "@/components/CampersCardDescription/CampersCardDescription";
import CamperDetailsSection from "@/components/CamperDetails/CamperDetailsSection/CamperDetailsSection";
import {
  selectedCamper,
  selectLoader,
} from "@/store/selectors/campersSelectors";

function CamperDetailsPage() {
  const dispatch = useDispatch();
  const camper = useSelector(selectedCamper);
  const isLoading = useSelector(selectLoader);
  const { truckId } = useParams();

  useEffect(() => {
    dispatch(fetchCamperById(truckId));
  }, [truckId, dispatch]);

  if (isLoading) return <Loader />;
  if (!camper)
    return <p className={styles.noResults}>Oopsie, Truck not found!</p>;

  return (
    <Container className={styles.truckPage}>
      <CampersCardHeader camper={camper} isTruckPage={true} />
      <CampersGallery gallery={camper.gallery} alt={camper.name} />
      <CampersCardDescription
        description={camper.description}
        isTruckPage={true}
      />
      <CamperDetailsSection camper={camper} />
    </Container>
  );
}

export default CamperDetailsPage;
