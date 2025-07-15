import React from "react";
import { Clock, MapPin, User, BookOpen } from "lucide-react";

const Courses = ({ courses }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">My Courses</h2>
        <p className="text-gray-600">{courses.length} courses enrolled</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div
              className={`h-32 ${course.color} rounded-t-lg flex items-center justify-center`}
            >
              <BookOpen size={48} className="text-white" />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {course.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{course.code}</p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <User size={16} className="mr-2" />
                  <span>{course.instructor}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-2" />
                  <span>{course.schedule}</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{course.room}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Credits</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {course.credits}
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
