import React from 'react';
import { Mail, Phone, Calendar, MessageCircle, Video } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      subject: 'Advanced Mathematics',
      email: 'sarah.wilson@school.edu',
      phone: '+1 (555) 123-4567',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '8 years',
      qualification: 'PhD in Mathematics',
      officeHours: 'Mon-Fri 2:00-4:00 PM'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      subject: 'Physics',
      email: 'michael.chen@school.edu',
      phone: '+1 (555) 234-5678',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '12 years',
      qualification: 'MSc in Physics',
      officeHours: 'Tue-Thu 1:00-3:00 PM'
    },
    {
      id: 3,
      name: 'Ms. Emma Davis',
      subject: 'English Literature',
      email: 'emma.davis@school.edu',
      phone: '+1 (555) 345-6789',
      photo: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '6 years',
      qualification: 'MA in English Literature',
      officeHours: 'Mon-Wed 3:00-5:00 PM'
    },
    {
      id: 4,
      name: 'Dr. James Rodriguez',
      subject: 'Computer Science',
      email: 'james.rodriguez@school.edu',
      phone: '+1 (555) 456-7890',
      photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '10 years',
      qualification: 'PhD in Computer Science',
      officeHours: 'Mon-Fri 10:00-12:00 PM'
    },
    {
      id: 5,
      name: 'Prof. Linda Martinez',
      subject: 'History',
      email: 'linda.martinez@school.edu',
      phone: '+1 (555) 567-8901',
      photo: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '15 years',
      qualification: 'PhD in History',
      officeHours: 'Tue-Thu 2:00-4:00 PM'
    },
    {
      id: 6,
      name: 'Dr. Robert Taylor',
      subject: 'Chemistry',
      email: 'robert.taylor@school.edu',
      phone: '+1 (555) 678-9012',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      experience: '9 years',
      qualification: 'PhD in Chemistry',
      officeHours: 'Mon-Wed 1:00-3:00 PM'
    }
  ];

  const handleScheduleMeeting = (teacher) => {
    alert(`Scheduling meeting with ${teacher.name} for ${teacher.subject}`);
  };

  const handleSendMessage = (teacher) => {
    alert(`Opening message dialog with ${teacher.name}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Teachers Directory</h2>
        <p className="text-gray-600">{teachers.length} teachers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{teacher.name}</h3>
                  <p className="text-blue-600 font-medium">{teacher.subject}</p>
                  <p className="text-sm text-gray-500">{teacher.experience} experience</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail size={16} className="mr-2" />
                  <span>{teacher.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone size={16} className="mr-2" />
                  <span>{teacher.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>{teacher.officeHours}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Qualification:</strong> {teacher.qualification}
                </p>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSendMessage(teacher)}
                    className="flex-1 flex items-center justify-center space-x-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <MessageCircle size={16} />
                    <span>Message</span>
                  </button>
                  <button
                    onClick={() => handleScheduleMeeting(teacher)}
                    className="flex-1 flex items-center justify-center space-x-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <Video size={16} />
                    <span>Meet</span>
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

export default Teachers;