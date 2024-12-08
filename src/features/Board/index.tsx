import React from "react";

import CardColumn from "@/features/Board/CardColumn";

const Board = () => {
  const boardColumns = [
    { title: "To Do", step: "to-do" },
    { title: "In Progress", step: "in-progress" },
  ];

  return (
    <div className="flex gap-3 mt-3 overflow-x-auto">
      {boardColumns.map((boardColumn, index) => (
        <div key={index}>
          <CardColumn title={boardColumn.title} step={boardColumn.step} />
        </div>
      ))}
    </div>
  );
};

export default Board;
