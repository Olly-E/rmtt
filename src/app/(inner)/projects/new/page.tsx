"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import React from "react";

import {
  AddNewProjectType,
  createProjectSchema,
} from "@/app/features/project/utils/validationSchema";
import { ProjectTypeSelect } from "@/app/features/project/components/ProjectTypeSelect";
import { TeamMemberCard } from "@/app/features/project/components/TeamMemberCard";
import { SelectFieldWithInput } from "@/app/components/form/SelectFieldWithInput";
import { useCreateProject } from "@/app/features/project/api/useCreateProject";
import { useAllTeamMember } from "@/app/features/team/api/useAllTeamMember";
import { useAllClients } from "@/app/features/manage/api/useAllClients";
import { InputDateField } from "@/app/components/form/InputDateField";
import { useAllTasks } from "@/app/features/manage/api/useAllTasks";
import { TextAreaField } from "@/app/components/form/TextAreaField";
import { CreateProjectPayload } from "@/app/features/project/types";
import CustomCheckbox from "@/app/components/form/CustomCheckbox";
import { InputField } from "@/app/components/form/InputField";
import { getFormattedDayMonthYear } from "@/app/utils/utils";
import { PageSpinner } from "@/app/elements/PageSpinner";
import { Option, Usermini } from "@/app/types";
import { Button } from "@/app/elements/Button";

const TEAM_OPTS = [
  {
    id: "1",
    firstName: "Olivia",
    lastName: "Smith",
  },
  {
    id: "2",
    firstName: "David",
    lastName: "Johnson",
  },
];

