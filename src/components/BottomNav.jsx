import React from "react";
import {
  Home,
  BookOpen,
  FileText,
  BarChart3,
  Bell,
  Settings,
  User,
  Users,
  Calendar,
  Clock,
} from "lucide-react";

const BottomNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: "dashboard", icon: Home, label: "Home" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "courses", icon: BookOpen, label: "Courses" },
    { id: "timetable", icon: Clock, label: "Schedule" },
    { id: "assignments", icon: FileText, label: "Tasks" },
    { id: "grades", icon: BarChart3, label: "Grades" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50 shadow">
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
        <div className="flex flex-nowrap items-center w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center justify-center flex-1 min-w-[64px] py-2 px-1 transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Icon size={20} />
                <span className="text-[11px] font-medium leading-tight mt-1">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
