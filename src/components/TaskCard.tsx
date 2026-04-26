import { useState } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import type { Id, Task } from "../types"

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
}

export default function TaskCard({task, deleteTask}: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <div id="task-card" className="
    bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover: ring-inset hover: ring-rose-500 cursor-grabs relative
    "
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