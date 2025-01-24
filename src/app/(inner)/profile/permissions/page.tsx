import { Button } from "@/app/elements/Button";
import React from "react";

const Permissions = () => {
  return (
    <div className="">
      <h1 className="text-[32px] font-medium leading-none pb-2">
        Your permissions
      </h1>
      <p className="text-sm pb-6 border-b">
        This setting determines what you can see and do in this account.
      </p>
      <div className="mt-4 flex gap-5">
        <p className="font-bold">Permissions</p>
        <div>
          <div>
            <label htmlFor="member" className="flex items-center gap-2">
              <input
                type="radio"
                className="w-5 h-5"
                id="member"
                value="Member"
                name="permission"
              />
              <span className="font-medium">Member</span>
            </label>
            <p className="text-sm text-gray-4 mt-[2px]">
              Good for people who just need to track time and expenses.
            </p>
          </div>
          <div className="mt-5">
            <label htmlFor="manager" className="flex items-center gap-2">
              <input
                type="radio"
                className="w-5 h-5"
                name="permission"
                id="manager"
                value="Manager"
              />
              <span className="font-medium">Manager</span>
            </label>
            <p className="text-sm text-gray-4 mt-[2px]">
              Good for people who need more access to people and project
              reports. Managers can approve and run reports for all time and
              expenses tracked to selected projects and people. Optionally, they
              can also:
            </p>
          </div>
          <div className="mt-5">
            <label htmlFor="administrator" className="flex items-center gap-2">
              <input
                type="radio"
                className="w-5 h-5"
                name="permission"
                id="administrator"
                value="Administrator"
              />
              <span className="font-medium">Administrator</span>
            </label>
            <p className="text-sm text-gray-4 mt-[2px]">
              Good for people who need the most control to manage your account.
              Administrators can see and do everything: create and manage all
              projects and people, manage and invoice all clients, see all
              reports, see and edit all rates, and more.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button as="link" href="/team/new/assign-project" size="md">
              Update permissions
            </Button>
            <Button size="md" variant="outline">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
