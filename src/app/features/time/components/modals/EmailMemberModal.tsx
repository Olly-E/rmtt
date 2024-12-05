"use client";

import React from "react";
import clsx from "clsx";

import { TextAreaField } from "@/app/components/form/TextAreaField";
import { NewTimeEntryForm } from "../../types";
import { Modal } from "@/app/components/Modal";
import { Button } from "@/app/elements/Button";
import { useForm } from "react-hook-form";

interface AdjustStockModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  modalOpen: boolean;
}

const EmailMemberModal = ({
  setModalOpen,
  modalOpen,
  modalRef,
}: AdjustStockModalProps) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTimeEntryForm>();

  const onSubmit = (data: NewTimeEntryForm) => {
    console.log(data);
  };

  return (
    <Modal
      variant="middle"
      className={clsx(
        " w-[598px] max-h-[714px] mx-auto justify-center rounded-md bg-white-200"
      )}
      showDialog={modalOpen}
      closeModal={handleClose}
      modalRef={modalRef}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-[15px] mx-auto bg-white-state p-6 bg-white-2"
      >
        <div className="flex items-center gap-4 justify-between">
          <h2 className="text-[24px] font-normal">
            Send an email to Olivia Smith
          </h2>
          <Button variant="close" onClick={handleClose} />
        </div>
        <div>
          <TextAreaField
            placeholder=""
            registration={{ ...register("note") }}
            className="resize-none"
            hasError={errors.note}
            id="note"
            rows={6}
          />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Button type="submit" size="md">
            Start email
          </Button>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EmailMemberModal;
