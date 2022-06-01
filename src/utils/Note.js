import { toast } from "react-toastify";
import { AddNote, ArchiveNote, EditNote } from "../Services";

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

const EditNoteService = async (noteId ,token , note ,noteDispatch)=>{
  try{
    const response = await EditNote(noteId,token,note);
    if(response.status === 201){
      noteDispatch({type:"UPDATE_NOTE" ,payload:response.data.notes})
      toast.success("Edited note")
    }
  }catch(e){
    console.error("error:",e);
  }
}

const ArchiveNoteService = async (noteId , token ,note , noteDispatch)=>{
  try{
    const response = await ArchiveNote(noteId,token,note);
    if(response.status === 201){
      noteDispatch({type:"ADD_TO_ARCHIVE",payload:response.data})
      toast.success("Added to Archive")
    }
  }catch(e){
    console.error("error:",e)
  }
}

export { addNoteService ,EditNoteService ,ArchiveNoteService};