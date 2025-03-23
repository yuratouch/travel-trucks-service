import styles from "./CamperBadge.module.css";

function CamperBadge({ icon, label }) {
  return (
    <div className={styles.camperBadge}>
      <svg width="24" height="24">
        <use href={`/icons/sprite.svg#${icon}`} />
      </svg>
      <span>{label}</span>
    </div>
  );
}

export default CamperBadge;
