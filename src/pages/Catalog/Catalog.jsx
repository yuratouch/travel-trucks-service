import styles from "./Catalog.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import CampersList from "@/components/CampersList/CampersList";
import Container from "@/components/Container/Container";

function Catalog() {
  return (
    <div>
      <Container className={styles.catalogPage}>
        <Sidebar />
        <CampersList />
      </Container>
    </div>
  );
}

export default Catalog;
