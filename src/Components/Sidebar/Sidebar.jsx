import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNote } from "../../Contexts";
import { LabelModal } from "../Label/LabelModal";
import { NoteModal } from "../NoteModal/NoteModal";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [addNote, setAddNote] = useState(false);
  const [editLabel, setEditLabel] = useState(false);

  const {
    noteState: { label },
  } = useNote();

  const getActiveStyle = ({ isActive }) =>
    isActive ? { borderLeft: "2px solid var(--color-border)" } : null;

  return (
    <aside className={`glass ${styles.side_menu}`}>
      <ul>
        <li className={styles.menu_list}>
          <NavLink to="/home" style={getActiveStyle}>
            <span className={styles.menu_item}>
              <i class="fa-solid fa-house"></i>
              Note
            </span>
          </NavLink>
        </li>
        {label.map((item) => {
          return (
            <li  key={item.id}>
              <NavLink
                to={`/label/${item.label}`}
                style={getActiveStyle}
              >
                <span className={styles.menu_item}>
                  <span className={`material-icons-outlined ${styles.icon}`}>label</span>
                  {item.label}
                </span>
              </NavLink>
            </li>
          );
        })}
        <li>
          <span
            className={styles.menu_item}
            onClick={() => setEditLabel((prev) => !prev)}
          >
            <i class="fa-solid fa-pen-to-square"></i>
            Edit Label
          </span>
        </li>
        <li>
          <NavLink to="/archive" style={getActiveStyle}>
            <span className={styles.menu_item}>
              <i class="fa-solid fa-box-archive"></i>
              Archive
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/trash" style={getActiveStyle}>
            <span className={styles.menu_item}>
              <i class="fa-solid fa-trash-can"></i>
              Trash
            </span>
          </NavLink>
        </li>
      </ul>
      <button
        className={`btn ${styles.btn_note}`}
        onClick={() => setAddNote((prev) => !prev)}
      >
        Add Note
      </button>
      {addNote && <NoteModal addNote={addNote} setModalOpen={setAddNote} />}
      {editLabel && <LabelModal toggleLabelModal={setEditLabel} />}
    </aside>
  );
};
export { Sidebar };
