import styles from "./Sidebar.module.css";
import FilterLocation from "@/components/Filters/FilterLocation/FilterLocation";
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
