import React from "react";
import { Bell, AlertTriangle, Info, Calendar, User } from "lucide-react";

const Announcements = ({ announcements }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="text-red-500" size={20} />;
      case "medium":
        return <Bell className="text-orange-500" size={20} />;
      case "low":
        return <Info className="text-blue-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-50 border-red-200 text-red-800";
      case "medium":
        return "bg-orange-50 border-orange-200 text-orange-800";
      case "low":
        return "bg-blue-50 border-blue-200 text-blue-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="text-red-600">
            {announcements.filter((a) => a.priority === "high").length} High
          </span>
          <span className="text-orange-600">
            {announcements.filter((a) => a.priority === "medium").length} Medium
          </span>
          <span className="text-blue-600">
            {announcements.filter((a) => a.priority === "low").length} Low
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {sortedAnnouncements.map((announcement) => (
          <div
            key={announcement.id}
            className={`p-6 rounded-lg border ${getPriorityColor(
              announcement.priority
            )} hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getPriorityIcon(announcement.priority)}
              </div>

              <div className="flex-1 space-y-3">
                {/* Title + Badge */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {announcement.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      announcement.priority === "high"
                        ? "bg-red-100 text-red-800"
                        : announcement.priority === "medium"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {announcement.priority.charAt(0).toUpperCase() +
                      announcement.priority.slice(1)}{" "}
                    Priority
                  </span>
                </div>

                {/* Message */}
                <p className="text-gray-700">{announcement.message}</p>

                {/* Footer Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      <span>{announcement.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{announcement.date}</span>
                    </div>
                  </div>

                  <button className="text-blue-600 hover:text-blue-800 font-medium text-left sm:text-right">
                    Mark as Read
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
