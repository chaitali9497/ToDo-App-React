import { useState, useEffect } from "react";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import bg from "./assets/bg.jpg";
import Footer from "./Components/Footer"; 

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAdd() {
    if (input.trim() === "") {
    setError("Please write a task");
    return;
  }
    
     setError("");
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  }

  function markDone(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  
  function updateTask(id, newText) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
     <div
    className="min-h-screen bg-cover bg-center bg-no-repeat relative p-8"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="w-full flex justify-center mb-8">
      <Header />
    </div>

    <div className="flex justify-center">
      <div className="backdrop-blur-xl bg-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                      border border-white/40 p-6 w-full max-w-xl rounded-2xl">

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 
                       rounded-xl 
                       bg-white/40 
                       backdrop-blur-lg 
                       border border-white/50 
                       text-gray-800 
                       placeholder-gray-600
                       shadow-inner 
                       focus:outline-none 
                       focus:ring-2 focus:ring-blue-300"
          />

          <button
            onClick={handleAdd}
            className="px-6 py-2 
                       rounded-xl 
                       font-semibold 
                       bg-linear-to-r from-blue-500 to-indigo-600
                       text-white 
                       shadow-lg 
                       hover:opacity-90 
                       active:scale-95 
                       transition-all"
          >
            Add
          </button>
        </div>

        
        {error && (
          <p className="text-red-600 text-md mt-1 pl-1 flex items-center justify-center">
            {error}
          </p>
        )}
        
          <TodoList
            tasks={tasks}
            markDone={markDone}
            updateTask={updateTask}   
            deleteTask={deleteTask}
          />
        </div>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default App;
