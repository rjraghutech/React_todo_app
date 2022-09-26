import React, { useState } from "react";

export default function Todo() {
    const [task, setTask] = useState([]);
    const [items, setItems] = useState("");
    //  const [todoedit,setEdit]=useState(null)
    //  const [todosave,setSave]=useState("")
    const handleadd = (e) => {

        setTask([...task, items]);
        setItems("")
    }


    return (
        <>
            <h1>My TODO Application.....😍😍😍</h1>
            <input
                type="text" className="input1"
                onChange={(e) => setItems(e.target.value)}
                defaultValue={task}
            />
            <button className="btn" onClick={handleadd}>Add task</button>
            <div className="container">
                <h2>My TODO Items...</h2>
                {task.map((tasks) => (
                    <div className="innercontainer" key={tasks}>
                        <input type="text" className="input" defaultValue={tasks} readOnly/>
                        <button className="btn btn2"
                            onClick={() => {
                                let deleteitems = task.filter((x) => x !== tasks);
                                setTask([...deleteitems])
                                // console.log(deleteitem);
                            }}>
                            Del Task
                        </button>
                        {<button className="btn btn1" 
                        onClick={()=>{
                            let innertext = document.querySelector('.input');
                            innertext.removeAttribute("readOnly");
                        }}>Edit Task</button>}
                    </div>

                ))}</div>
        </>
    );
}