import { useState } from "react";

export default function TodoItem({ task, markDone, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);

  function saveEdit() {
    if (inputText.trim() === "") return;
    updateTask(task.id, inputText);   // ✅ renamed
    setIsEditing(false);
  }

  return (
    <li
      className="flex justify-between items-center 
                 bg-white/30 backdrop-blur-lg
                 p-4 rounded-xl border border-white/40 
                 shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                 mb-3"
    >
      
      <div className="flex items-center gap-3 w-full">
        
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => markDone(task.id)}
          className="w-5 h-5 accent-blue-600"
        />

        {/* Input */}
        {isEditing ? (
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-3 py-2 rounded-lg 
                       bg-white/50 backdrop-blur-md
                       border border-white/70 
                       outline-none focus:ring-2 focus:ring-blue-300"
          />
        ) : (
          <span
            className={`text-gray-800 font-medium ${
              task.completed ? "line-through opacity-60" : ""
            }`}
          >
            {task.text}
          </span>
        )}
      </div>

     
      <div className="flex items-center gap-3 ml-4">
        {isEditing ? (
          <button
            onClick={saveEdit}
            className="text-green-700 font-semibold hover:opacity-80"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 font-semibold hover:opacity-80"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 text-red-600 font-semibold hover:bg-red-100 rounded transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
