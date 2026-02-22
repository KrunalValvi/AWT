import { useState } from "react";

function TaskLists({ tasks, deleteTask, updateTask }) {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    function handleEdit(task) {
        setEditId(task.id);
        setEditText(task.text);
    }

    function handleUpdate(id) {
        if (editText.trim() === "") return;
        updateTask(id, editText);
        setEditId(null);
        setEditText("");
    }

    return (
        <ul className="task-list">
            {tasks.length === 0 && (
                <p className="empty-msg">No tasks yet. Add one above!</p>
            )}
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    {editId === task.id ? (
                        <div className="task-edit-row">
                            <input
                                className="task-input"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleUpdate(task.id)}
                                autoFocus
                            />
                            <button className="btn btn-save" onClick={() => handleUpdate(task.id)}>Save</button>
                        </div>
                    ) : (
                        <div className="task-row">
                            <span className="task-text">{task.text}</span>
                            <div className="task-actions">
                                <button className="btn btn-edit" onClick={() => handleEdit(task)}>Edit</button>
                                <button className="btn btn-delete" onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TaskLists;