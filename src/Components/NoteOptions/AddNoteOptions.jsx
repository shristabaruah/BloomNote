import styles from "./Note-option.module.css";

const AddNoteOption = ({ addNoteHandler }) => {
  return (
    <>
      <div className={styles.note_option}>
        <span className={styles.priority}>High</span>
        <span className={`material-icons-outlined ${styles.icon}`}>
          palette
        </span>
        <span className={`material-icons-outlined ${styles.icon}`}>label</span>
      </div>
      <div>
        <span className={`btn ${styles.save_btn}`} onClick={addNoteHandler}>
          Add Note
        </span>
      </div>
    </>
  );
};
export { AddNoteOption };
