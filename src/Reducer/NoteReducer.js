import { v4 as uuid } from "uuid";

const NoteReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_NOTE":
      return { ...state, notes: action.payload };
    case "NEW_NOTE":
      return { ...state, notes: action.payload };
    case "UPDATE_NOTE":
      return { ...state, notes: action.payload };
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case "RESTORE_ARCHIVE":
      return {
        ...state,
        notes: action.payload.notes,
        archives: action.payload.archives,
      };
    case "ADD_TO_TRASH":
      return {
        ...state,
        notes: action.payload.notes,
        trash: action.payload.trash,
      };
    case "RESTORE_TRASH":
      return {
        ...state,
        notes: action.payload.notes,
        trash: action.payload.trash,
      };
    case "DELETE_TRASH":
      return { ...state, trash: action.payload };
    case "ADD_NEW_LABEL":
      return {...state ,label:[...state.label ,{id:uuid(),label:action.payload}]}
    case "DELETE_LABEL":
      return {
        ...state,
        label: state.label.filter((item) => item.id !== action.payload),
      };
    case "RENAME_LABEL":
      return {
        ...state,
        label: state.label.map((item) =>
          item.id === action.payload.id
            ? { id: item.id, label: action.payload.newLabel }
            : item
        ),
      };
    default:
      return state;
  }
};
export { NoteReducer };
