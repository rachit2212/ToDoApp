import axios from 'axios';

export default function AddNewToDo(toDoItem) {
  var createToDoResponse = axios.post('http://localhost:1337/ToDo', {
    value: toDoItem.value
  });
  
  return (dispatch) => {
    createToDoResponse
      .then((response) => {
        dispatch({ type: 'FETCH_UPDATED_LIST', payload: response.data });
      })
  }
}
