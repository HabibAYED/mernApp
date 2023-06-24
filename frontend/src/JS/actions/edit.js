import { TOGGLE_ADD, TOGGLE_EDIT } from "../actionsTypes/edit"


// toggle edit
export const toggleEdit=()=>
{
   return {
       type : TOGGLE_EDIT,
   } 
}
// toggle add
export const toggleAdd=()=>
{
   return {
       type : TOGGLE_ADD,
   } 
}