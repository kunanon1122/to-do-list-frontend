import React from "react";

import HeaderBoard from "@/features/HeaderBoard";
import Board from "@/features/Board";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] p-2 md:p-3">
      <HeaderBoard />
      <Board />
    </div>
  );
};

export default Home;
