import axios from "axios";

const EditNote = (noteId, token, note) => {
  return axios.post(
    `/api/notes/${noteId}`,
    { note },
    { headers: { authorization: token } }
  );
};
export { EditNote };
