import styles from "./CamperBadgesContainer.module.css";
import { useState } from "react";
import { FEATURE_TAG_OPTIONS } from "@/configs/configs";
import CamperBadge from "../CamperBadge/CamperBadge";

function CamperBadgesContainer({ camper, isCatalog = false }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!camper) return null;

  const activeBadges = FEATURE_TAG_OPTIONS.filter((option) => {
    return (
      camper[option.value] === true ||
      camper.engine === option.value ||
      camper.transmission === option.value ||
      camper.form === option.value
    );
  });

  if (!activeBadges.length) return null;
  const isCollapsible = isCatalog && activeBadges.length > 9;

  return (
    <div
      className={`${styles.badgesContainer} ${
        !isCollapsible ? styles.catalogWithMargin : ""
      }`}
    >
      <ul
        className={`${styles.list} ${
          isCollapsible && !isExpanded ? styles.collapsed : ""
        }`}
      >
        {activeBadges.map((badge) => (
          <li key={badge.value} className={styles.item}>
            <CamperBadge icon={badge.icon} label={badge.label} />
          </li>
        ))}
      </ul>

      {isCollapsible && (
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Hide" : "Show all"}
        </button>
      )}
    </div>
  );
}

export default CamperBadgesContainer;
