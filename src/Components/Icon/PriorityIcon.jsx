import { useState } from "react";
import { useNote } from "../../Contexts";
import styles from "./icon.module.css";

const PriorityIcon = ({
  noteId,
  currentPriority,
  setCurrentPriority,
  styleData,
}) => {
  const [editPriority, setEditPriority] = useState(false);
  const { noteDispatch } = useNote();
  const priorityList = ["Low", "Medium", "High"];

  const priorityHandler = (priority) => {
    setCurrentPriority(() => priority);
    if (noteId) {
      noteDispatch({
        type: "NOTE_PRIORITY",
        payload: { id: noteId, priority },
      });
    }
  };
  return (
    <>
      <span
        className={styles.priority}
        onClick={() => setEditPriority((prev) => !prev)}
      >
        {currentPriority}
      </span>
      {editPriority && (
        <div className={styles.priority_option} style={styleData}>
          {priorityList.map((item, index) => (
            <div className={styles.priority_menu} key={index}>
              <input
                type="radio"
                name="priority"
                id={item}
                onChange={() => priorityHandler(item)}
              />
              <label htmlFor={item} className={styles.priority_label}>
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export { PriorityIcon };
