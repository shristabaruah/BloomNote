import { createContext, useContext, useReducer } from "react";
import { NoteReducer } from "../Reducer";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(NoteReducer, {
    notes: [],
    archives: [],
  });
  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
