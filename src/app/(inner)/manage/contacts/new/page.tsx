"use client";

import { SelectFieldWithInput } from "@/app/components/form/SelectFieldWithInput";
import { InputField } from "@/app/components/form/InputField";
import { Button } from "@/app/elements/Button";
import {
  addContactSchema,
  AddContactSchemaType,
} from "@/app/features/manage/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Control, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { InputFieldPhoneNo } from "@/app/components/form/InputFieldPhoneNo";
import { useAllClients } from "@/app/features/manage/api/useAllClients";
import { useAddContacts } from "@/app/features/manage/api/useAddContact";
import { AddContactsPayload } from "@/app/features/manage/types";

interface PageProps {
  searchParams: {
    id?: string;
  };
}

const AddNewContacts = (props: PageProps) => {
  const router = useRouter();

  const { id } = props.searchParams;

  const { mutate, isPending: addContactIsPending } = useAddContacts();
  const { data, isPending: clientDataIsPending } = useAllClients({
    page: 1,
    limit: 50,
    search: "",
  });
  const clientDataOptions = data?.results || [];

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddContactSchemaType>({
    resolver: zodResolver(addContactSchema(id)),
    defaultValues: {
      client: !id ? { name: "", id: "" } : undefined,
    },
  });

  const onSubmit = (data: AddContactSchemaType) => {
    const payload: AddContactsPayload = {
      email: data.email || "",
      fax_number: data.fax_number || "",
      first_name: data.first_name,
      last_name: data.last_name,
      mobile_phone_number: data.mobile_phone_number || "",
      office_phone_number: data.office_phone_number || "",
      title: data.title || "",
      client: data?.client?.id || id || "",
    };

    mutate(payload, {
      onSuccess: () => {
        reset();
        router.push("/manage/clients");
      },
    });
  };

  const goToPrevPage = () => {
    router.back();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[736px] mx-auto pt-10"
      >
        <h1 className="text-[32px] font-medium leading-none">New contact</h1>
        <p className="text-sm mt-2 pb-6 border-b">
          No email is sent when adding a contact. The email address is captured
          for your own reference and for the convenience of sending invoices to
          the client directly.
        </p>
        {!id && (
          <div className="flex w-full items-center gap-6 mt-4">
            <label
              htmlFor="client"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Client
            </label>

            <div className="flex items-center gap-4 w-full">
              <SelectFieldWithInput
                hasError={errors.client}
                name="client"
                dataLoading={clientDataIsPending}
                arr={clientDataOptions}
                className="mt-[6px] !w-full"
                placeholder=""
                control={control as unknown as Control}
              />
            </div>
          </div>
        )}
        <div className="mt-4 flex w-full items-center gap-6">
          <label
            htmlFor="firstName"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
          >
            First name
          </label>
          <InputField
            hasError={errors.first_name}
            registration={{ ...register("first_name") }}
            className="mt-[6px] !w-full"
            isRequired
            placeholder=""
          />
        </div>
        <div className="mt-4 flex w-full items-center gap-6">
          <label
            htmlFor="lastName"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
          >
            Last name
          </label>
          <InputField
            hasError={errors.last_name}
            registration={{ ...register("last_name") }}
            className="mt-[6px] !w-full"
            isRequired
            placeholder=""
          />
        </div>
        <div className="mt-4 flex w-full items-center gap-6">
          <label
            htmlFor="email"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
          >
            Email
          </label>
          <InputField
            hasError={errors.email}
            registration={{ ...register("email") }}
            className="mt-[6px] !w-full"
            placeholder=""
            isRequired={false}
          />
        </div>
        <div className="mt-4 flex w-full items-center gap-6">
          <label
            htmlFor="job"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
          >
            Title
          </label>
          <InputField
            hasError={errors.title}
            registration={{ ...register("title") }}
            className="mt-[6px] !w-full"
            placeholder=""
          />
        </div>
        <div className="mt-4 flex w-full items-center gap-6">
          <label
            htmlFor="phone"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
          >
            Office number
          </label>
          <InputFieldPhoneNo
            hasError={errors.office_phone_number}
            control={control as unknown as Control}
            name="office_phone_number"
            className="mt-[6px] !w-full relative"
          />
        </div>
        <div className="mt-4 flex w-full items-center gap-6">
          <label
            htmlFor="phone"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
          >
            Mobile number
          </label>
          <InputFieldPhoneNo
            hasError={errors.mobile_phone_number}
            control={control as unknown as Control}
            name="mobile_phone_number"
            className="mt-[6px] !w-full relative"
          />
        </div>
        <div className="mt-4 flex w-full items-center gap-6">
          <label
            htmlFor="phone"
            className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
          >
            Fax number
          </label>
          <InputField
            hasError={errors.fax_number}
            registration={{ ...register("fax_number") }}
            className="mt-[6px] !w-full"
            placeholder=""
          />
        </div>
        <div className="flex items-center mt-8 justify-end gap-2">
          <Button
            isLoading={addContactIsPending}
            disabled={addContactIsPending}
            type="submit"
            size="md"
          >
            {addContactIsPending ? "Adding contact..." : "Add contact"}
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
    </div>
  );
};

export default AddNewContacts;
