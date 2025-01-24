"use client";
import { CURRENCY_DATA_OPT, EMPTY_OPTION } from "@/app/utils/constants";
import { Control, useForm } from "react-hook-form";
import React from "react";

import {
  addClientSchema,
  AddClientType,
} from "@/app/features/manage/utils/validationSchema";
import { AddClientPayload } from "@/app/features/manage/types";
import { useAddClient } from "@/app/features/manage/api/useAddClient";
import { TextAreaField } from "@/app/components/form/TextAreaField";
import { SelectField } from "@/app/components/form/SelectField";
import { InputField } from "@/app/components/form/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/elements/Button";
import { useRouter } from "next/navigation";

interface PageProps {
  searchParams: {
    id?: string;
  };
}
const NewClientPage = (props: PageProps) => {
  const route = useRouter();
  const goToPrevPage = () => {
    route.back();
  };
  
  const { mutate, isPending } = useAddClient();

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AddClientType>({
    resolver: zodResolver(addClientSchema),
    defaultValues: { preferred_currency: EMPTY_OPTION },
  });

  const { id } = props.searchParams;
  console.log(id);

  const onSubmit = (values: AddClientType) => {
    const payload: AddClientPayload = {
      name: values.clientName,
      address: values.address,
      preferred_currency: values.preferred_currency.id,
    };
    mutate(payload, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[736px] mx-auto pt-10"
    >
      <h1 className="text-[32px] leading-[32px] font-medium">New Clients</h1>
      <p className="text-sm mt-2 pb-6 border-b">
        Once you’ve added a client, you can add projects and contacts.
      </p>
      <div className="flex w-full items-center gap-6 pt-4">
        <label
          htmlFor="clientName"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          Client name
        </label>
        <InputField
          hasError={errors.clientName}
          registration={{ ...register("clientName") }}
          className="mt-[6px] !w-full"
          isRequired
          placeholder=""
        />
      </div>
      <div className=" flex w-full items-start gap-6 pt-4">
        <label
          htmlFor="address"
          className="block text-sm text-black mt-5 min-w-[150px] whitespace-nowrap font-medium"
        >
          Address
        </label>
        <TextAreaField
          placeholder=""
          registration={{ ...register("address") }}
          className="resize-none"
          hasError={errors.address}
          id="address"
          rows={4}
        />
      </div>
      <div className=" flex w-full items-center gap-6 pt-4">
        <label
          htmlFor="preferred_currency"
          className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
        >
          Preferred Currency
        </label>
        <SelectField
          hasError={errors.preferred_currency}
          name="preferred_currency"
          arr={CURRENCY_DATA_OPT}
          className="mt-[6px] !w-full"
          control={control as unknown as Control}
        />
      </div>
      <div className="flex items-center mt-8 justify-end gap-2">
        <Button
          isLoading={isPending}
          disabled={isPending}
          type="submit"
          size="md"
        >
          {isPending ? "Saving" : "Save client"}
        </Button>
        <Button
          type="button"
          onClick={goToPrevPage}
          variant="outline"
          size="md"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default NewClientPage;
