import { useAuth, useNote } from "../../Contexts";
import { Notedate } from "../../utils";
import { DeleteTrashService, RestoreTrashService } from "../../utils/Note";
import styles from "./Trash-note.module.css";

const TrashNote = ({ noteData }) => {
  const { _id, noteTitle, noteText, date } = noteData;
  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();

  const DeleteTrash = ()=>{
      DeleteTrashService(token,_id,noteDispatch);
  }
  const RestoreTrashHandler = ()=>{
      RestoreTrashService(_id ,token,noteDispatch);
  }

  return (
    <>
      <div className={styles.note}>
        <div className={styles.title_content}>
          <h4 className={styles.title}>{noteTitle}</h4>
        </div>

        <p>{noteText}</p>
        <div className={styles.label_container}>
          <label className={styles.label}>hello</label>
        </div>

        <div className={styles.note_items}>
          <span className={styles.date}>{Notedate(date)}</span>
          <div className={styles.note_option}>
            <button className={`btn btn ${styles.icon}`} onClick={DeleteTrash}>Delete</button>
            <button className={`btn btn ${styles.icon}`} onClick={RestoreTrashHandler}>Restore</button>
          </div>
        </div>
      </div>
    </>
  );
};
export { TrashNote };
