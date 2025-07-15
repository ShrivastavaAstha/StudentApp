import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Profile from "./components/Profile.jsx";
import Teachers from "./components/Teachers.jsx";
import Timetable from "./components/Timetable.jsx";
import Attendance from "./components/Attendance.jsx";
import NotificationLog from "./components/NotificationLog.jsx";
import Calendar from "./components/Calendar.jsx";
import Downloads from "./components/Downloads.jsx";
import Feedback from "./components/Feedback.jsx";
import ActivityLog from "./components/ActivityLog.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Courses from "./components/Courses.jsx";
import Assignments from "./components/Assignments.jsx";
import Grades from "./components/Grades.jsx";
import Announcements from "./components/Announcements.jsx";
import Settings from "./components/Settings.jsx";
import BottomNav from "./components/BottomNav.jsx";
import {
  mockStudent,
  mockCourses,
  mockAssignments,
  mockGrades,
  mockAnnouncements,
} from "./data/mockData.js";
import { registerServiceWorker, installPWA } from "./utils/pwaUtils.js";

const App = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Initialize PWA
    registerServiceWorker();
    installPWA();

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <Dashboard
            student={mockStudent}
            courses={mockCourses}
            assignments={mockAssignments}
            grades={mockGrades}
            announcements={mockAnnouncements}
          />
        );
      case "courses":
        return <Courses courses={mockCourses} />;
      case "profile":
        return <Profile student={mockStudent} />;
      case "teachers":
        return <Teachers />;
      case "timetable":
        return <Timetable />;
      case "attendance":
        return <Attendance />;
      case "notifications":
        return <NotificationLog />;
      case "calendar":
        return <Calendar />;
      case "downloads":
        return <Downloads />;
      case "feedback":
        return <Feedback />;
      case "activity":
        return <ActivityLog />;
      case "assignments":
        return <Assignments assignments={mockAssignments} />;
      case "grades":
        return <Grades grades={mockGrades} />;
      case "announcements":
        return <Announcements announcements={mockAnnouncements} />;
      case "settings":
        return <Settings student={mockStudent} />;
      default:
        return (
          <Dashboard
            student={mockStudent}
            courses={mockCourses}
            assignments={mockAssignments}
            grades={mockGrades}
            announcements={mockAnnouncements}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        student={mockStudent}
        onMenuClick={() => setSidebarOpen(true)}
        onNotificationClick={() => setActiveTab("announcements")}
        onProfileClick={() => setActiveTab("settings")}
      />

      <div className="flex">
        <div className="hidden md:block">
          <Sidebar
            isOpen={true}
            onClose={() => {}}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <div className="md:hidden">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <main className="flex-1 p-6 pb-20 md:pb-6">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
