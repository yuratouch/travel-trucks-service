import { useOutletContext } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./CamperReviews.module.css";

function CamperReviews() {
  const { camper } = useOutletContext();

  if (!camper?.reviews?.length) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.reviewList}>
        {camper.reviews.map((review, index) => (
          <li key={index} className={styles.reviewItem}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CamperReviews;
