import React from "react";
import CardItem from "./CardItem";

export default function KanbanColumn({ cardCount }) {
  return (
    <div className="column-width single-column h-100">
      <div className="rounded border border-danger bg-success-subtle p-2 d-flex flex-column main-column">
        <div className="alert alert-dark" role="alert">
          Title
        </div>

        <div className="card-item-container overflow-y-auto">
          {Array.from({ length: cardCount }).map((_, i) => (
            <CardItem key={i} />
          ))}
        </div>
        
        <div className="alert alert-dark m-2" role="alert">
          Footer
        </div>
      </div>
    </div>
  );
}
