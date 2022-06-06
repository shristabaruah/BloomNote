import { useState } from "react";
import { Header, SingleNote } from "../../Components";
import { FilterIcon } from "../../Components/Icon";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../Contexts";
import { notesByDate, notesByPriority, searchNotes } from "../../utils";
import styles from "./Home.module.css";

const Home = () => {
  const { noteState } = useNote();

  const [filterData, setFilterData] = useState({
    currentPriority: "",
    sortBy: "",
  });

  const [searchInput, setSearchInput] = useState("");
  const search = searchNotes(noteState.notes, searchInput);
  const priorityNotes = notesByPriority(search, filterData.currentPriority);
  const sortedNotes = notesByDate(priorityNotes, filterData.sortBy);

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`pg ${styles.home}`}>
        <div className={styles.search}>
          <span className="material-icons-outlined">search</span>
          <input
            type="search"
            placeholder="search here..."
            className={styles.search_input}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FilterIcon filterData={filterData} setFilterData={setFilterData} />
        </div>
        <div className={styles.notes}>
          {sortedNotes.map((item) => (
            <SingleNote key={item._id} noteData={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export { Home };
