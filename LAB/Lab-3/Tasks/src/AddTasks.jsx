import { useState } from "react";

function AddTasks({ addTasktoArray }) {
    const [input, setInput] = useState("");

    function handleInput() {
        if (input.trim() === "") return;
        addTasktoArray(input);
        setInput("");
    }

    return (
        <div className="add-task-form">
            <input
                className="task-input"
                type="text"
                placeholder="Enter your task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleInput()}
            />
            <button className="btn btn-add" onClick={handleInput}>+ Add</button>
        </div>
    );
}

export default AddTasks;