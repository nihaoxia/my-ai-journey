import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: Props) {
  const [text, setText] = useState("");

  function handleSubmit() {
    const trimmed = text.trim();
    if (trimmed === "") return;
    onAdd(trimmed);
    setText("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="输入新的待办事项..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-400
                   placeholder-gray-400 text-gray-700"
      />
      <button
        onClick={handleSubmit}
        className="px-5 py-2 bg-blue-500 text-white rounded-lg
                   hover:bg-blue-600 active:bg-blue-700
                   transition-colors cursor-pointer"
      >
        添加
      </button>
    </div>
  );
}
