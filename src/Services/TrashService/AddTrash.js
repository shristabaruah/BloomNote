import axios from "axios";

const AddTrash = (noteId, token) => {
  return axios.post(
    `/api/notes/trash/${noteId}`,
    {},
    { headers: { authorization: token } }
  );
};
export { AddTrash };
