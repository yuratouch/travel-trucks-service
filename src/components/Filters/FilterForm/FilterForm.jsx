import styles from "./FilterForm.module.css";
import Button from "@/components/Button/Button";
import FilterGroup from "../FilterGroup/FilterGroup";
import { useForm } from "react-hook-form";
import {
  EQUIPMENT_FILTER_OPTIONS,
  TYPE_FILTER_OPTIONS,
} from "@/configs/filterOptions";

function FilterForm() {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log("filters:", data);
  };

  console.log(watch());

  return (
    <>
      <p className={styles.filtersHeading}>Filters</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FilterGroup
          title="Vehicle equipment"
          name="equipment"
          type="checkbox"
          options={EQUIPMENT_FILTER_OPTIONS}
          register={register}
        />
        <FilterGroup
          title="Vehicle type"
          name="type"
          type="radio"
          options={TYPE_FILTER_OPTIONS}
          register={register}
        />

        <Button buttonText="Search" type="submit" />
      </form>
    </>
  );
}

export default FilterForm;
