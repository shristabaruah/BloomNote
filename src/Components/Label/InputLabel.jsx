import { useState, useRef } from "react";
import { useNote } from "../../Contexts/Note_Contexts";
import styles from "./label.module.css";

const InputLabel = ({ labelData }) => {
  const [labelText, setLabelText] = useState(labelData.label);
  const [editLabel, setEditLabel] = useState(false);
  const inputRef = useRef();
  const { noteDispatch } = useNote();

  const deleteLabelHandle = () => {
    noteDispatch({ type: "DELETE_LABEL", payload: labelData.id });
  };

  const editLabelHandle = () => {
    inputRef.current.focus();
    setEditLabel((prev) => !prev);
  };

  const renameLabelHandle = () => {
    noteDispatch({
      type: "RENAME_LABEL",
      payload: { id: labelData.id, newLabel: labelText },
    });
  };

  return (
    <>
      < div className={styles.input_container}>
        <span
          className={`material-icons-outlined ${styles.icon}`}
          title="Delete label"
          onClick={deleteLabelHandle}
        >
          delete
        </span>
        <input
          type="text"
          className={styles.input_field}
          placeholder="label"
          ref={inputRef}
          id={labelText}
          value={labelText}
          onChange={(e) => setLabelText(e.target.value)}
        />
        {editLabel ? (
          <span className={`material-icons-outlined ${styles.icon}`} onClick={renameLabelHandle}>
            done
          </span>
        ) : (
          <label
            className={`material-icons-outlined ${styles.icon}`}
            title="Rename label"
            htmlFor={labelText}
            onClick={editLabelHandle}
          >
            edit
          </label>
        )}
      </div>
    </>
  );
};
export { InputLabel };
