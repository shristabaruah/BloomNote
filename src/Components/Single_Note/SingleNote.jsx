import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Notedate } from "../../utils";
import { ArchiveIcon } from "../Icon/ArchiveIcon";
import { LabelIcon } from "../Icon/LabelIcon";
import { TrashIcon } from "../Icon/TrashIcon";
import { UnarchiveIcon } from "../Icon/UnArchiveIcon";
import { NoteModal } from "../NoteModal/NoteModal";
import styles from "./Single_note.module.css";

const SingleNote = ({ noteData }) => {
  const { _id, noteTitle, noteText, date, label } = noteData;
  const [editNote, setEditNote] = useState(false);

  const location = useLocation();

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
          {label.map((item, index) => (
            <label className={styles.label} key={index}>
              {item}
            </label>
          ))}
        </div>

        <div className={styles.note_items}>
          <span className={styles.date}>{Notedate(date)}</span>
          <div className={styles.note_option}>
            <span className={styles.priority}>High</span>
            <span className={`material-icons-outlined ${styles.icon}`}>
              palette
            </span>
           <LabelIcon noteData={noteData}/>
            {location.pathname === "/archive" ? (
              <UnarchiveIcon noteId={_id} />
            ) : (
              <ArchiveIcon noteId={_id} noteData={noteData} />
            )}

            <span
              className={`material-icons-outlined ${styles.icon}`}
              onClick={() => setEditNote((prev) => !prev)}
            >
              edit
            </span>
            <TrashIcon noteId={_id} />
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
