import axios from "axios";

const url='http://localhost:3003/user'

export const getuser=async(id)=>{
    id=id|| ''
    return await axios.get(`${url}/${id}`)
}

export const adduser= async(user)=>{

    return await axios.post(url,user)
}
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
export const editUser=async(id,user)=>{
    return await axios.put(`${url}/${id}`,user)
}