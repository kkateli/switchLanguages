import {combineReducers} from "redux";
const list = {
    name:"kate",
    age:28
}
const reducer = (state=list, action)=>{
    if(action.type==="MY_LIST"){
        return {
            ...state,
            name:action.payload
        }
            
    
}
return state;
}
export default combineReducers({
    myList:reducer
});
