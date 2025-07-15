import React from 'react';
import { Calendar, Clock, Award, TrendingUp, Book, FileText, Bell } from 'lucide-react';

const Dashboard = ({ student, courses, assignments, grades, announcements }) => {
  const upcomingAssignments = assignments.filter(a => a.status === 'pending').slice(0, 3);
  const recentGrades = grades.slice(0, 3);
  const urgentAnnouncements = announcements.filter(a => a.priority === 'high').slice(0, 2);
  
  const averageGrade = Math.round(grades.reduce((sum, grade) => sum + (grade.score / grade.maxScore) * 100, 0) / grades.length);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back, {student.name}!</h2>
            <p className="text-blue-100">
              {student.studentId} • {student.grade}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{averageGrade}%</div>
            <div className="text-sm text-blue-100">Overall Average</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Courses</p>
              <p className="text-2xl font-bold text-gray-800">{courses.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Book className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Assignments</p>
              <p className="text-2xl font-bold text-gray-800">{upcomingAssignments.length}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <FileText className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Grade</p>
              <p className="text-2xl font-bold text-gray-800">{averageGrade}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Achievements</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Award className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Clock className="mr-2 text-orange-500" size={20} />
            Upcoming Assignments
          </h3>
          <div className="space-y-3">
            {upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-800">{assignment.title}</h4>
                  <p className="text-sm text-gray-600">{assignment.subject}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-orange-600">{assignment.dueDate}</p>
                  <p className="text-xs text-gray-500">Due Date</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2 text-green-500" size={20} />
            Recent Grades
          </h3>
          <div className="space-y-3">
            {recentGrades.map((grade) => (
              <div key={grade.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-800">{grade.assignment}</h4>
                  <p className="text-sm text-gray-600">{grade.subject}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">{grade.score}/{grade.maxScore}</p>
                  <p className="text-xs text-gray-500">{Math.round((grade.score / grade.maxScore) * 100)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {urgentAnnouncements.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bell className="mr-2 text-red-500" size={20} />
            Urgent Announcements
          </h3>
          <div className="space-y-3">
            {urgentAnnouncements.map((announcement) => (
              <div key={announcement.id} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-medium text-red-800">{announcement.title}</h4>
                <p className="text-sm text-red-700 mt-1">{announcement.message}</p>
                <p className="text-xs text-red-600 mt-2">
                  {announcement.author} • {announcement.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;