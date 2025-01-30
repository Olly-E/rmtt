import React from "react";
import clsx from "clsx";

import { SelectFieldWithInput } from "@/app/components/form/SelectFieldWithInput";
import { createTimeSchema, CreateTimeForm } from "../../utils/validationSchema";
import { useProjectTasks } from "@/app/features/manage/api/useProjectTasks";
import { useAllProjects } from "@/app/features/project/api/useAllProjects";
import { TextAreaField } from "@/app/components/form/TextAreaField";
import { SelectField } from "@/app/components/form/SelectField";
import { useCreateTimeLog } from "../../api/useCreateTimeLogs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { CreateTimePayload } from "../../types";
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
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTimeForm>({
    resolver: zodResolver(createTimeSchema),
  });

  const projectId = watch("projectTitle")?.id;
  console.log(projectId);
  //the task in the project will be fetched by the project id, there's no endpoint for that yet so we're fetching from all id pending that
  const { data: taskArrayOpt, isPending: taskDataPending } = useProjectTasks();
  const { mutate, isPending: createTimePending } = useCreateTimeLog();

  const { data: projectData, isPending: projectIsPending } = useAllProjects({
    limit: 50,
    page: 1,
    search: "",
  });

  const projectArrayOpt = projectData?.results || [];

  const handleClose = () => {
    setModalOpen(false);
  };

  const onSubmit = (data: CreateTimeForm) => {
    const payload: CreateTimePayload = {
      project_id: data.projectTitle.id,
      start_time: data.startTime || "00:00",
      task_id: data.task.id,
    };

    mutate(payload, {
      onSuccess: () => {
        handleClose();
      },
    });
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
          <SelectFieldWithInput
            hasError={errors.projectTitle}
            name="projectTitle"
            arr={projectArrayOpt}
            dataLoading={projectIsPending}
            className="mt-[6px] !w-full"
            placeholder="Project title"
            control={control as unknown as Control}
          />
        </div>
        <div className="">
          <SelectField
            arr={taskArrayOpt || []}
            isLoading={taskDataPending}
            control={control as unknown as Control}
            name="task"
            hasError={errors.task}
            className="mt-2"
            isRequired
            placeholder=""
            defaultValue={{ name: "", id: "" }}
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
          <Button
            isLoading={createTimePending}
            disabled={createTimePending}
            type="submit"
            size="md"
          >
            {createTimePending ? "Initializing...." : "Start Timer"}
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
