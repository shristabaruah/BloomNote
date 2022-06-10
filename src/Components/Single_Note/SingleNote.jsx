import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Notedate } from "../../utils";
import {
  ArchiveIcon,
  LabelIcon,
  PriorityIcon,
  TrashIcon,
  UnarchiveIcon,
} from "../Icon";
import { NoteModal } from "../NoteModal/NoteModal";
import styles from "./Single_note.module.css";

const SingleNote = ({ noteData }) => {
  const { _id, noteTitle, noteText, date, label, bgColor, notePriority } =
    noteData;
  const [editNote, setEditNote] = useState(false);
  const [currentPriority, setCurrentPriority] = useState(() => notePriority);
  const location = useLocation();

  useEffect(() => {
    setCurrentPriority(() => notePriority);
  }, [notePriority]);

  return (
    <>
      <div className={`  ${styles.note} ${bgColor} glass`}>
        <div className={styles.title_content}>
          <h4 className={styles.title}>{noteTitle}</h4>
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
            <PriorityIcon
              setCurrentPriority={setCurrentPriority}
              currentPriority={currentPriority}
              noteId={_id}
              styleData={{ bottom: "12rem" }}
            />

            <LabelIcon noteData={noteData} />
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
              <NoteModal
                setModalOpen={setEditNote}
                noteData={noteData}
                setCurrentPriority={setCurrentPriority}
                currentPriority={currentPriority}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleNote };
