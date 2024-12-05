"use client";

import React from "react";

const PendingApprovalTable = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const TIME_TEMP_OBJECT = {
    start: 2,
    end: 8,
    month: "Dec",
    time: [
      {
        title: "Equinix Infrastructure Services",
        id: "1",
        timeData: {
          mon: "8:00",
          tue: "8:00",
          wed: "5:00",
          thu: "4:00",
          fri: "8:00",
          sat: "4:00",
          sun: "0:00",
        },
        totalTime: "37:00",
      },
      {
        title: "Roof work",
        id: "2",
        timeData: {
          mon: "0:00",
          tue: "0:00",
          wed: "3:00",
          thu: "4:00",
          fri: "0:00",
          sat: "0:00",
          sun: "0:00",
        },
        totalTime: "7:00",
      },
    ],
  };

  const dayInterval = () => {
    const days = [];
    for (let i = TIME_TEMP_OBJECT.start; i <= TIME_TEMP_OBJECT.end; i++) {
      if (i < 10) {
        days.push(`0${i}`);
        continue;
      }
      days.push(i);
    }
    return days;
  };

  return (
    <div>
      <div className="flex items-center px-6 py-4 mt-6">
        <p className="font-medium text-[20px] min-w-[300px] w-[300px] whitespace-nowrap">
          Pending Hours
        </p>
        <div className="grid grid-cols-7 w-full">
          {days.map((day, index) => {
            return (
              <div key={day} className="text-gray-4">
                <p>{day}</p>
                <p>
                  {dayInterval()[index]}, {TIME_TEMP_OBJECT.month}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        {TIME_TEMP_OBJECT.time.map((data) => {
          const timeDataArray = Object.entries(data.timeData);
          const timeDayObjectArray = timeDataArray.map((data) => {
            return {
              day: data[0],
              time: data[1],
              id: Math.random().toString(36).substring(2, 11),
            };
          });
          return (
            <div
              className="flex items-center border mt-2 rounded-[10px] border-black/5 px-6 py-4"
              key={data.id}
            >
              <p className="whitespace-nowrap w-[300px] font-medium min-w-[300px]">
                {data.title}
              </p>
              <div className="grid grid-cols-7 gap-5 w-full">
                {timeDayObjectArray.map((data) => {
                  return (
                    <div key={data.day}>
                      <p>{data.time}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingApprovalTable;
