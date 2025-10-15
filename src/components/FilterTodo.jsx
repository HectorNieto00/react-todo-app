import React from "react";
import './FilterTodo.css';

function FilterTodo({filter, setFilter}) {

    return (
        <div className="filter-todo">
            <button
                onClick={() => setFilter('all')}
            >
                All
            </button>
            <button
                onClick={() => setFilter('completed')}
            >
                Completed
            </button>
            <button
                onClick={() => setFilter('active')}
            >
                Active
            </button>
        </div>
    );
}

export default FilterTodo;