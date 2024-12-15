import React, { FC, useState } from "react";

import Title from "@/components/Title";
import Button from "@/components/Button";
import Menu from "@/components/Menu";
import Modal from "@/components/Modal";

import CardItem from "@/features/Board/CardItem";

import { ItemsCardDetail } from "@/constant/board";
import { useTranslation } from "react-i18next";

interface CardColumnProps {
  id: number;
  title: string;
  step: string;
}

const CardColumn: FC<CardColumnProps> = ({ id, title, step }) => {
  const items: ItemsCardDetail[] = [
    {
      title: "Create tooltip",
      priority: "Hight",
      id: "ID-3225",
      step: "to-do",
      tag: "Feature",
      create_date: "",
      update_date: "",
    },
    {
      title: "Fix bug at searchbox",
      priority: "Hight",
      id: "ID-2225",
      step: "in-progress",
      tag: "Bug",
      create_date: "",
      update_date: "",
    },
    {
      title: "Fix bug at home page",
      priority: "Hight",
      id: "ID-2325",
      step: "to-do",
      tag: "Bug",
      create_date: "",
      update_date: "",
    },
    {
      title: "Change text",
      priority: "Medium",
      id: "ID-2238",
      step: "to-do",
      create_date: "",
      update_date: "",
    },
    {
      title: "Change padding button",
      priority: "Low",
      id: "ID-4567",
      step: "to-do",
      create_date: "",
      update_date: "",
    },
  ];

  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("card_column");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleCloseMenu = () => setAnchorEl(null);
  const handleCloseModal = () => setIsOpenModal(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenModal = () => {
    handleCloseMenu();
    setIsOpenModal(true);
  };

  const handleDelete = () => {
    console.log("ind--", id);

    handleCloseModal();
  };

  return (
    <div className="w-64 py-3 px-2 bg-core-black-200 rounded-md min-h-[calc(100vh-10rem)]">
      <div className="flex justify-between items-center mb-3">
        <Title level={5} ml className="">
          {title}
        </Title>
        <div>
          <Button
            className="w-8 h-8"
            theme="invisible"
            onClick={handleOpenMenu}
          >
            <span className="mb-2 text-lg font-bold">...</span>
          </Button>

          <Menu
            anchorEl={anchorEl}
            onClose={handleCloseMenu}
            menuList={[
              { key: "1", label: t("menu.delete"), onClick: handleOpenModal },
            ]}
          />
        </div>
      </div>
      {items.map((item, index) => {
        if (item.step !== step) return null;
        return (
          <div key={index}>
            <CardItem item={item} />
          </div>
        );
      })}

      <Modal open={isOpenModal}>
        <div>
          <Title level={4} className="mb-4">
            {t("modal.delete.title")}
          </Title>
          <div className="flex justify-end">
            <Button
              className="w-20 h-8 mr-2"
              theme="primary"
              onClick={handleCloseModal}
            >
              {tCommon("cancel")}
            </Button>
            <Button className="w-20 h-8" theme="danger" onClick={handleDelete}>
              {tCommon("delete")}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardColumn;
