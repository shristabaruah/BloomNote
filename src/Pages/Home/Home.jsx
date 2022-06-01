import { Header, SingleNote } from "../../Components";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNote } from "../../Contexts";
import styles from "./Home.module.css";

const Home = () => {

  const { noteState } =useNote();

  return (
    <>
      <Header />
      <Sidebar />
      <section className={`pg ${styles.home}`}>
        <div className={styles.search}>
          <span class="material-icons-outlined">search</span>
          <input
            type="search"
            placeholder="search here..."
            className={styles.search_input}
          />
          <span class="material-icons-outlined">tune</span>
        </div>
        <div className={styles.notes}>
          {
          [...noteState.notes].map((item)=><SingleNote key={item._id} noteData={item}/>)
          }
          
        </div>
      </section>
    </>
  );
};

export { Home };
