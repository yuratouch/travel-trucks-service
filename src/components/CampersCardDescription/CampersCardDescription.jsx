import styles from "./CampersCardDescription.module.css";

function CampersCardDescription({
  description,
  isShort = false,
  isTruckPage = false,
  className = "",
}) {
  const descriptionText = isShort
    ? description.slice(0, 61) + "..."
    : description;

  const combinedClassName = `${styles.description} ${
    isTruckPage ? styles.truckPage : ""
  } ${className}`.trim();

  return <p className={combinedClassName}>{descriptionText}</p>;
}

export default CampersCardDescription;
