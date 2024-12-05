import React from "react";
import clsx from "clsx";

import { TextAreaField } from "@/app/components/form/TextAreaField";
import { SelectField } from "@/app/components/form/SelectField";
import { InputField } from "@/app/components/form/InputField";
import { Control, useForm } from "react-hook-form";
import { NewTimeEntryForm } from "../../types";
import { Modal } from "@/app/components/Modal";
import { Button } from "@/app/elements/Button";

interface AdjustStockModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  modalOpen: boolean;
}

const NewTimeEntryModal = ({
  setModalOpen,
  modalOpen,
  modalRef,
}: AdjustStockModalProps) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  const {
    control,
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
        <div className="flex items-center gap-4 justify-between mb-5">
          <h2 className="text-[24px] font-normal">
            New time entry for 29, friday Nov
          </h2>
          <Button variant="close" onClick={handleClose} />
        </div>

        <div className="">
          <InputField
            registration={{ ...register("title") }}
            hasError={errors.title}
            className=""
            isRequired
            label="Project / Task"
            placeholder="Project name"
          />
        </div>
        <div className="">
          <SelectField
            arr={[{ name: "Design", id: "1" }]}
            control={control as unknown as Control}
            name="role"
            hasError={errors.category}
            className="mt-2"
            isRequired
            placeholder=""
            defaultValue={{ name: "Design", id: "1" }}
          />
        </div>
        <div>
          <TextAreaField
            placeholder="Notes (Optional)"
            registration={{ ...register("note") }}
            className="resize-none"
            hasError={errors.note}
            id="note"
            rows={1}
          />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Button type="submit" size="md">
            Start Timer
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

export default NewTimeEntryModal;
