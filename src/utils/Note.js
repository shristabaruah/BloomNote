import { toast } from "react-toastify";
import {
  AddNote,
  AddTrash,
  ArchiveNote,
  DeleteTrash,
  EditNote,
  RestoreTrash,
  UnarchiveNote,
} from "../Services";

const addNoteService = async (token, note, noteDispatch) => {
  try {
    const response = await AddNote(note, token);
    if (response.status === 201) {
      noteDispatch({ type: "NEW_NOTE", payload: response.data.notes });
      toast.success("Added Note");
    }
  } catch (e) {
    console.error("error:", e);
  }
};

const EditNoteService = async (noteId, token, note, noteDispatch) => {
  try {
    const response = await EditNote(noteId, token, note);
    if (response.status === 201) {
      noteDispatch({ type: "UPDATE_NOTE", payload: response.data.notes });
      toast.success("Edited note");
    }
  } catch (e) {
    console.error("error:", e);
  }
};

const ArchiveNoteService = async (noteId, token, note, noteDispatch) => {
  try {
    const response = await ArchiveNote(noteId, token, note);
    if (response.status === 201) {
      noteDispatch({ type: "ADD_TO_ARCHIVE", payload: response.data });
      toast.success("Added to Archive");
    }
  } catch (e) {
    console.error("error:", e);
  }
};

const RestoreFromArchive = async (noteId, token, noteDispatch) => {
  try {
    const response = await UnarchiveNote(noteId, token);
    if (response.status === 200) {
      noteDispatch({
        type: "RESTORE_ARCHIVE",
        payload: response.data,
      });
      toast.success("Restored from archive successfully!!");
    }
  } catch (e) {
    console.error("error", e);
  }
};

const AddTrashService = async (noteId, token, noteDispatch) => {
  try {
    const response = await AddTrash(noteId, token);
    if (response.status === 201) {
      noteDispatch({
        type: "ADD_TO_TRASH",
        payload: response.data,
      });
      toast.success("Added to Trash");
    }
  } catch (e) {
    console.error("error", e);
  }
};

const RestoreTrashService = async (noteId, token, noteDispatch) => {
  try {
    const response = await RestoreTrash(noteId, token);
    if (response.status === 200) {
      noteDispatch({
        type: "RESTORE_TRASH",
        payload: response.data,
      });
      toast.success("Restore from Trash sccessfully!!");
    }
  } catch (e) {
    console.error("error:", e);
  }
};

const DeleteTrashService = async (token, noteId, noteDispatch) => {
  try {
    const response = await DeleteTrash(noteId, token);
    if (response.status === 200) {
      noteDispatch({
        type: "DELETE_TRASH",
        payload: response.data.trash,
      });
      toast.success("Deleted from trash");
    }
  } catch (e) {
    console.error("error", e);
  }
};

export {
  addNoteService,
  EditNoteService,
  ArchiveNoteService,
  RestoreFromArchive,
  AddTrashService,
  RestoreTrashService,
  DeleteTrashService,
};
