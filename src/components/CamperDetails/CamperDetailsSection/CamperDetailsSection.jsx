import styles from "./CamperDetailsSection.module.css";
import CamperBookingForm from "../CamperBookingForm/CamperBookingForm";
import { Link, useLocation, Outlet } from "react-router-dom";

function CamperDetailsSection({ camper }) {
  const location = useLocation();
  const isReviews = location.pathname.includes("reviews");

  return (
    <section className={styles.detailsSection}>
      <div className={styles.tabs}>
        <Link to="" className={!isReviews ? styles.active : ""}>
          <h3 className={styles.tabHeading}>Features</h3>
        </Link>
        <Link to="reviews" className={isReviews ? styles.active : ""}>
          <h3 className={styles.tabHeading}>Reviews</h3>
        </Link>
      </div>

      <div className={styles.tabsWrapper}>
        <Outlet context={{ camper }} />
        <CamperBookingForm />
      </div>
    </section>
  );
}

export default CamperDetailsSection;
