import React, { useState } from "react";
import {
  Bell,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Trash2,
} from "lucide-react";

const NotificationLog = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Assignment Due Tomorrow",
      message: "Your Mathematics assignment is due tomorrow at 11:59 PM",
      time: "2024-07-21 14:30",
      type: "assignment",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      title: "Grade Posted",
      message: "Your Physics lab report has been graded. Score: 85/100",
      time: "2024-07-21 10:15",
      type: "grade",
      read: true,
      priority: "medium",
    },
    {
      id: 3,
      title: "School Holiday",
      message: "School will be closed on July 25th for Independence Day",
      time: "2024-07-20 16:45",
      type: "announcement",
      read: false,
      priority: "low",
    },
  ]);

  const [filter, setFilter] = useState("all");

  const getIcon = (type) => {
    switch (type) {
      case "assignment":
        return <AlertCircle size={20} className="text-orange-500" />;
      case "grade":
        return <CheckCircle size={20} className="text-green-500" />;
      case "announcement":
        return <Bell size={20} className="text-blue-500" />;
      case "demo":
        return <Info size={20} className="text-purple-500" />;
      default:
        return <Bell size={20} className="text-gray-400" />;
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-4 border-red-500 bg-red-50";
      case "medium":
        return "border-l-4 border-yellow-500 bg-yellow-50";
      case "low":
        return "border-l-4 border-blue-500 bg-blue-50";
      default:
        return "border-l-4 border-gray-400 bg-gray-50";
    }
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const filtered = notifications.filter((n) => {
    if (filter === "all") return true;
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return n.type === filter;
  });

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="p-4 max-w-3xl mx-auto w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Notifications</h1>
        <p className="text-gray-600 text-sm">
          {notifications.filter((n) => !n.read).length} unread •{" "}
          {notifications.length} total
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
        {["all", "unread", "read", "assignment", "grade", "announcement"].map(
          (type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                filter === type
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Notification Cards */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            <Bell size={40} className="mx-auto mb-2" />
            No notifications to show
          </div>
        ) : (
          filtered.map((n) => (
            <div
              key={n.id}
              className={`rounded-lg p-4 ${getPriorityStyle(
                n.priority
              )} shadow-sm transition-all`}
            >
              <div className="flex items-start gap-3 flex-col sm:flex-row sm:items-center">
                {/* Icon */}
                <div className="flex-shrink-0">{getIcon(n.type)}</div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h2
                      className={`font-semibold text-base ${
                        n.read ? "text-gray-700" : "text-gray-900"
                      } break-words`}
                    >
                      {n.title}
                    </h2>
                    {!n.read && (
                      <span className="w-2 h-2 bg-blue-500 rounded-full ml-2" />
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mt-1 max-h-20 overflow-y-auto break-words pr-1">
                    {n.message}
                  </p>

                  <div className="text-xs text-gray-500 mt-2 flex flex-wrap gap-3">
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {formatTime(n.time)}
                    </span>
                    <span className="capitalize">{n.type}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full ${
                        n.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : n.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {n.priority}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-3 flex gap-3 flex-wrap justify-end">
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Mark as Read
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(n.id)}
                  className="text-red-600 hover:text-red-800 p-1"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationLog;
