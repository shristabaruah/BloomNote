import { useLocation } from "react-router-dom";
import {
  ArchiveIcon,
  LabelIcon,
  PalleteIcon,
  PriorityIcon,
  TrashIcon,
  UnarchiveIcon,
} from "../Icon";

import styles from "./Note-option.module.css";

const EditNoteOption = ({
  editNoteHandler,
  noteData,
  setNoteBg,
  setCurrentPriority,
  currentPriority,
}) => {
  const location = useLocation();
  return (
    <>
      <div className={styles.note_option}>
        <PriorityIcon
          setCurrentPriority={setCurrentPriority}
          currentPriority={currentPriority}
          styleData={{bottom:"-5rem"}}
          noteId={noteData._id}
        />
        <PalleteIcon
          noteId={noteData._id}
          setNoteBg={setNoteBg}
          styleData={{ bottom: "-4rem" }}
        />

        <LabelIcon noteData={noteData} styleData={{ bottom: "-4rem" }} />

        {location.pathname === "/archive" ? (
          <UnarchiveIcon noteId={noteData._id} />
        ) : (
          <ArchiveIcon noteId={noteData._id} noteData={noteData} />
        )}
        <TrashIcon noteId={noteData._id} />
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
