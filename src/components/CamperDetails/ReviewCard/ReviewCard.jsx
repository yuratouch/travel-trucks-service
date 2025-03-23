import styles from "./ReviewCard.module.css";

function ReviewCard({ review }) {
  const { reviewer_name, reviewer_rating, comment } = review;
  const avatarLetter = reviewer_name.charAt(0).toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>{avatarLetter}</div>
        <div>
          <p className={styles.name}>{reviewer_name}</p>
          <div className={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                width="16"
                height="16"
                fill={index < reviewer_rating ? "#FFC531" : "#F2F4F7"}
              >
                <use href="/icons/sprite.svg#star"></use>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
}

export default ReviewCard;
