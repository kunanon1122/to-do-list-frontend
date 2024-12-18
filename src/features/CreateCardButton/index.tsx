import React, { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";

import Button from "@/components/Button";
import Input from "@/components/Input";

import { usePostCreateBoardCardMutation } from "@/services/cardApi";

import { Translations } from "@/variables/API";

interface CreateCardButtonProps {
  stepCard: string;
  refetchCards: () => void;
}

interface FormCreateCard {
  title: string;
}

const CreateCardButton: FC<CreateCardButtonProps> = ({
  stepCard,
  refetchCards,
}) => {
  const { t } = useTranslation(Translations.cardItem);
  const { t: tCommon } = useTranslation(Translations.common);

  const divRef = useRef<HTMLDivElement>(null);

  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const [postCreateBoardCard] = usePostCreateBoardCardMutation();

  const handleOpenCreate = () => setIsOpenCreate(true);
  const handleCloseCreate = (resetForm: () => void) => {
    setIsOpenCreate(false);
    resetForm();
  };

  const handleSubmit = async (
    values: FormCreateCard,
    resetForm: () => void
  ) => {
    try {
      await postCreateBoardCard({
        title: values.title,
        step: stepCard,
      }).unwrap();

      refetchCards();
    } catch (error) {
      console.error("Failed to create card:", error);
    } finally {
      handleCloseCreate(resetForm);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values, resetForm);
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        handleCloseCreate(formik.resetForm);
      }
    };

    if (isOpenCreate) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenCreate, formik.resetForm]);

  return (
    <div>
      {isOpenCreate ? (
        <div ref={divRef} className="border rounded-sm p-2">
          <form onSubmit={formik.handleSubmit}>
            <Input
              className="w-full"
              name="title"
              id="title"
              autoFocus
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder={t("input.placeholder.title")}
            />

            <Button
              className="justify-self-end min-w-16"
              theme="blue"
              type="submit"
            >
              {tCommon("create")}
            </Button>
          </form>
        </div>
      ) : (
        <Button
          className="block w-full"
          theme="invisible"
          onClick={handleOpenCreate}
        >
          +
        </Button>
      )}
    </div>
  );
};

export default CreateCardButton;
