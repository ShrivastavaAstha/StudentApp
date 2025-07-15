import React, { useState } from "react";
import { Clock, MapPin, User, Calendar } from "lucide-react";

const Timetable = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const timetable = {
    Monday: [
      {
        time: "9:00 AM - 10:00 AM",
        subject: "Mathematics",
        teacher: "Dr. Smith",
        room: "Room 101",
        color: "bg-indigo-600",
      },
      {
        time: "10:15 AM - 11:15 AM",
        subject: "English",
        teacher: "Ms. Johnson",
        room: "Room 102",
        color: "bg-indigo-600",
      },
      { time: "11:30 AM - 12:00 PM", subject: "Break", color: "bg-gray-400" },
      {
        time: "12:00 PM - 1:00 PM",
        subject: "Physics",
        teacher: "Mr. Brown",
        room: "Lab 1",
        color: "bg-indigo-600",
      },
      {
        time: "1:00 PM - 2:00 PM",
        subject: "Lunch Break",
        color: "bg-indigo-600",
      },
      {
        time: "2:00 PM - 3:00 PM",
        subject: "History",
        teacher: "Ms. Lee",
        room: "Room 104",
        color: "bg-indigo-600",
      },
    ],
    Tuesday: [
      {
        time: "9:00 AM - 10:00 AM",
        subject: "Chemistry",
        teacher: "Dr. Kim",
        room: "Lab 2",
        color: "bg-indigo-600",
      },
      {
        time: "10:15 AM - 11:15 AM",
        subject: "Mathematics",
        teacher: "Dr. Smith",
        room: "Room 101",
        color: "bg-indigo-600",
      },
      { time: "11:30 AM - 12:00 PM", subject: "Break", color: "bg-gray-400" },
      {
        time: "12:00 PM - 1:00 PM",
        subject: "English",
        teacher: "Ms. Johnson",
        room: "Room 102",
        color: "bg-indigo-600",
      },
      {
        time: "1:00 PM - 2:00 PM",
        subject: "Lunch Break",
        color: "bg-indigo-600",
      },
      {
        time: "2:00 PM - 3:00 PM",
        subject: "Computer Science",
        teacher: "Mr. Patel",
        room: "Lab 3",
        color: "bg-indigo-600",
      },
    ],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  };

  return (
    <div className="space-y-6 px-4 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-2xl font-bold text-gray-800">Class Timetable</h2>
        <div className="text-sm text-gray-600">
          Today:{" "}
          <span className="font-semibold text-indigo-600">{currentDay}</span>
        </div>
      </div>

      {/* Day Selector */}
      <div className="flex flex-wrap gap-2 pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
              selectedDay === day
                ? "bg-blue-600 text-white shadow-md"
                : day === currentDay
                ? "bg-blue-100 text-blue-700 border border-blue-300"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {day}
            {day === currentDay && (
              <span className="ml-1 text-xs">• Today</span>
            )}
          </button>
        ))}
      </div>

      {/* Timetable Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Calendar className="mr-2 text-blue-500" size={20} />
            {selectedDay} Schedule
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {timetable[selectedDay] && timetable[selectedDay].length > 0 ? (
            timetable[selectedDay].map((slot, index) => (
              <div
                key={index}
                className={`p-4 flex flex-col sm:flex-row sm:items-center gap-3 ${
                  slot.subject === "Break" || slot.subject === "Lunch Break"
                    ? "bg-gray-50"
                    : ""
                }`}
              >
                {/* Time & dot */}
                <div className="flex items-center gap-2 min-w-[140px]">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {slot.time}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${slot.color}`} />
                </div>

                {/* Subject Details */}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">
                    {slot.subject}
                  </h4>
                  {slot.teacher && (
                    <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{slot.teacher}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{slot.room}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* View Button */}
                {slot.subject !== "Break" && slot.subject !== "Lunch Break" && (
                  <button className="text-indigo-600 hover:text-blue-800 text-sm font-medium w-fit mt-2 sm:mt-0">
                    View Details
                  </button>
                )}
              </div>
            ))
          ) : (
            <div className="text-center p-6 text-sm text-gray-500">
              No classes scheduled for {selectedDay}.
            </div>
          )}
        </div>
      </div>

      {/* Current Status */}
      {selectedDay === currentDay && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Current Status</h4>
          <p className="text-blue-700">
            It's currently{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            on {currentDay}.
          </p>
          <p className="text-sm text-indigo-600 mt-1">
            Check your schedule above to see what class you should be in right
            now.
          </p>
        </div>
      )}
    </div>
  );
};

export default Timetable;
