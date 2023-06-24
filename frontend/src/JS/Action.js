import axios from "axios"
import { toast } from "react-toastify"
import Updateuser from "../components/UpdateUser"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./actionsTypes/actionsTypes"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const geUserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
    
}

export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}
export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
export const updateUser=()=>{
    return{
        type:UPDATE_USER
    }
}
export const getUserObj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}



export const FetchUserList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:5001/users').then(res=>{
            const userlist=res.data;
            dispatch(geUserList(userlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const Removeuser=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('http://localhost:5001/users/'+code).then(res=>{
            dispatch(deleteUser());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionAddUser=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.post('http://localhost:5001/users',data).then(res=>{
        
            dispatch(addUser());
            toast.success('User Added successfully.')
            console.log(data)
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionUpdateUser=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.patch('http://localhost:5001/users/'+code,data).then(res=>{
            dispatch(updateUser());
            toast.success('User Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
export const FetchUserObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('http://localhost:5001/users/'+code).then(res=>{
            const userlist=res.data;
            console.log(userlist)
            dispatch(getUserObj(userlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}