import React from "react";
import CardItem from "./CardItem";

export default function KanbanColumn() {
  return (
<div className="column-width h-100">
    
        <div className="bg-primary-subtle p-2 d-flex flex-column h-100">
          <div className="alert alert-dark" role="alert">
            Title
          </div>
    
          <div className="card-item-container overflow-y-auto">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
          <div className="alert alert-dark m-2" role="alert">
            Footer
          </div>
        </div>
    
</div>
  );
}
