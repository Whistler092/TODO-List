

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/actionsTypes";

let INITIAL_DATA = []

let savedData = localStorage.getItem("data")
if (savedData) {
    INITIAL_DATA = JSON.parse(savedData);
}

const persistList = data => {
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data))
    return data;
}

const TodoReducer = (state = INITIAL_DATA, action) => {
    console.log(action.type, action)
    switch (action.type) {
        case ADD_TODO:
            let data = [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            return persistList(data);
        case TOGGLE_TODO:
            let dataToggle = state.map(todo => (todo.id === action.id)
                ? { ...todo, completed: !todo.completed } : todo)

            return persistList(dataToggle)
        case REMOVE_TODO:
            return persistList(state.filter(todo => todo.id !== action.id));
        default:
            return state
    }
}

export default TodoReducer