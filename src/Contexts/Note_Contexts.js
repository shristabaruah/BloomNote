import { createContext, useContext, useReducer, useEffect } from "react";
import { NoteReducer } from "../Reducer";
import { GetNote } from "../Services";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(NoteReducer, {
    notes: [],
    archives: [],
    trash: [],
    label: [],
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      try {
        const response = await GetNote(token);
        if (response.status === 200) {
          noteDispatch({ type: "INITIAL_NOTE", payload: response.data.notes });
        }
      } catch (e) {
        console.error("error", e);
      }
    })();
  }, [token]);

  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
