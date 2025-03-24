import styles from "./CampersGallery.module.css";
import { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

function CampersGallery({ gallery, alt }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = gallery.map((item) => item.original);

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <ul className={styles.gallery}>
        {gallery.map((item, index) => (
          <li key={item.thumb}>
            <img
              className={styles.image}
              src={item.thumb}
              alt={alt}
              onClick={() => openImageViewer(index)}
            />
          </li>
        ))}
      </ul>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
}

export default CampersGallery;