const CreateNewProjectPage = () => {
  const route = useRouter();

  const [tasks, setTasks] = React.useState<Option[]>([]);
  const [selectedTasks, setSelectedTasks] = React.useState<string[]>([]);
  const [team, setTeam] = React.useState([TEAM_OPTS[0]]);
  const [selectManager, setSelectedManager] = React.useState<string[]>([]);
  const [selectedProjectType, setSelectedProjectType] =
    React.useState<string>("non-billable");
  const [userData, setUserData] = React.useState<Usermini>();

  const { data, isPending: isPendingAllClients } = useAllClients({
    page: 1,
    limit: 50,
    search: "",
  });

  const { data: teamData, isPending: isPendingAllTeamMembers } =
    useAllTeamMember({
      page: 1,
      limit: 50,
      search: "",
    });
  console.log(teamData);

  const { data: taskDataArray, isPending: taskIsPending } = useAllTasks();
  const { mutate, isPending: creteProjectPending } = useCreateProject();

  const isCommonTaskArray = taskDataArray
    ?.filter((task) => task.is_common_and_future_adding)
    .map((task) => task.id) as string[];

  React.useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("userData") || "{}");
    setUserData(user);
    if (user.id) setSelectedManager([user.id]);
  }, []);

  React.useEffect(() => {
    if (taskDataArray && taskDataArray.length > 0) {
      setTasks(taskDataArray);
      setSelectedTasks(isCommonTaskArray || []);
    }
  }, [taskIsPending]);

  const clientsListOpt = data?.results || [];

  const handleRemoveTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSelectTask = (id: string) => {
    setSelectedTasks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskId) => taskId !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelectAllTasks = () => {
    setSelectedTasks(tasks.map((task) => task.id));
  };

  const handleRemoveTeam = (id: string) => {
    setTeam((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSelectTeam = (id: string) => {
    setSelectedManager((prev) => {
      if (prev.includes(id)) {
        return prev.filter((taskId) => taskId !== id);
      }
      return [...prev, id];
    });
  };

  const handleSelectAllTeam = () => {
    setSelectedManager(team.map((task) => task.id));
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<AddNewProjectType>({
    resolver: zodResolver(createProjectSchema),
  });

  const onSubmit = (values: AddNewProjectType) => {
    const payload: CreateProjectPayload = {
      client: values.client.id,
      description: values.notes || "",
      notes: values.notes || "",
      project_code: values.project_code || "",
      name: values.project_name,
      end_date: getFormattedDayMonthYear(values.end_date as Date) || "",
      start_date: getFormattedDayMonthYear(values.start_date as Date) || "",
      permission: "everyone",
      project_manager: selectManager[0],
      project_type: {},
      engineers: selectManager,
      job_estimated_time: "",
      tag: "tag",
      tasks: selectedTasks,
      team: selectManager,
    };

    //coming back to all these remove tag,fix team so it can be grabbed from team member and selected fix project type by sending project objects to it

    mutate(payload, {
      onSuccess: () => {
        route.push("/time");
      },
    });
  };

  return (
    <div className="container">
      <div className="max-w-[1184px] mx-auto pb-10">
        <h1 className="text-black leading-[44px] mt-4 text-[32px] font-medium border-b border-b-gray-6 pb-3">
          New Project
        </h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="firstName"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Client name
            </label>
            <SelectFieldWithInput
              hasError={errors.client}
              name="client"
              arr={clientsListOpt}
              dataLoading={isPendingAllClients}
              className="mt-[6px] !w-full"
              placeholder=""
              control={control as unknown as Control}
            />
          </div>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="projectName"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Project name
            </label>
            <InputField
              hasError={errors.project_name}
              registration={{ ...register("project_name") }}
              className="mt-[6px] !w-full"
              isRequired
              placeholder=""
            />
          </div>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="projectName"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Project code
            </label>
            <div>
              <InputField
                hasError={errors.project_code}
                registration={{ ...register("project_code") }}
                className="!w-[130px]"
                isRequired
                placeholder=""
              />
              <p className="text-gray-4 text-sm mt-1">
                Optional. A code can help identify your project. You can use any
                combination of numbers or letters.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="projectName"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Dates
            </label>
            <div>
              <div className="flex items-center gap-4">
                <div className="flex items-center !w-[130px]">
                  <InputDateField
                    hasError={errors.start_date}
                    name="start_date"
                    className="!w-[130px]"
                    placeholderText="Starts on"
                    dateFormat="dd/MM/yyyy"
                    isRequired
                    placeholder=""
                    control={control as unknown as Control}
                  />
                </div>
                <p className="font-medium text-sm">to</p>
                <div className="flex items-center !w-[130px]">
                  <InputDateField
                    hasError={errors.end_date}
                    name="end_date"
                    className="!w-[130px]"
                    placeholderText="Ends on"
                    dateFormat="dd/MM/yyyy"
                    isRequired
                    placeholder=""
                    control={control as unknown as Control}
                  />
                </div>
              </div>
              <p className="text-gray-4 text-sm mt-1">
                Optional. Youʼll still be able to track time outside of this
                date range.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-full items-center gap-10">
            <label
              htmlFor="note"
              className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium"
            >
              Notes
            </label>
            <div>
              <TextAreaField
                id="note"
                hasError={errors.notes}
                registration={{ ...register("notes") }}
                className="mt-[6px] !w-full resize-none"
                rows={2}
                isRequired
                placeholder=""
              />
              <p className="text-gray-4 text-sm mt-1">
                Optional. Notes are great for anything you need to reference
                later, like invoice schedules, which you can see when creating
                an invoice for Fixed Fee projects. Currently, notes can only be
                seen by Administrators. Administrators can control who has
                access to notes in Settings.
              </p>
            </div>
          </div>
          <div className="mt-4 flex w-full items-center gap-10 pb-6 border-b">
            <div className="block text-sm text-black min-w-[150px] whitespace-nowrap font-medium">
              Permissions
            </div>
            <div>
              <label
                htmlFor="administrator-and-manager"
                className="flex items-center font-medium gap-4"
              >
                <input
                  type="radio"
                  className="w-[20px]"
                  id="administrator-and-manager"
                  name="permission"
                />
                Show project report to Administrators and people who manage this
                project. What will people see?
              </label>
              <label
                htmlFor="everyone"
                className="flex font-medium items-center gap-4"
              >
                <input
                  type="radio"
                  className="w-[20px]"
                  id="everyone"
                  name="permission"
                />
                Show project report to everyone on this project. What will
                people see?
              </label>
            </div>
          </div>
          <div>
            <ProjectTypeSelect
              selectedProjectType={selectedProjectType}
              setSelectedProjectType={setSelectedProjectType}
            />
          </div>
          <div className="bg-gray-7 flex items-center h-[66px] rounded-[5px] justify-between px-6 mt-4">
            <p className="font-medium text-[18px]">Tasks</p>
            <div className="flex items-center gap-1 text-sm">
              <span>Select</span>
              <button
                onClick={handleSelectAllTasks}
                className="text-blue-state"
                type="button"
              >
                All
              </button>
              /
              <button
                onClick={() => setSelectedTasks([])}
                className="text-blue-state"
                type="button"
              >
                None
              </button>
            </div>
          </div>
          <div>
            {taskIsPending ? (
              <PageSpinner />
            ) : (
              taskDataArray?.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between border-b border-gray-6 py-3"
                >
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => handleRemoveTask(task.id)}
                      className="text-red-500 h-6 w-6 rounded-[3px] min-w-6 bg-gray-7 centered"
                    >
                      <X size={14} color="#000000" />
                    </button>
                    <label htmlFor={task.id} className="text-black text-sm">
                      {task.name}
                    </label>
                  </div>
                  <CustomCheckbox
                    checked={selectedTasks.includes(task.id)}
                    setChecked={() => handleSelectTask(task.id)}
                    id={task.id}
                    label=""
                  />
                </div>
              ))
            )}
          </div>
          <div className="bg-gray-7 flex items-center h-[66px] rounded-[5px] justify-between px-6 mt-8">
            <p className="font-medium text-[18px]">Team</p>

            <div className="text-right">
              <p className="text-sm">Manages this project</p>
              <div className="flex items-center gap-1 text-sm justify-end">
                <span>Select</span>
                <button
                  onClick={handleSelectAllTeam}
                  className="text-blue-state"
                  type="button"
                >
                  All
                </button>
                /
                <button
                  onClick={() => setSelectedManager([])}
                  className="text-blue-state"
                  type="button"
                >
                  None
                </button>
              </div>
            </div>
          </div>
          <div>
            <TeamMemberCard
              member={userData as Usermini}
              selectedTeam={selectManager}
              handleSelectTeam={handleSelectTeam}
              handleRemoveTeam={handleRemoveTeam}
            />
            {team.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                selectedTeam={selectManager}
                handleSelectTeam={handleSelectTeam}
                handleRemoveTeam={handleRemoveTeam}
              />
            ))}
            <SelectFieldWithInput
              hasError={errors.team}
              name="team"
              arr={clientsListOpt}
              dataLoading={isPendingAllTeamMembers}
              className="mt-[6px] !w-full"
              placeholder="Add a person"
              control={control as unknown as Control}
            />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Button
              disabled={creteProjectPending}
              isLoading={creteProjectPending}
              type="submit"
              size="md"
              className="mt-4"
            >
              {creteProjectPending ? "Saving..." : "Save Project"}
            </Button>
            <Button type="button" variant="outline" size="md" className="mt-4">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewProjectPage;
