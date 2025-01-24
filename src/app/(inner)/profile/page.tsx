import BasicInfoForm from "@/app/features/profile/components/BasicInfoForm";
import React from "react";

const BasicInfo = () => {
  return (
    <div>
      <h1 className="text-[32px] font-medium leading-none pb-6 border-b">
        Your basic info
      </h1>
      <div>
        <BasicInfoForm />
      </div>
    </div>
  );
};

export default BasicInfo;