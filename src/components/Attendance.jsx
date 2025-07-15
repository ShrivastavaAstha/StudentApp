import React from 'react';
import { Calendar, TrendingUp, CheckCircle, XCircle, Clock } from 'lucide-react';

const Attendance = () => {
  const attendanceData = {
    overall: 85,
    subjects: [
      { name: 'Mathematics', present: 18, total: 20, percentage: 90 },
      { name: 'Physics', present: 16, total: 20, percentage: 80 },
      { name: 'English', present: 19, total: 20, percentage: 95 },
      { name: 'Computer Science', present: 17, total: 20, percentage: 85 },
      { name: 'History', present: 15, total: 20, percentage: 75 },
      { name: 'Chemistry', present: 16, total: 20, percentage: 80 }
    ]
  };

  const last7Days = [
    { date: '2024-07-15', day: 'Mon', status: 'present', subjects: ['Math', 'Physics', 'English'] },
    { date: '2024-07-16', day: 'Tue', status: 'present', subjects: ['Physics', 'CS', 'Chemistry'] },
    { date: '2024-07-17', day: 'Wed', status: 'absent', subjects: ['English', 'Math', 'History'] },
    { date: '2024-07-18', day: 'Thu', status: 'present', subjects: ['CS', 'Chemistry', 'English'] },
    { date: '2024-07-19', day: 'Fri', status: 'present', subjects: ['History', 'Math', 'Physics'] },
    { date: '2024-07-20', day: 'Sat', status: 'holiday', subjects: [] },
    { date: '2024-07-21', day: 'Sun', status: 'holiday', subjects: [] }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'absent':
        return <XCircle className="text-red-500" size={20} />;
      case 'holiday':
        return <Clock className="text-gray-400" size={20} />;
      default:
        return <Clock className="text-gray-400" size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'holiday':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getPercentageColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Attendance Tracker</h2>
        <div className="text-right">
          <div className={`text-3xl font-bold ${getPercentageColor(attendanceData.overall)}`}>
            {attendanceData.overall}%
          </div>
          <div className="text-sm text-gray-500">Overall Attendance</div>
        </div>
      </div>

      {/* Overall Attendance Card */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <TrendingUp className="mr-2 text-blue-500" size={20} />
            Attendance Overview
          </h3>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Overall Progress</span>
            <span className={`font-bold ${getPercentageColor(attendanceData.overall)}`}>
              {attendanceData.overall}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-300 ${getProgressBarColor(attendanceData.overall)}`}
              style={{ width: `${attendanceData.overall}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {attendanceData.subjects.reduce((sum, subject) => sum + subject.present, 0)}
            </div>
            <div className="text-sm text-green-700">Present Days</div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {attendanceData.subjects.reduce((sum, subject) => sum + (subject.total - subject.present), 0)}
            </div>
            <div className="text-sm text-red-700">Absent Days</div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {attendanceData.subjects.reduce((sum, subject) => sum + subject.total, 0)}
            </div>
            <div className="text-sm text-blue-700">Total Days</div>
          </div>
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Subject-wise Attendance</h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {attendanceData.subjects.map((subject, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">{subject.name}</h4>
                <div className="text-right">
                  <div className={`text-lg font-bold ${getPercentageColor(subject.percentage)}`}>
                    {subject.percentage}%
                  </div>
                  <div className="text-sm text-gray-500">
                    {subject.present}/{subject.total} classes
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(subject.percentage)}`}
                  style={{ width: `${subject.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Last 7 Days */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Calendar className="mr-2 text-purple-500" size={20} />
            Last 7 Days
          </h3>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {last7Days.map((day, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">
                  <div className="text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="text-xs text-gray-500">{day.date.split('-')[2]}</div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  {getStatusIcon(day.status)}
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(day.status)}`}>
                    {day.status.charAt(0).toUpperCase() + day.status.slice(1)}
                  </span>
                </div>
                
                {day.subjects.length > 0 && (
                  <div className="mt-2">
                    <div className="text-xs text-gray-500">
                      {day.subjects.length} classes
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance Alert */}
      {attendanceData.overall < 75 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <XCircle className="text-red-500 mr-2" size={20} />
            <div>
              <h4 className="font-semibold text-red-800">Low Attendance Warning</h4>
              <p className="text-red-700 text-sm">
                Your attendance is below 75%. Please attend classes regularly to meet the minimum requirement.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;