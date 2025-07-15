import React from "react";
import { Bell, Menu, User, Download } from "lucide-react";

const Header = ({
  student,
  onMenuClick,
  onNotificationClick,
  onProfileClick,
}) => {
  return (
    <header className="bg-indigo-600  text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User size={22} />
              </div> */}
              <div>
                <h1 className="text-lg font-bold">Public School</h1>
                <p className="text-sm text-blue-100">Student Portal</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* <button
              id="install-button"
              className="hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              title="Install App"
            >
            
              <Download size={20} />
            </button> */}

            <button
              onClick={onNotificationClick}
              className="p-2 rounded-md hover:bg-white/10 transition-colors relative"
            >
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button
              onClick={onProfileClick}
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <img
                src={student.avatar}
                alt={student.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="hidden sm:block text-sm font-medium">
                {student.name}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
