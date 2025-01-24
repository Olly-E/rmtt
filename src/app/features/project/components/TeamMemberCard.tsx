import { Avatar } from "@/app/components/Avatar";
import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import { X } from "lucide-react";
import React from "react";

interface TeamMemberCardProps {
  member: {
    id: string;
    firstName: string;
    lastName: string;
  };
  selectedTeam: string[];
  handleSelectTeam: (id: string) => void;
  handleRemoveTeam: (id: string) => void;
}

export const TeamMemberCard = ({
  member,
  selectedTeam,
  handleSelectTeam,
  handleRemoveTeam,
}: TeamMemberCardProps) => {
  const memberIsEmpty = !member?.firstName && !member?.lastName;
  return !memberIsEmpty ? (
    <div className="flex items-center justify-between border-b border-gray-6 py-3">
      <div className="flex items-center gap-6">
        <button
          onClick={() => handleRemoveTeam(member.id)}
          className="text-red-500 h-6 w-6 rounded-[3px] min-w-6 bg-gray-7 centered"
        >
          <X size={14} color="#000000" />
        </button>
        <div className="flex items-center gap-4">
          <Avatar className="w-[34px] min-w-[34px] !text-primary aspect-square bg-black-2">
            {(member && member?.firstName[0]) || ""}
          </Avatar>
          <label htmlFor={member?.id} className="text-black text-sm">
            {member?.firstName || ""} {member?.lastName || ""}
          </label>
        </div>
      </div>
      <CustomCheckbox
        checked={selectedTeam.includes(member?.id)}
        setChecked={() => handleSelectTeam(member?.id)}
        id={member?.id}
        label=""
      />
    </div>
  ) : null;
};
