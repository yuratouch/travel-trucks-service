import FilterLocation from "../Filters/FilterLocation/FilterLocation";
import styles from "./Sidebar.module.css";
import FilterForm from "@/components/Filters/FilterForm/FilterForm";

function Sidebar() {
  return (
    <aside className={styles.filters}>
      <FilterLocation />
      <FilterForm />
    </aside>
  );
}

export default Sidebar;
