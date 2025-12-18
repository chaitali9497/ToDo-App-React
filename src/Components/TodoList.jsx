import TodoItem from "./TodoItem";

function TodoList({ tasks, markDone, updateTask, deleteTask }) {
  return (
    <ul className="space-y-3">

      {tasks.length === 0 && (
        <p className="text-gray-500 text-center">No tasks yet...</p>
      )}

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          markDone={markDone}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
