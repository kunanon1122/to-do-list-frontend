import React, { useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Title from "@/components/Title";

const HeaderBoard = () => {
  const menus = useMemo(
    () => [
      { text: "Home" },
      { text: "Board" },
      { text: "To-do list", isCurrent: true },
    ],
    []
  );

  return (
    <div>
      <Breadcrumb menus={menus} />
      <Title level={1} className="mt-1">Dev Sprint 57</Title>
    </div>
  );
};

export default HeaderBoard;
