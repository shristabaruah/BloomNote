const NoteReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_NOTE":
      return { ...state, notes: action.payload };
    case "NEW_NOTE":
      return { ...state, notes: action.payload };
    case "UPDATE_NOTE":
      return { ...state, notes: action.payload };
    case "ADD_TO_ARCHIVE":
      return { ...state, notes: action.payload.notes, archives: action.payload.archives };
    default:
      return state;
  }
};
export { NoteReducer };
