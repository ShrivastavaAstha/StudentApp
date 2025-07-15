import React from 'react';
import { TrendingUp, Award, BookOpen, Calendar } from 'lucide-react';

const Grades = ({ grades }) => {
  const calculateOverallAverage = () => {
    const totalPercentage = grades.reduce((sum, grade) => sum + (grade.score / grade.maxScore) * 100, 0);
    return Math.round(totalPercentage / grades.length);
  };

  const subjectAverages = grades.reduce((acc, grade) => {
    if (!acc[grade.subject]) {
      acc[grade.subject] = { total: 0, count: 0 };
    }
    acc[grade.subject].total += (grade.score / grade.maxScore) * 100;
    acc[grade.subject].count += 1;
    return acc;
  }, {});

  const subjectAveragesList = Object.entries(subjectAverages).map(([subject, data]) => ({
    subject,
    average: Math.round(data.total / data.count)
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Grades</h2>
        <div className="text-right">
          <div className="text-3xl font-bold text-green-600">{calculateOverallAverage()}%</div>
          <div className="text-sm text-gray-500">Overall Average</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectAveragesList.map(({ subject, average }) => (
          <div key={subject} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{subject}</h3>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen size={20} className="text-blue-600" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{average}%</div>
              <div className="text-sm text-gray-500">Subject Average</div>
            </div>
            
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${average}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <TrendingUp className="mr-2 text-green-500" size={20} />
            Grade History
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {grades.map((grade) => (
            <div key={grade.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{grade.assignment}</h4>
                    <span className="text-sm text-gray-500">{grade.subject}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{grade.date}</span>
                    </div>
                    {grade.feedback && (
                      <div className="flex items-center">
                        <Award size={16} className="mr-1" />
                        <span>{grade.feedback}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    {grade.score}/{grade.maxScore}
                  </div>
                  <div className="text-sm text-gray-500">
                    {Math.round((grade.score / grade.maxScore) * 100)}%
                  </div>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(grade.score / grade.maxScore) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grades;