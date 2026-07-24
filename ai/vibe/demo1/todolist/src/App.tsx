import { useState } from "react";
import type { Task } from "./types/task";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAdd(text: string) {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  }

  function handleToggle(id: number) {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function handleDelete(id: number) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function handleReorder(sourceIndex: number, destIndex: number) {
    setTasks((prev) => {
      const next = [...prev];
      const [moved] = next.splice(sourceIndex, 1);
      next.splice(destIndex, 0, moved);
      return next;
    });
  }

  return (
    <div className="max-w-lg mx-auto mt-12 px-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        📝 待办清单
      </h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onReorder={handleReorder}
      />
    </div>
  );
}
