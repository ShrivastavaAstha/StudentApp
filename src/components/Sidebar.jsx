import React from "react";
import {
  Home,
  BookOpen,
  FileText,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  User,
  Users,
  Calendar,
  Clock,
  Download,
  MessageSquare,
  Activity,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose, activeTab, onTabChange }) => {
  const menuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "profile", icon: User, label: "Profile" },
    { id: "courses", icon: BookOpen, label: "Courses" },
    { id: "teachers", icon: Users, label: "Teachers" },
    { id: "timetable", icon: Clock, label: "Timetable" },
    { id: "attendance", icon: Calendar, label: "Attendance" },
    { id: "assignments", icon: FileText, label: "Assignments" },
    { id: "grades", icon: BarChart3, label: "Grades" },
    { id: "announcements", icon: Bell, label: "Announcements" },
    { id: "notifications", icon: Bell, label: "Notifications" },
    { id: "calendar", icon: Calendar, label: "Calendar" },
    { id: "downloads", icon: Download, label: "Downloads" },
    { id: "feedback", icon: MessageSquare, label: "Feedback" },
    { id: "activity", icon: Activity, label: "Activity Log" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:z-auto`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">Navigation</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto mt-4">
            {menuItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => {
                  onTabChange(id);
                  onClose(); // Close only on mobile
                }}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                  activeTab === id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-6 border-t">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
