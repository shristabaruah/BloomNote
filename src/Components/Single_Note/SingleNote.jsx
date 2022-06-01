import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth, useNote } from "../../Contexts";
import { ArchiveNoteService, Notedate } from "../../utils";
import { NoteModal } from "../NoteModal/NoteModal";
import styles from "./Single_note.module.css";

const SingleNote = ({ noteData }) => {
  const { _id, noteTitle, noteText, date } = noteData;
  const [editNote, setEditNote] = useState(false);

  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();

  const location = useLocation();

  const ArchiveHandler = () => {
    ArchiveNoteService(_id, token, noteData, noteDispatch);
  };

  return (
    <>
      <div className={styles.note}>
        <div className={styles.title_content}>
          <h4 className={styles.title}>{noteTitle}</h4>
          <span className={`material-icons-outlined ${styles.icon}`}>
            push_pin
          </span>
        </div>

        <p>{noteText}</p>
        <div className={styles.label_container}>
          <label className={styles.label}>hello</label>
          <label className={styles.label}>hello</label>
          <label className={styles.label}>hello</label>
          <label className={styles.label}>hello</label>
        </div>

        <div className={styles.note_items}>
          <span className={styles.date}>{Notedate(date)}</span>
          <div className={styles.note_option}>
            <span className={styles.priority}>High</span>
            <span className={`material-icons-outlined ${styles.icon}`}>
              palette
            </span>
            <span className={`material-icons-outlined ${styles.icon}`}>
              label
            </span>
            {location.pathname === "/archive" ? (
              <span className={`material-icons-outlined ${styles.icon}`}>unarchive</span>
            ) : (
              <span className={`material-icons-outlined ${styles.icon}`} onClick={ArchiveHandler}>
                archive
              </span>
            )}

            <span
              className={`material-icons-outlined ${styles.icon}`}
              onClick={() => setEditNote((prev) => !prev)}
            >
              edit
            </span>
            <span className={`material-icons-outlined ${styles.icon}`}>
              delete
            </span>
            {editNote && (
              <NoteModal setModalOpen={setEditNote} noteData={noteData} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleNote };
