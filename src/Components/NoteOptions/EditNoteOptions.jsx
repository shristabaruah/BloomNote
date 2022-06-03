import { useLocation } from "react-router-dom";
import { ArchiveIcon } from "../Icon/ArchiveIcon";
import { LabelIcon } from "../Icon/LabelIcon";
import { UnarchiveIcon } from "../Icon/UnArchiveIcon";
import styles from "./Note-option.module.css";

const EditNoteOption = ({ editNoteHandler, noteData }) => {
  const location = useLocation();
  return (
    <>
      <div className={styles.note_option}>
        <span className={styles.priority}>High</span>
        <span className={`material-icons-outlined ${styles.icon}`}>
          palette
        </span>
        <LabelIcon noteData={noteData} styleData={{bottom:"-4rem"}}/>
        {location.pathname === "/archive" ? (
          <UnarchiveIcon noteId={noteData._id} />
        ) : (
          <ArchiveIcon noteId={noteData._id} noteData={noteData} />
        )}
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
