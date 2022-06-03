import { useAuth, useNote } from "../../Contexts";
import { AddTrashService } from "../../utils/Note";
import styles from "./icon.module.css";

const TrashIcon = ({ noteId }) => {
  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();
  const TrashHandler = () => {
    AddTrashService(noteId, token, noteDispatch);
  };
  return (
    <>
      <span
        className={`material-icons-outlined ${styles.icon}`}
        onClick={TrashHandler}
      >
        delete
      </span>
    </>
  );
};
export { TrashIcon };
