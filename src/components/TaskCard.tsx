import { useState } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import type { Id, Task } from "../types"

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

export default function TaskCard({task, deleteTask, updateTask}: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  }

  if (editMode) {
    return (
<div id="task-card" className="
    bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover: ring-inset hover: ring-rose-500 cursor-grab relative
    "
    >
      <textarea className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none"
      value={task.content}
      autoFocus
      placeholder="Task content here"
      onBlur={toggleEditMode}
      onKeyDown={(e)=>{
        if (e.key === "Enter") {
          toggleEditMode();
        }
      }}
      onChange={(e) => updateTask(task.id, e.target.value)}
      ></textarea>
    </div>
    )
  }

  return (
    <div id="task-card" className="
    bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover: ring-inset hover: ring-rose-500 cursor-grab relative
    "
    onClick={toggleEditMode}
    onMouseEnter={()=>{
      setMouseIsOver(true);
    }}
    onMouseLeave={()=>{
      setMouseIsOver(false);
    }}
    >
      {task.content}
     {mouseIsOver && 
     <button className="absolute right-4 top-1/2-translate-y-1/2 bg-columnBackgroundColor p-2 rounded stroke-gray-500
        hover:stroke-white" 
     onClick={()=>deleteTask(task.id)}
     >
        <DeleteIcon />
      </button>}
    </div>
  )
}