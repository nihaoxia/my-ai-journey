import type { DropResult } from "@hello-pangea/dnd";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import type { Task } from "../types/task";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onReorder: (sourceIndex: number, destIndex: number) => void;
}

export default function TodoList({
  tasks,
  onToggle,
  onDelete,
  onReorder,
}: Props) {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  function handleDragEnd(result: DropResult) {
    // 没有拖到有效目标区域，不做任何操作
    if (!result.destination) return;
    // 拖到同一个位置，不做任何操作
    if (result.source.index === result.destination.index) return;
    onReorder(result.source.index, result.destination.index);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todolist">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap-2"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={String(task.id)}
                index={index}
              >
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={
                      snapshot.isDragging
                        ? "opacity-80 scale-105 rotate-1 shadow-lg rounded-lg"
                        : ""
                    }
                  >
                    <TodoItem
                      task={task}
                      onToggle={onToggle}
                      onDelete={onDelete}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
