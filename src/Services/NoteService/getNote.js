import axios from "axios"

const GetNote = (token)=>{
    return axios.get('/api/notes',{headers:{authorization :token}})
};

export { GetNote };