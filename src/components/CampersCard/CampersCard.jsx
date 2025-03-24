import styles from "./CampersCard.module.css";
import Button from "@/components/Button/Button";
import CampersCardDescription from "@/components/CampersCardDescription/CampersCardDescription";
import CampersCardHeader from "@/components/CampersCardHeader/CampersCardHeader";
import CamperBadgesContainer from "@/components/CamperDetails/CamperBadgesContainer/CamperBadgesContainer";

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
        <CampersCardDescription
          description={camper.description}
          isShort={true}
        />
        <CamperBadgesContainer camper={camper} isCatalog={true} />
        <Button
          buttonText="Show more"
          href={`/catalog/${camper.id}`}
          target="_blank"
        />
      </div>
    </li>
  );
}

export default CampersCard;
