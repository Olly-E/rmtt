"use client";

import React from "react";

import PendingApprovalTable from "@/app/features/time/components/PendingApprovalTable";
import { Button } from "@/app/elements/Button";
import EmailMemberModal from "@/app/features/time/components/modals/EmailMemberModal";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";

const TimeToBeApprovedDetails = () => {
  const {
    ref: emailMemberRef,
    isComponentVisible: isEmailMemberVisible,
    setIsComponentVisible: setIsEmailMemberVisible,
    handleClickOnDropDownButton: handleClickOnEmailMemberButton,
  } = useComponentVisible();

  return (
    <div className="container">
      <div className="max-h-[calc(100vh-186px)] overflow-y-auto">
        <div className="flex items-center gap-3">
          <Button
            as="link"
            href="/time/pending-approval"
            variant="back"
            className="rounded-md !bg-gray-7 !w-[40px] min-w-[40px] !h-[40px]"
          />
          <h1 className="text-[32px] font-medium">
            Approve Olivia’s timesheet for 02 – 08 Dec 2024
          </h1>
        </div>
        <div className="flex items-start justify-between mt-4">
          <div>
            <p className="text-gray-4 text-sm">Total hours</p>
            <p className="font-bold text-[24px] ">5:00</p>
          </div>
          <div className="text-sm">
            <p>Billable</p>
            <p>Non Billable</p>
          </div>
          <div className="text-sm">
            <p>4:30 - 60%</p>
            <p>3:50 - 40%</p>
          </div>
          <div>
            <p className="text-gray-4 text-sm">Expenses</p>
            <p className="font-bold text-[24px] ">₦0:00</p>
          </div>
        </div>
        <PendingApprovalTable />
      </div>
      <div className="flex items-center gap-4 justify-end mt-4">
        <Button size="md">Approve timesheet</Button>
        <Button
          onClick={handleClickOnEmailMemberButton}
          size="md"
          variant="outline"
        >
          Email Olivia Smith
        </Button>
      </div>
      <EmailMemberModal
        setModalOpen={setIsEmailMemberVisible}
        modalOpen={isEmailMemberVisible}
        modalRef={emailMemberRef}
      />
    </div>
  );
};

export default TimeToBeApprovedDetails;
