import { useState } from "react";
import styles from "./icon.module.css";

const FilterIcon = ({ filterData, setFilterData }) => {
  const [filterOpen, setFilterOpen] = useState();
  const priorityList = ["Low", "Medium", "High"];
  const sortBy = ["Newest", "Oldest"];

  const activeFilter = (item, currentFilter) => {
    if (currentFilter === item) {
      return "filter_item";
    }
  };

  const filterPriorityHandler = (priority) => {
    setFilterData((prev) => ({ ...prev, currentPriority: priority }));
  };
  const filterByDateHandler = (sort) => {
    setFilterData((prev) => ({ ...prev, sortBy: sort }));
  };

  const clearFilterHandler = () => {
    setFilterData(() => ({
      currentPriority: "",
      sortBy: "",
    }));
  };
  return (
    <>
      <span
        className={`material-icons-outlined ${styles.filter}`}
        onClick={() => setFilterOpen((prev) => !prev)}
      >
        tune
      </span>
      {filterOpen && (
        <div className={styles.filter_container}>
          <div className={styles.filter_header}>
            <h2>Filter </h2>
          </div>
          <div className={styles.filter_menu}>
            <div>
              <label className={styles.filter_label}>Prority</label>
              <ul className={styles.filter_option}>
                {priorityList.map((item, index) => (
                  <li
                    className={`${styles.filter_list} ${activeFilter(
                      item,
                      filterData.currentPriority
                    )}`}
                    key={index}
                    onClick={() => filterPriorityHandler(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className={styles.filter_label}>Sort By</label>
              <ul className={styles.filter_option}>
                {sortBy.map((item, index) => (
                  <li
                    className={`${styles.filter_list} ${activeFilter(
                      item,
                      filterData.sortBy
                    )}`}
                    key={index}
                    onClick={() => filterByDateHandler(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h4 className={styles.clear} onClick={clearFilterHandler}>
            Clear All
          </h4>
        </div>
      )}
    </>
  );
};
export { FilterIcon };
