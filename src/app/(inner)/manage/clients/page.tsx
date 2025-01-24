"use client";
import React from "react";
import clsx from "clsx";

import { useAllContacts } from "@/app/features/manage/api/useAllContacts";
import { useAllClients } from "@/app/features/manage/api/useAllClients";
import { FullPageLoader } from "@/app/components/FullPageLoader";
import { DropDown } from "@/app/components/DropDownOpt";
import { Button } from "@/app/elements/Button";

const ClientPage = () => {
  const { data, isPending: allClientPending } = useAllClients({
    page: 1,
    limit: 50,
    search: "",
  });

  const { data: allContactData, isPending } = useAllContacts({
    page: 1,
    limit: 50,
    search: "",
    clientId: "",
  });

  console.log(allContactData);

  const clientData = data?.results || [];

  const DROPDOWN_OPTIONS = [
    {
      name: "Import Client from CSV",
      id: "import-client-csv",
      action: () => {},
    },
    {
      name: "Import Contacts from CSV",
      id: "import-contacts-csv",
      action: () => {},
    },
    {
      name: "Export Client to CSV",
      id: "export-client-csv",
      action: () => {},
    },
    {
      name: "Export Contacts to CSV",
      id: "export-contacts-csv",
      action: () => {},
    },
  ];

  return (
    <div className="container">
      <div className="w-[743px] mx-auto mt-10">
        <h1 className="text-[32px] leading-[32px] font-medium">Clients</h1>
        <div className="flex items-center gap-4 pb-4 mt-4">
          <Button size="md" as="link" href="/manage/clients/new">
            + New Client
          </Button>
          <Button
            size="md"
            as="link"
            href="/manage/contacts/new"
            variant="outline"
          >
            + Add Contact
          </Button>
          <DropDown text="Import/Export" options={DROPDOWN_OPTIONS} />
        </div>

        {isPending ? (
          <div>
            <FullPageLoader height="h-[50vh]" />
          </div>
        ) : (
          <div className="mt-2">
            {clientData?.map((contact, index) => (
              <div key={contact.id} className={clsx("", index > 0 && "mt-8")}>
                <div className="flex items-center h-[58px] w-full justify-between bg-gray-7 px-5 rounded-[10px] border border-black/5">
                  <div className="flex items-center gap-4">
                    <Button
                      as="link"
                      href="/manage/clients/new?id=1"
                      size="sm"
                      variant="outline"
                      className="border border-gray-6"
                    >
                      Edit
                    </Button>
                    <p className="font-medium capitalize">{contact.name}</p>
                  </div>
                  <Button
                    size="sm"
                    as="link"
                    href={`/manage/contacts/new?id=${contact.id}`}
                    variant="outline"
                    className="border border-gray-6 bg-white-2"
                  >
                    + Add Contact
                  </Button>
                </div>
                {/* <div className="pl-5">
                {contact.contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex items-center h-[58px] shadow-sm mt-2 w-full justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-black text-sm">{contact.name}</p>
                        <p className="w-fit text-black bg-gray-6 px-2 py-[2px] rounded-full text-xs">
                          {contact.job}
                        </p>
                      </div>
                      <p className="text-xs text-gray-4 mt-1">
                        {contact.email} | {contact.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div> */}
              </div>
            ))}
          </div>
        )}
        {!allClientPending && clientData.length === 0 && (
          <div className="mt-10">
            <p className="text-gray-4 text-center">
              No clients found. Click on the + New Client button to add a new
              client.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPage;
