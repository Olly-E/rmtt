import FormCheckbox from "@/app/components/form/FormCheckbox";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { Control } from "react-hook-form";

interface TaskProps {
  id: string;
  name: string;
  rate: string;
  isBillable: boolean;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
}
export const TaskCard = ({
  id,
  name,
  rate,
  register,
  control,
  isBillable,
}: TaskProps) => {
  console.log(isBillable);
  return (
    <div className="flex items-center justify-between mt-2 px-6 border border-black/5 h-[54px] rounded-[10px]">
      <div className="flex items-center gap-4">
        <FormCheckbox
          id={id}
          name={name}
          registration={{ ...register(name) }}
          control={control}
        />
        <div className="flex items-center gap-2">
          <p className="font-medium">{name}</p>
          {isBillable && (
            <p className="px-2 py-[2px] rounded-full text-xs bg-gray-6">
              Billable
            </p>
          )}
        </div>
      </div>
      <p>{rate}</p>
    </div>
  );
};
