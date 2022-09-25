import React from "react";
import Todo from "./Todo";

export default function TodoItem({ todo, onDelete}) {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
            <button className="btn-del" onClick={onDelete}>Delete</button>
        </div>
    );
}