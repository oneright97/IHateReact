import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_CAT_IMAGE,
} from '../actions/todoActions';

const initialState = {
    todos: [],
    filter: 'ALL',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload, completed: false },
                ],
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => 
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case SET_CAT_IMAGE:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, catImageUrl: action.payload.catImageUrl }
                    : todo
                ),
            };
        default:
            return state;

    }
};

export default todoReducer;