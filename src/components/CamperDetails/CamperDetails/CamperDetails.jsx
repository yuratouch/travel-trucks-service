import styles from "./CamperDetails.module.css";

const vehicleConfig = [
  { label: "Form", key: "form" },
  { label: "Length", key: "length" },
  { label: "Width", key: "width" },
  { label: "Height", key: "height" },
  { label: "Tank", key: "tank" },
  { label: "Consumption", key: "consumption" },
];

function formatFormValue(value) {
  if (!value) return "—";
  return value
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function CamperDetails({ camper }) {
  if (!camper) return null;

  return (
    <div>
      <h3 className={styles.heading}>Vehicle Details</h3>
      <ul className={styles.list}>
        {vehicleConfig.map(({ label, key }) => (
          <li key={key} className={styles.item}>
            <span className={styles.text}>{label}</span>
            <span className={styles.text}>
              {key === "form"
                ? formatFormValue(camper[key])
                : camper?.[key] || "—"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CamperDetails;
