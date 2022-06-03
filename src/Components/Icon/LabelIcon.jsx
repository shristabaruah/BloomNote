import { useState } from "react";
import { useAuth, useNote } from "../../Contexts";
import { EditNoteService, LabelInNote } from "../../utils";
import styles from "./icon.module.css";

const LabelIcon = ({ noteData, styleData }) => {
  const [addLabel, setAddLabel] = useState(false);

  const {
    noteState: { label },
    noteDispatch,
  } = useNote();

  const {
    authState: { token },
  } = useAuth();

  const addLabelHandler = (labeltoAdd) => {
    const labelPresent = LabelInNote(noteData.label, labeltoAdd);
    if (labelPresent) {
      const newLabels = noteData.label.filter((item) => item !== labeltoAdd);
      EditNoteService(
        noteData._id,
        token,
        { ...noteData, label: newLabels },
        noteDispatch
      );
    } else {
      const newLabels = [...noteData.label, labeltoAdd];
      EditNoteService(
        noteData._id,
        token,
        { ...noteData, label: newLabels },
        noteDispatch
      );
    }
  };
  return (
    <>
      <span
        className={`material-icons-outlined ${styles.icon}`}
        title="Add label"
        onClick={() => setAddLabel((prev) => !prev)}
      >
        label
      </span>
      {addLabel && (
        <div className={styles.label_menu} style={styleData}>
          <p className={styles.label_select}>Select Label</p>
          {label.map((item) => (
            <div className={styles.option} key={item.id}>
              <input
                type="checkbox"
                name={item.label}
                checked={LabelInNote(noteData.label, item.label)}
                id={item.label}
                className={styles.menu_checkbox}
                onChange={() => addLabelHandler(item.label)}
              />

              <label htmlFor={item.label} className={styles.label}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { LabelIcon };
