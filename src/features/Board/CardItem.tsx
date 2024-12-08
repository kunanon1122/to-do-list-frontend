import React, { FC } from "react";

import SubTitle from "@/components/SubTitle";

import { ItemsCardDetail } from "@/@/constant/board";

interface CardItemProps {
  item: ItemsCardDetail;
}

const CardItem: FC<CardItemProps> = ({ item }) => {
  return (
    <div className="w-full flex flex-col justify-between bg-core-black-400 rounded-sm mb-1 min-h-24 px-2 py-3">
      <SubTitle level={5}>{item.title}</SubTitle>

      <div>
        {item.tag && (
          <div className="w-fit p-0.5 bg-core-blue-100 text-core-blue-200 rounded-sm mb-1">
            <SubTitle level={6} bold>
              {item.tag}
            </SubTitle>
          </div>
        )}
        <div className="flex justify-between">
          <SubTitle level={6}>{item.id}</SubTitle>
          <SubTitle level={6}>{item.priority}</SubTitle>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
