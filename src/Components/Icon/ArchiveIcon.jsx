import { useAuth, useNote } from "../../Contexts";
import { ArchiveNoteService } from "../../utils";
import styles from "./icon.module.css";

const ArchiveIcon = ({noteId , noteData}) => {
    const {authState :{token} } = useAuth();
    const {noteDispatch} =useNote();
    const ArchiveHandler = () => {
        ArchiveNoteService(noteId, token, noteData, noteDispatch);
      };
  return (
    <span
      className={`material-icons-outlined ${styles.icon}`}
      onClick={ArchiveHandler}
    >
      archive
    </span>
  );
};
export { ArchiveIcon };
