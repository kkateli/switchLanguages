import {combineReducers} from "redux";
const list = {
    name:"kate",
    age:28,
    list:null
}
const reducer = (state=list, action)=>{
    if(action.type==="ADD_LIST"){
        return {
            ...state,
            name:action.payload
        }
       
    
}
else if(action.type==="SHOW_LIST"){
    return{
        ...state,
        list:action.payload
    }
}
            
return state;
}
export default combineReducers({
    myList:reducer
});
