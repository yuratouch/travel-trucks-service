import styles from "./Catalog.module.css";
import Filters from "@/components/Filters/Filters";
import CampersList from "@/components/CampersList/CampersList";
import Container from "@/components/Container/Container";

function Catalog() {
  return (
    <div>
      <Container className={styles.catalogPage}>
        <Filters />
        <CampersList />
      </Container>
    </div>
  );
}

export default Catalog;
