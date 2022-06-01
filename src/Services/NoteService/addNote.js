import axios from "axios"

const AddNote = (note , token)=>{
    return axios.post('/api/notes',{note},{headers:{authorization:token}})
};

export { AddNote }