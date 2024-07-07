import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center mb-4">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="mr-2 custom-checkbox"
      />
      {!todo.completed ? (
        <p>{todo.text}</p>
      ) : (
        <img src={todo.catImageUrl} alt="Random Cat" className="w-32 h-32" />
      )}
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="ml-20 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700"
      >
        안볼래
      </button>
    </li>
  );
};

export default TodoItem;
