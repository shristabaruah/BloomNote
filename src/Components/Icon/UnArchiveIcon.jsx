import { useAuth, useNote } from "../../Contexts";
import { RestoreFromArchive } from "../../utils";
import styles from "./icon.module.css";

const UnarchiveIcon = ({ noteId }) => {
  const { noteDispatch } = useNote();
  const {
    authState: { token },
  } = useAuth();

  const UnArchiveHandler = () => {
    RestoreFromArchive(noteId, token, noteDispatch);
  };
  return (
    <span
      className={`material-icons-outlined ${styles.icon}`}
      onClick={UnArchiveHandler}
    >
      unarchive
    </span>
  );
};
export { UnarchiveIcon };
