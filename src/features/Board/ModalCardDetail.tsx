import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { useFormik } from "formik";

import { usePutUpdateDescriptionCardMutation } from "@/services/cardApi";
import { useGetCardDetailQuery } from "@/services/cardApi";

import Title from "@/components/Title";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Textarea from "@/components/Textarea";

import { Translations } from "@/variables/API";

import SubTitle from "@/components/SubTitle";

interface ModalCardDetailProps {
  isOpen: boolean;
  handleClose: () => void;
  id: number;
}

interface FormUpdateDetail {
  description: string;
}

const ModalCardDetail: React.FC<ModalCardDetailProps> = ({
  isOpen,
  handleClose,
  id,
}) => {
  const { t } = useTranslation(Translations.cardItem);
  const { t: tCommon } = useTranslation(Translations.common);

  const [updateDescriptionCard] = usePutUpdateDescriptionCardMutation();
  const { data, isError, refetch } = useGetCardDetailQuery(id, {
    skip: !isOpen,
  });

  const cardDetail = useMemo(() => data, [data]);

  const handleSubmit = async (values: FormUpdateDetail) => {
    try {
      await updateDescriptionCard({
        cardID: id,
        description: values.description,
      }).unwrap();
      refetch();
    } catch (error) {
      console.error("Failed to update description:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      description: cardDetail?.description || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  useEffect(() => {
    if (isOpen) {
      refetch();
    }
  }, [isOpen, refetch]);

  useEffect(() => {
    if (isError) {
      handleClose();
    }
  }, [handleClose, isError]);

  if (!cardDetail) return;

  return (
    <Modal open={isOpen}>
      <div className="flex justify-between">
        <Title level={2} className="mt-1">
          {cardDetail.title}
        </Title>
        <Button className="w-8 h-8 shrink-0 p-0" onClick={handleClose}>
          X
        </Button>
      </div>

      <Title level={4} className="mt-5">
        {t("modal.detail.description")}
      </Title>
      <form onSubmit={formik.handleSubmit}>
        <Textarea
          name="description"
          id="description"
          className="mt-1.5 min-h-56 max-h-[calc(70vh)]"
          onChange={formik.handleChange}
          placeholder={t("modal.detail.add_a_description")}
          value={formik.values.description}
        />
        <Button
          theme="blue"
          type="submit"
          className="w-full my-1"
          disabled={!formik.dirty}
        >
          {tCommon("update")}
        </Button>
      </form>

      <div className="grid md:flex justify-between mt-5">
        <SubTitle level={6} gray>
          {t("modal.detail.create_at")}:{" "}
          {format(new Date(cardDetail.create_date), "dd-MMM-yyyy HH:mm")}
        </SubTitle>
        <SubTitle level={6} gray>
          {t("modal.detail.update_at")}:{" "}
          {format(new Date(cardDetail.update_date), "dd-MMM-yyyy HH:mm")}
        </SubTitle>
      </div>
    </Modal>
  );
};

export default ModalCardDetail;
