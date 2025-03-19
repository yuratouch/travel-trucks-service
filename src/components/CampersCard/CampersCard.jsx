import styles from "./CampersCard.module.css";
import Button from "@/components/Button/Button";
import CampersCardDescription from "@/components/CampersCardDescription/CampersCardDescription";
import CampersCardHeader from "@/components/CampersCardHeader/CampersCardHeader";

function CampersCard({ camper }) {
  return (
    <li key={camper.id} className={styles.camperCard}>
      <img
        className={styles.image}
        src={camper.gallery[0].thumb}
        alt={camper.name}
      />
      <div className={styles.info}>
        <CampersCardHeader camper={camper} />
        <CampersCardDescription description={camper.description} />
        <Button buttonText="Show more" href="/" />
      </div>
    </li>
  );
}

export default CampersCard;
