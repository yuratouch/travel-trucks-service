import styles from "./CampersGallery.module.css";

function CampersGallery({ gallery, alt }) {
  return (
    <ul className={styles.gallery}>
      {gallery.map((item) => {
        return (
          <li key={item.thumb}>
            <img className={styles.image} src={item.thumb} alt={alt} />
          </li>
        );
      })}
    </ul>
  );
}

export default CampersGallery;
