import styles from "./LoadMore.module.css";
import Button from "@/components/Button/Button";

function LoadMore({ onClick, isHidden }) {
  return (
    <Button
      buttonText="Load More"
      className={`${styles.loadMore} ${isHidden ? styles.hidden : ""}`}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
        window.scrollBy({
          top: 300,
          behavior: "smooth",
        });
      }}
    />
  );
}

export default LoadMore;
