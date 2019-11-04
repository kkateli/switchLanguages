import axios from "axios";
export const addList = list => {
  return {
    type: "ADD_LIST",
    payload: list
  };
};

export const lists = list => {
  return {
    type: "SHOW_LIST",
    payload: list
  };
};

export const getPost = () => {
  return async dispatch => {
   await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(response) {
        // handle success
        dispatch(lists(response.data[0].title));
       
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
};
