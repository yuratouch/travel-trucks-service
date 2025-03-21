import styles from "./FilterGroup.module.css";

function FilterGroup({ title, name, type, options, register }) {
  return (
    <>
      <h3 className={styles.filtersGroupHeading}>{title}</h3>
      <div className={styles.filtersGroup}>
        {options.map((option) => (
          <label key={option.value} className={styles.filterBadge}>
            <input
              type={type}
              value={option.value}
              {...register(name)}
              className={styles.hiddenInput}
            />
            <div className={styles.badgeContent}>
              <svg width="32" height="32">
                <use href={`/src/assets/icons/sprite.svg#${option.icon}`} />
              </svg>
              <span>{option.label}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}

export default FilterGroup;
