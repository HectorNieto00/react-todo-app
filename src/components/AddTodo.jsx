import React, {useState} from "react";
import './AddTodo.css';

function AddTodo({addTodo}) {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    };

    return(
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input 
                type="text"
                placeholder="Add a new ToDo"
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;