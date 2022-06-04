import { useState } from "react";
import { toast } from "react-toastify";
import { useNote } from "../../Contexts/Note_Contexts";
import { InputLabel } from "./InputLabel";
import styles from "./label.module.css";

const LabelModal = ({ toggleLabelModal }) => {
  const [labelText, setLabelText] = useState("");
  const {
    noteState: { label },
    noteDispatch,
  } = useNote();

  const addLabelHandler = () => {
    if (labelText.trim().length > 0) {
      noteDispatch({ type: "ADD_NEW_LABEL", payload: labelText });
      setLabelText("");
      toast.success("Label Added successfully")
    } else {
      toast.error("Label should not be empty");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.content}>
          <h4>Edit Label</h4>
          <span
            className={`material-icons-outlined ${styles.icon}`}
            onClick={() => toggleLabelModal((prev) => !prev)}
          >
            close
          </span>
        </div>
        <div className={styles.content_input}>
          <input
            type="text"
            className={styles.input_field}
            placeholder="Create new Label"
            value={labelText}
            onChange={(e) => setLabelText(e.target.value)}
          />
          <span
            className={`material-icons-outlined ${styles.icon}`}
            onClick={addLabelHandler}
          >
            done
          </span>
         
        </div>
        {label.length > 0 && (
            <div className={styles.created_label}>
              {label.map((item) => (
                <InputLabel key={item.id} labelData={item} />
              ))}
            </div>
          )}
      </div>
    </div>
  );
};
export { LabelModal };
