import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {addTodo } from '../redux/actions/todoActions';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="mb-4">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="하고 싶은 걸 적어라."
                />
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default AddTodo;