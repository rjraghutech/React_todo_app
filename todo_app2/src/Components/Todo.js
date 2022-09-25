import React from "react";
import TodoItem from "./TodoItem"

export default function Todo(props) {
    return (
        <div className="main-cont">
            <h1>List your TODO's here.....😍😍</h1>
            {props.todo.map((todo)=> {
                return <TodoItem todo={todo} onDelete={props.onDelete}/>
            })}
            
        </div>
    );
}