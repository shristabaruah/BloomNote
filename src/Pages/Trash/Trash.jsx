import { Header, Sidebar, TrashNote } from "../../Components";
import { useNote } from "../../Contexts";
import styles from "./Trash.module.css";
const Trash = () => {
  const {
    noteState: { trash },
  } = useNote();
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`pg ${styles.trash}`}>
          <h1 className={styles.heading}>Trash</h1>
        <div className={styles.notes}>
          {trash.length > 0 ? (
            [...trash].map((item) => (
              <TrashNote key={item._id} noteData={item} />
            ))
          ) : (
            <h2 className={styles.empty}>No Trash</h2>
          )}
        </div>
      </section>
    </>
  );
};
export { Trash };
