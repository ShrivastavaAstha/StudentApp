import React from "react";
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

const Assignments = ({ assignments }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="text-orange-500" size={20} />;
      case "submitted":
        return <Clock className="text-blue-500" size={20} />;
      case "graded":
        return <CheckCircle className="text-green-500" size={20} />;
      default:
        return <FileText className="text-gray-500" size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-orange-100 text-orange-800";
      case "submitted":
        return "bg-blue-100 text-blue-800";
      case "graded":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const pendingAssignments = assignments.filter((a) => a.status === "pending");
  const submittedAssignments = assignments.filter(
    (a) => a.status === "submitted"
  );
  const gradedAssignments = assignments.filter((a) => a.status === "graded");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-2xl font-bold text-gray-800">Assignments</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="text-orange-600">
            {pendingAssignments.length} Pending
          </span>
          <span className="text-blue-600">
            {submittedAssignments.length} Submitted
          </span>
          <span className="text-green-600">
            {gradedAssignments.length} Graded
          </span>
        </div>
      </div>

      {/* Assignment Cards */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              {/* Left: Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {getStatusIcon(assignment.status)}
                  <h3 className="text-lg font-semibold text-gray-800">
                    {assignment.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      assignment.status
                    )}`}
                  >
                    {assignment.status.charAt(0).toUpperCase() +
                      assignment.status.slice(1)}
                  </span>
                </div>

                <p className="text-gray-600 mb-3">{assignment.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FileText size={16} className="mr-1" />
                    <span>{assignment.subject}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>Due: {assignment.dueDate}</span>
                  </div>
                </div>
              </div>

              {/* Right: Grade */}
              {assignment.status === "graded" && assignment.grade && (
                <div className="text-right min-w-[80px]">
                  <div className="text-2xl font-bold text-green-600">
                    {assignment.grade}%
                  </div>
                  <div className="text-sm text-gray-500">Grade</div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  {assignment.status === "pending" && (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Submit Assignment
                    </button>
                  )}
                  <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors">
                    View Details
                  </button>
                </div>

                {/* Status */}
                {assignment.status === "pending" && (
                  <div className="text-sm text-orange-600 font-medium text-right">
                    {new Date(assignment.dueDate) < new Date()
                      ? "Overdue"
                      : "Due Soon"}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
