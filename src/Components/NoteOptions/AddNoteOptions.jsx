import { PalleteIcon, PriorityIcon } from "../Icon";
import styles from "./Note-option.module.css";

const AddNoteOption = ({
  addNoteHandler,
  setNoteBg,
  currentPriority,
  setCurrentPriority,
}) => {
  return (
    <>
      <div className={styles.note_option}>
        <PriorityIcon
          setCurrentPriority={setCurrentPriority}
          currentPriority={currentPriority}
          styleData={{bottom:"-5rem"}}
        />
        <PalleteIcon setNoteBg={setNoteBg} styleData={{ bottom: "-4rem" }} />
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
