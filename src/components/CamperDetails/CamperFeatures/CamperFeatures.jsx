import CamperBadgesContainer from "../CamperBadgesContainer/CamperBadgesContainer";
import CamperDetails from "../CamperDetails/CamperDetails";
import styles from "./CamperFeatures.module.css";
import { useOutletContext } from "react-router-dom";

function CamperFeatures() {
  const { camper } = useOutletContext();
  console.log("Camper in CamperFeatures:", camper);

  if (!camper) return null;

  return (
    <div className={styles.wrapper}>
      <CamperBadgesContainer camper={camper} />
      <CamperDetails camper={camper} />
    </div>
  );
}

export default CamperFeatures;
