import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth, useNote } from "../../Contexts";
import { addNoteService, EditNoteService } from "../../utils";
import { AddNoteOption } from "../NoteOptions/AddNoteOptions";
import { EditNoteOption } from "../NoteOptions/EditNoteOptions";
import styles from "./NoteModal.module.css";
const NoteModal = ({ addNote, setModalOpen, noteData }) => {
  const [noteTitle, setNoteTitle] = useState(
    noteData?.noteTitle ? noteData?.noteTitle : ""
  );
  const [noteText, setNoteText] = useState(
    noteData?.noteText ? noteData?.noteText : ""
  );

  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();

  const addNoteHandler = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      addNoteService(
        token,
        { noteTitle, noteText, date: new Date().toString(), label: [] },
        noteDispatch
      );
      setModalOpen((prev) => !prev);
    } else {
      toast.error("Title or Text should not be empty");
    }
  };

  const editNoteHandler = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      EditNoteService(
        noteData._id,
        token,
        { noteTitle, noteText, date: new Date().toString() },
        noteDispatch
      );
      setModalOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={styles.note_modal_overlay}
      onClick={() => setModalOpen((prev) => !prev)}
    >
      <div
        className={`glass ${styles.modal_content}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.input_text}>
          <input
            type="text"
            placeholder="Title"
            className={styles.title}
            autoFocus
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
          <span className={`material-icons-outlined ${styles.icon}`}>
            push_pin
          </span>
        </div>
        <textarea
          className={styles.text_area}
          placeholder="Take a Note"
          autoFocus
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        {noteData?.label.length > 0 && (
          <div className={styles.label_container}>
            {noteData.label.map((item, index) => (
              <label className={styles.label} key={index}>
                {item}
              </label>
            ))}
          </div>
        )}
        <div className={styles.note_items}>
          {addNote ? (
            <AddNoteOption addNoteHandler={addNoteHandler} />
          ) : (
            <EditNoteOption
              editNoteHandler={editNoteHandler}
              noteData={noteData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { NoteModal };
