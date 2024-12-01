import React from "react";

const DUMMY_DATE_AND_TIME = [
  {
    id: "1",
    time: "00:00",
    date: "Mon",
  },
  {
    id: "2",
    time: "00:00",
    date: "Tue",
  },
  {
    id: "3",
    time: "00:00",
    date: "Wed",
  },
  {
    id: "4",
    time: "00:00",
    date: "Thu",
  },
  {
    id: "5",
    time: "00:00",
    date: "Fri",
  },
  {
    id: "6",
    time: "00:00",
    date: "Sat",
  },
  {
    id: "7",
    time: "00:00",
    date: "Sun",
  },
];
const GotoDateBar = () => {
  return (
    <div className="grid grid-cols-8 pb-3 border-b">
      {DUMMY_DATE_AND_TIME.map((date) => (
        <div key={date.id} className="">
          <p className="font-medium text-black">{date.date}</p>
          <p className="text-gray-4 text-sm">{date.time}</p>
        </div>
      ))}
      <div className="text-right">
        <p className="font-medium text-black">Week total</p>
        <p className="text-gray-4 text-sm">00:00</p>
      </div>
    </div>
  );
};

export default GotoDateBar;
