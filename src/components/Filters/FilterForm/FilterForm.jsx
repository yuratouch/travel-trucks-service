import styles from "./FilterForm.module.css";
import Button from "@/components/Button/Button";
import FilterGroup from "../FilterGroup/FilterGroup";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setEquipment,
  setType,
  resetFilters,
} from "@/store/slices/filtersSlice";
import {
  EQUIPMENT_FILTER_OPTIONS,
  TYPE_FILTER_OPTIONS,
} from "@/configs/filterOptions";
import { useEffect, useMemo } from "react";

function FilterForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const urlEquipment = useMemo(() => {
    return searchParams.get("equipment")?.split(",") || [];
  }, [searchParams]);
  const urlType = searchParams.get("type") || null;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      equipment: urlEquipment,
      type: urlType,
    },
  });

  useEffect(() => {
    dispatch(setEquipment(urlEquipment));
    dispatch(setType(urlType));
  }, [dispatch, urlEquipment, urlType]);

  function onSubmit(data) {
    const equipmentArray = Array.isArray(data.equipment)
      ? data.equipment
      : data.equipment
      ? [data.equipment]
      : [];

    equipmentArray.length
      ? searchParams.set("equipment", equipmentArray.join(","))
      : searchParams.delete("equipment");

    data.type
      ? searchParams.set("type", data.type)
      : searchParams.delete("type");

    setSearchParams(searchParams);

    dispatch(setEquipment(equipmentArray));
    dispatch(setType(data.type || null));
    scrollToTop();
  }

  function handleReset() {
    dispatch(resetFilters());
    reset({ equipment: [], type: null });
    setSearchParams({});
    scrollToTop();
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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

        <div className={styles.buttonsWrapper}>
          <Button buttonText="Search" type="submit" />
          <Button
            buttonText="Reset Filters"
            type="button"
            onClick={handleReset}
            className={styles.resetButton}
          />
        </div>
      </form>
    </>
  );
}

export default FilterForm;
