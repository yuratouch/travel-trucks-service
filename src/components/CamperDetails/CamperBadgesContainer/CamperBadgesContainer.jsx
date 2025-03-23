import CamperBadge from "../CamperBadge/CamperBadge";
import styles from "./CamperBadgesContainer.module.css";
import { FEATURE_TAG_OPTIONS } from "@/configs/constants";

function CamperBadgesContainer({ camper }) {
  //   if (!camper) return null;

  const activeBadges = FEATURE_TAG_OPTIONS.filter((option) => {
    return (
      camper[option.value] === true ||
      camper.engine === option.value ||
      camper.transmission === option.value ||
      camper.form === option.value
    );
  });

  return (
    <div className={styles.badgesContainer}>
      <ul className={styles.list}>
        {activeBadges.map((badge) => (
          <li key={badge.value} className={styles.item}>
            <CamperBadge icon={badge.icon} label={badge.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CamperBadgesContainer;
