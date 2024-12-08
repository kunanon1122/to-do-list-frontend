import React, { FC } from "react";

import Title from "@/components/Title";
import CardItem from "@/features/Board/CardItem";

import { ItemsCardDetail } from "@/@/constant/board";

interface CardColumnProps {
  title: string;
  step: string;
}

const CardColumn: FC<CardColumnProps> = ({ title, step }) => {
  const items: ItemsCardDetail[] = [
    {
      title: "Create tooltip",
      priority: "Hight",
      id: "ID-3225",
      step: "to-do",
      tag: 'Feature',
    },
    {
      title: "Fix bug at searchbox",
      priority: "Hight",
      id: "ID-2225",
      step: "in-progress",
      tag: 'Bug',
    },
    {
      title: "Fix bug at home page",
      priority: "Hight",
      id: "ID-2325",
      step: "to-do",
      tag: 'Bug',
    },
    { title: "Change text", priority: "Medium", id: "ID-2238", step: "to-do" },
    {
      title: "Change padding button",
      priority: "Low",
      id: "ID-4567",
      step: "to-do",
    },
  ];

  return (
    <div className="w-64 py-3 px-2 bg-core-black-200 rounded-md min-h-[calc(100vh-10rem)]">
      <Title level={5} ml className="mb-3">
        {title}
      </Title>
      {items.map((item, index) => {
        if (item.step !== step) return null;
        return (
          <div key={index}>
            <CardItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default CardColumn;
