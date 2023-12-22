import React from "react";
import KanbanColumn from "./KanbanColumn";

export default function Kanban() {
  return (
    <div className=" d-flex gap-3 ms-3 bg-danger overflow-x-auto kanbancolumn">
        <KanbanColumn/>
        <KanbanColumn/>
        <KanbanColumn/> 
    </div>
  );
}
