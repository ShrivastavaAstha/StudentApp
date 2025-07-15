import React, { useState } from "react";
import { triggerPWAInstall } from "../utils/installPrompt";
import {
  Bell,
  User,
  Shield,
  Palette,
  Globe,
  Smartphone,
  Moon,
  Sun,
} from "lucide-react";
import {
  requestNotificationPermission,
  sendNotification,
} from "../utils/pwaUtils";

const Settings = ({ student }) => {
  const [notifications, setNotifications] = useState({
    assignments: true,
    grades: true,
    announcements: true,
    reminders: false,
  });

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "english"
  );

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const handleNotificationToggle = (type) => {
    setNotifications((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSendNotification = async () => {
    const hasPermission = await requestNotificationPermission();
    if (hasPermission) {
      await sendNotification(
        "Public School Demo Notification",
        "This is a demo notification from your School Management System!"
      );
    } else {
      alert(
        "Notification permission denied. Please enable notifications in your browser settings."
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <User className="mr-2 text-blue-500" size={20} />
            Profile Settings
          </h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{student.name}</h4>
                <p className="text-sm text-gray-600">{student.email}</p>
                <p className="text-sm text-gray-600">{student.studentId}</p>
              </div>
            </div>

            {/* <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Edit Profile
            </button> */}
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Bell className="mr-2 text-orange-500" size={20} />
            Notifications
          </h3>

          <div className="space-y-4">
            {Object.entries(notifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-700 capitalize">{key}</span>
                <button
                  onClick={() => handleNotificationToggle(key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}

            <button
              onClick={handleSendNotification}
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors mt-4"
            >
              Send Demo Notification
            </button>
          </div>
        </div>

        {/* Theme Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Palette className="mr-2 text-purple-500" size={20} />
            Appearance
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleThemeChange("light")}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                    theme === "light"
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Sun size={16} />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => handleThemeChange("dark")}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Moon size={16} />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="english">English</option>
                <option value="hindi">हिंदी (Hindi)</option>
                <option value="spanish">Español (Spanish)</option>
                <option value="french">Français (French)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Shield className="mr-2 text-green-500" size={20} />
            Security
          </h3>

          <div className="space-y-4">
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="font-medium text-gray-800">Change Password</div>
              <div className="text-sm text-gray-600">
                Update your account password
              </div>
            </button>

            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="font-medium text-gray-800">
                Two-Factor Authentication
              </div>
              <div className="text-sm text-gray-600">
                Enable 2FA for extra security
              </div>
            </button>

            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="font-medium text-gray-800">Privacy Settings</div>
              <div className="text-sm text-gray-600">
                Manage your privacy preferences
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* PWA Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Smartphone className="mr-2 text-indigo-500" size={20} />
          App Settings
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-2">Install App</h4>
            <p className="text-sm text-indigo-700 mb-3">
              Install Public School as a PWA for better performance and offline
              access.
            </p>
            <button
              onClick={triggerPWAInstall}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Install Now
            </button>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Offline Mode</h4>
            <p className="text-sm text-green-700 mb-3">
              Access your data even when offline with our caching system.
            </p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Enable Offline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
