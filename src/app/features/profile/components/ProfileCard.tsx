import React from "react";

import { Avatar } from "@/app/components/Avatar";

const ProfileCard = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-fit h-fit rounded-full border-[6px] border-black/10">
        <Avatar className="w-[34px] min-w-[34px] aspect-square rounded centered bg-black !text-primary font-500 text-sm">
          J
        </Avatar>
      </div>
      <div className="space-y-1">
        <p className="text-[20px] font-medium">Olivia Smith</p>
        <p className="text-xs">olivia@rebootmonkey.com</p>
        <p className="px-2 text-xs leading-[15.72px] py-[2px] rounded-full border border-gray-5 text-gray-4 w-fit flex items-center">
          Owner
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
