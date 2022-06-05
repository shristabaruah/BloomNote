import styles from "./icon.module.css";
import { useState } from "react";
import { useNote } from "../../Contexts";

const PalleteIcon = ({ noteId, setNoteBg, styleData }) => {
  const [addColor, setAddColor] = useState(false);
  const { noteDispatch } = useNote();

  const bgColourHandler = (bgColor) => {
    if (setNoteBg) {
      setNoteBg(bgColor);
    }
    noteDispatch({
      type: "NOTE_BGCOLOR",
      payload: { id: noteId, newColor: bgColor },
    });
  };
  return (
    <>
      <span
        className={`material-icons-outlined ${styles.icon}`}
        onClick={() => setAddColor((prev) => !prev)}
        title="Note color"
      >
        palette
      </span>
      {addColor && (
        <div className={styles.pallete_container} style={styleData}>
          <span
            className={`material-icons-outlined default}`}
            title="default"
            onClick={() => bgColourHandler("")}
          >
            format_color_reset
          </span>
          <span
            className={` purple ${styles.circle_ring}`}
            title="purple"
            onClick={() => bgColourHandler("purple")}
          ></span>
          <span
            className={` yellow ${styles.circle_ring}`}
            title="yellow"
            onClick={() => bgColourHandler("yellow")}
          ></span>
          <span
            className={`blue ${styles.circle_ring}`}
            title="blue"
            onClick={() => bgColourHandler("blue")}
          ></span>
          <span
            className={`green ${styles.circle_ring}`}
            title="green"
            onClick={() => bgColourHandler("green")}
          ></span>
        </div>
      )}
    </>
  );
};
export { PalleteIcon };
