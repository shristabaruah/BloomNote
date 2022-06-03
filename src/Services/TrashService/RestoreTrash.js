import axios from "axios";

const RestoreTrash = (noteId, token) => {
  return axios.post(
    `/api/trash/restore/${noteId}`,
    {},
    { headers: { authorization: token } }
  );
};
export { RestoreTrash };
