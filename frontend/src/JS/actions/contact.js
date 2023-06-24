import { GET_CONTACTS, LOAD_CONTACT, FAIL_CONTACT, GET_CONTACT } from "../actionsTypes/contact";
// import axios & dispatch
import axios from 'axios';


// get all contact
export const get_contacts = ()=>async(dispatch)=>{
    dispatch({type: LOAD_CONTACT})
try{
   let result = await axios.get("/api/contact");
   dispatch({type: GET_CONTACTS, payload: result.data})//{msg, contact}
}
catch(error){
    dispatch({type: FAIL_CONTACT, payload: error.response })
}
}


// get one contact
export const getContact = (id) =>async (dispatch) => {
    try {
    let result = await axios.get(`/api/contact/${id}`)
    console.log(result)
    dispatch({type:GET_CONTACT, payload: result.data.contactTofind})
    }
    catch(error) {
        dispatch({type: FAIL_CONTACT, payload: error.response.data })
    }
}
// post contact
export const postContact = (newUser)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact', newUser)
        dispatch( get_contacts())  

    }
    catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response.data })

    }
}
// delete contact
export const deleteContact = (id) =>async(dispatch)=>{
try{
await axios.delete(`/api/contact/${id}`)
dispatch( get_contacts())  

}
catch (error) {
    dispatch({type: FAIL_CONTACT, payload: error.response.data })
}
}
// edit contact
export const editContact = (id, newContact) => async(dispatch)=> {
    try {
        await axios.put(`/api/contact/${id}`, newContact)
        dispatch(get_contacts())

    }
    catch (error){
        dispatch({type: FAIL_CONTACT, payload: error.response.data })
    }
}