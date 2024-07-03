import React from "react";

const Todo = () => {
    const todos = ['집에 가기', '치킨 먹기', '늦잠 자기'];

    return (
        <div className="bg-gray-100 flex items-center justify-center p-10 font-sans">
            <div className="bg-white rounded w-full max-w-md shadow-md p-5">
                <h1 className="text-xl font-bold mb-4">하고 싶어요</h1>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index} className="flex items-center justify-between mb-2">
                            <p>{todo}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;