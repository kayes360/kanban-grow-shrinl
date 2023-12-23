import React from "react";
import KanbanColumn from "./KanbanColumn";

export default function Kanban() {
  return (
    <div className="d-flex gap-3 mx-3 overflow-x-auto kanbancolumnwrapper">
      <KanbanColumn cardCount={5}/>
      <KanbanColumn cardCount={4}/>
      <KanbanColumn cardCount={3}/>
      <KanbanColumn cardCount={2}/>
    </div>
  );
}
