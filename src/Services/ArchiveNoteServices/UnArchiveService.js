import axios from "axios";

const UnarchiveNote = (noteId, token) => {
  return axios.post(
    `/api/archives/restore/${noteId}`,
    {},
    { headers: { authorization: token } }
  );
};
export { UnarchiveNote };
