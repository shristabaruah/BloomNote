import styles from "./label.module.css";
import { Header, Sidebar, SingleNote } from "../../Components";
import { LabelNote } from "../../utils";
import { useNote } from "../../Contexts";
import { useParams } from "react-router-dom";

const Label = () => {
  const { noteState } = useNote();
  const params = useParams();
  return (
    <>
      <Header />
      <Sidebar />
      <section className={`pg ${styles.label}`}>
        <h1 className={styles.heading}>{params.labelName}</h1>
        <div className={styles.notes}>
          {LabelNote(params.labelName, noteState).length > 0 ? (
            LabelNote(params.labelName, noteState).map((item) => (
              <SingleNote key={item.id} noteData={item} />
            ))
          ) : (
            <div className={styles.empty}>No note for this label</div>
          )}
        </div>
      </section>
    </>
  );
};

export { Label };
