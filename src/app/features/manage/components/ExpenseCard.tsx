import React from "react";
import { Button } from "@/app/elements/Button";

interface ExpenseCategoryProps {
  name: string;
  isArchived: boolean;
}
export const ExpenseCategoryCard = ({
  name,
  isArchived,
}: ExpenseCategoryProps) => {
  return (
    <div className="flex items-center justify-between mt-2 px-6 border border-black/5 h-[54px] rounded-[10px]">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm">
          {isArchived ? "Restore" : "Edit"}
        </Button>
        <p className="font-medium">{name}</p>
      </div>
      {!isArchived && (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Archive
          </Button>
          <Button variant="outline" size="sm">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
