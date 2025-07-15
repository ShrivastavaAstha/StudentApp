import React, { useState } from "react";
import {
  Activity,
  Clock,
  User,
  FileText,
  LogIn,
  LogOut,
  Upload,
  Download,
  Eye,
} from "lucide-react";

const ActivityLog = () => {
  const [filter, setFilter] = useState("all");

  const activities = [
    // (Same activity list as your original)
    // ...
  ];

  const filterTypes = [
    { value: "all", label: "All Activities" },
    { value: "login", label: "Login/Logout" },
    { value: "assignment", label: "Assignments" },
    { value: "grade", label: "Grades" },
    { value: "download", label: "Downloads" },
    { value: "profile", label: "Profile" },
  ];

  const filteredActivities =
    filter === "all" ? activities : activities.filter((a) => a.type === filter);

  const getActivityStats = () => {
    const stats = {
      total: activities.length,
      today: activities.filter((a) => a.timestamp.startsWith("2024-07-21"))
        .length,
      thisWeek: activities.filter((a) => {
        const date = new Date(a.timestamp);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return date >= weekAgo;
      }).length,
    };
    return stats;
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return date.toLocaleDateString();
  };

  const stats = getActivityStats();

  return (
    <div className="space-y-6 px-4 sm:px-6 pb-10 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-2xl font-bold text-gray-800">Activity Log</h2>
        <div className="text-sm text-gray-600">
          {filteredActivities.length} activities
        </div>
      </div>

      {/* Activity Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          label="Total Activities"
          value={stats.total}
          icon={<Activity size={24} />}
          bg="blue"
        />
        <StatCard
          label="Today"
          value={stats.today}
          icon={<Clock size={24} />}
          bg="green"
        />
        <StatCard
          label="This Week"
          value={stats.thisWeek}
          icon={<Activity size={24} />}
          bg="purple"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        {filterTypes.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              filter === f.value
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Activity Timeline */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Activity className="mr-2 text-blue-500" size={20} />
            Activity Timeline
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <Activity className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-600 mb-2">
                No activities found
              </h3>
              <p className="text-gray-500">
                No activities match the selected filter.
              </p>
            </div>
          ) : (
            filteredActivities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="p-4 sm:p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <IconComponent className={activity.color} size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                        <h4 className="text-sm font-medium text-gray-800">
                          {activity.action}
                        </h4>
                        <span className="text-sm text-gray-500">
                          {formatTimestamp(activity.timestamp)}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 mb-2 break-words">
                        {activity.details}
                      </p>

                      <div className="flex flex-wrap items-center text-xs text-gray-500 gap-2">
                        <div className="flex items-center">
                          <Clock size={12} className="mr-1" />
                          <span>{activity.timestamp}</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span className="capitalize">{activity.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

// Small reusable stat box
const StatCard = ({ label, value, icon, bg }) => {
  const bgMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${bgMap[bg]}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
