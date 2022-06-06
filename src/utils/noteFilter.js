const notesByPriority = (notes, priority) => {
  if (priority) {
    return notes.filter((item) => item.notePriority === priority);
  }
  return notes;
};

const notesByDate = (notes, sortBy) => {
  if (sortBy === "Newest") {
    return [...notes].sort(
      (note1, note2) =>
        new Date(note2.date.toString()) - new Date(note1.date.toString())
    );
  }
  return notes;
};

const searchNotes = (notes, searchNote) => {
  if (searchNote.trim()) {
    return notes.filter(
      (item) =>
        item.noteTitle
          .toLowerCase()
          .includes(searchNote.trim().toLowerCase()) ||
        item.noteText.toLowerCase().includes(searchNote.trim().toLowerCase())
    );
  }
  return notes;
};
export { notesByPriority, notesByDate, searchNotes };
