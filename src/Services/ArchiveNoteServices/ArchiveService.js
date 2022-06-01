import axios from "axios";

const ArchiveNote = (noteId, token, note) => {
  return axios.post(
    `/api/notes/archives/${noteId}`,
    { note },
    { headers: { authorization: token } }
  );
};
export { ArchiveNote };
