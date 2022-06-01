import styles from "./Note-option.module.css";

const EditNoteOption = ({ editNoteHandler }) => {
  return (
    <>
      <div className={styles.note_option}>
        <span className={styles.priority}>High</span>
        <span className={`material-icons-outlined ${styles.icon}`}>
          palette
        </span>
        <span className={`material-icons-outlined ${styles.icon}`}>label</span>
        <span className={`material-icons-outlined ${styles.icon}`}>
          archive
        </span>
        <span className={`material-icons-outlined ${styles.icon}`}>delete</span>
      </div>
      <div>
        <span className={`btn ${styles.save_btn}`} onClick={editNoteHandler}>
          Save
        </span>
      </div>
    </>
  );
};
export { EditNoteOption };
