import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from "./actionsTypes";

/*
    the actions creators that are functions that create actions, 
    very useful for example for making HTTP requests before 
    sending the payloads to the reducers.
*/

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
  console.log();

export const addTodo = text => ({
    type: ADD_TODO,
    id: uuidv4(),
    text
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})