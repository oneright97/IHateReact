import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_CAT_IMAGE = 'SET_CAT_IMAGE';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
});

export const toggleTodo = (id) => async (dispatch) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const catImageUrl = response.data[0].url;
  
    dispatch({ type: SET_CAT_IMAGE, payload: { id, catImageUrl } });
  };