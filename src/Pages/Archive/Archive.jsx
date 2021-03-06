import { Header, Sidebar, SingleNote } from "../../Components";
import { useNote } from "../../Contexts";
import styles from "./Archive.module.css";

const Archive = () => {
  const {
    noteState: { archives },
  } = useNote();
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`pg ${styles.archive}`}>
        <h1 className={styles.heading}>Archive</h1>
        <div className={styles.notes}>
          {archives.length > 0 ? (
            [...archives].map((item) => (
              <SingleNote key={item._id} noteData={item} />
            ))
          ) : (
            <h2 className={styles.empty}>No Archives</h2>
          )}
        </div>
      </section>
    </>
  );
};
export { Archive };
