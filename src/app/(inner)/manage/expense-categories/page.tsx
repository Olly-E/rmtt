"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

import { ExpenseCategoryCard } from "@/app/features/manage/components/ExpenseCard";
// import { AddTaskForm } from "@/app/features/manage/components/AddTaskForm";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import { Button } from "@/app/elements/Button";

const TEMP_EXPENSE_CATEGORY = [
  {
    name: "Entertainment",
    id: "1",
    rate: "$0.00",
  },
  {
    name: "Lodging",
    id: "2",
    rate: "$0.00",
  },
  {
    name: "Meals",
    id: "3",
    rate: "$0.00",
  },
  {
    name: "Mileage",
    id: "4",
    rate: "$0.00",
  },
];

const TEMP_ARCHIVED_CATEGORY = [
  {
    name: "Travel",
    id: "1",
    rate: "$0.00",
  },
  {
    name: "Supplies",
    id: "2",
    rate: "$0.00",
  },
  {
    name: "Equipment",
    id: "3",
    rate: "$0.00",
  },
  {
    name: "Other",
    id: "4",
    rate: "$0.00",
  },
];

interface PageProps {
  searchParams: {
    archived?: boolean;
  };
}

const Page = (props: PageProps) => {
  const isArchived = props.searchParams.archived;

  const EXPENSE_CATEGORY = isArchived
    ? TEMP_ARCHIVED_CATEGORY
    : TEMP_EXPENSE_CATEGORY;

  const {
    // isComponentVisible: openNewTask,
    handleClickOnDropDownButton: handleOpenNewTask,
  } = useComponentVisible();

  return (
    <div>
      <div className="w-[743px] mx-auto mt-10">
        <h1 className="text-[32px] leading-[32px] font-medium">
          {isArchived ? "Archived expense categories" : "Expense categories"}
        </h1>
        {!isArchived ? (
          <div className="flex items-center gap-4 pb-4 mt-4">
            <Button onClick={handleOpenNewTask} size="md">
              + New category
            </Button>
            <Button
              as="link"
              href="/manage/expense-categories?archived=1"
              variant="outline"
              size="md"
            >
              View achieved categories <ArrowRight size={16} />
            </Button>
          </div>
        ) : (
          <Button
            as="link"
            href="/manage/expense-categories"
            variant="outline"
            size="md"
            className="my-4"
          >
            <ArrowLeft size={16} /> Back to active categories
          </Button>
        )}
        {/* {openNewTask && <AddTaskForm handleCloseNewTask={} />} */}
        <div>
          {EXPENSE_CATEGORY.map((task) => (
            <ExpenseCategoryCard
              key={task.id}
              name={task.name}
              isArchived={isArchived || false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
