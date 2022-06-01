import { useState } from "react";
import { Link } from "react-router-dom";
import { NoteModal } from "../NoteModal/NoteModal";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [addNote, setAddNote] = useState(false);
  return (
    <aside className={`glass ${styles.side_menu}`}>
      <ul>
        <li className={styles.menu_list}>
          <Link to="/home">
            <span className={styles.menu_item}>
              <i class="fa-solid fa-house"></i>
              Note
            </span>
          </Link>
        </li>
        <li>
          <span className={styles.menu_item}>
            <i class="fa-solid fa-pen-to-square"></i>
            Edit Label
          </span>
        </li>
        <li>
          <Link to="/archive">
            <span className={styles.menu_item}>
              <i class="fa-solid fa-box-archive"></i>
              Archive
            </span>
          </Link>
        </li>
        <li>
          <span className={styles.menu_item}>
            <i class="fa-solid fa-trash-can"></i>
            Trash
          </span>
        </li>
      </ul>
      <button
        className={`btn ${styles.btn_note}`}
        onClick={() => setAddNote((prev) => !prev)}
      >
        Add Note
      </button>
      {addNote && <NoteModal addNote={addNote} setModalOpen={setAddNote} />}
    </aside>
  );
};
export { Sidebar };
