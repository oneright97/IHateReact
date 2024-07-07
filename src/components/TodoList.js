import React from 'react';
import AddTodo from './AddTodo';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="bg-gray-100 flex items-center justify-center p-10 font-sans">
      <div className="bg-white rounded w-full max-w-md shadow-md p-5">
        <h1 className="text-xl font-bold mb-4">하고 싶어요</h1>
        <AddTodo />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
