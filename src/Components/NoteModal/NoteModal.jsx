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

  const [noteBg, setNoteBg] = useState(
    noteData?.bgColor ? noteData.bgColor : ""
  );

  const [currentPriority, setCurrentPriority] = useState(
    noteData?.notePriority ? noteData.notePriority : "Low"
  );

  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();

  const addNoteHandler = () => {
    if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
      addNoteService(
        token,
        {
          noteTitle,
          noteText,
          date: new Date().toString(),
          label: [],
          bgColor: noteBg,
          notePriority: currentPriority,
        },
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
        {
          noteTitle,
          noteText,
          date: new Date().toString(),
          bgColor: noteBg,
          notePriority: currentPriority,
        },
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
        className={` ${styles.modal_content} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.input_text}>
          <input
            type="text"
            placeholder="Title"
            className={`${styles.title} ${noteBg}`}
            autoFocus
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
          />
        </div>
        <textarea
          className={`${styles.text_area} ${noteBg}`}
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
            <AddNoteOption
              addNoteHandler={addNoteHandler}
              setNoteBg={setNoteBg}
              currentPriority={currentPriority}
              setCurrentPriority={setCurrentPriority}
            />
          ) : (
            <EditNoteOption
              editNoteHandler={editNoteHandler}
              noteData={noteData}
              setNoteBg={setNoteBg}
              currentPriority={currentPriority}
              setCurrentPriority={setCurrentPriority}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { NoteModal };
