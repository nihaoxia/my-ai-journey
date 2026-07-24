import type { Task } from "../types/task";

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ task, onToggle, onDelete }: Props) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm">
      {/* 完成状态复选框 */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 text-blue-500 rounded border-gray-300
                   focus:ring-blue-400 cursor-pointer"
      />

      {/* 待办文字 */}
      <span
        className={
          task.completed
            ? "flex-1 text-gray-400 line-through"
            : "flex-1 text-gray-800"
        }
      >
        {task.text}
      </span>

      {/* 删除按钮 */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-500 transition-colors
                   cursor-pointer text-lg leading-none px-1"
      >
        ✕
      </button>
    </div>
  );
}
