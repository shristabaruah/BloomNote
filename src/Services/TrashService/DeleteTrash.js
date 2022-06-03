import axios from "axios";

const DeleteTrash = (noteId, token) => {
  return axios.delete(`/api/trash/delete/${noteId}`, {
    headers: { authorization: token },
  });
};
export { DeleteTrash };
