import React, { useState } from "react";
import { Download, FileText, File, Image, Video, Music } from "lucide-react";

const Downloads = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const files = [
    {
      id: 1,
      name: "Mathematics Syllabus 2024.pdf",
      type: "pdf",
      size: "2.4 MB",
      category: "Syllabus",
      uploadDate: "2024-07-15",
      downloadCount: 45,
      url: "#",
    },
    {
      id: 2,
      name: "Physics Lab Manual.pdf",
      type: "pdf",
      size: "5.8 MB",
      category: "Lab Manual",
      uploadDate: "2024-07-10",
      downloadCount: 32,
      url: "#",
    },
    {
      id: 3,
      name: "English Literature Notes.docx",
      type: "doc",
      size: "1.2 MB",
      category: "Notes",
      uploadDate: "2024-07-18",
      downloadCount: 28,
      url: "#",
    },
    {
      id: 4,
      name: "Chemistry Periodic Table.png",
      type: "image",
      size: "856 KB",
      category: "Reference",
      uploadDate: "2024-07-12",
      downloadCount: 67,
      url: "#",
    },
  ];

  const categories = ["All", "Syllabus", "Lab Manual", "Notes", "Reference"];

  const filteredFiles =
    selectedCategory === "All"
      ? files
      : files.filter((file) => file.category === selectedCategory);

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <FileText className="text-red-500" size={20} />;
      case "doc":
        return <File className="text-blue-500" size={20} />;
      case "image":
        return <Image className="text-purple-500" size={20} />;
      case "video":
        return <Video className="text-orange-500" size={20} />;
      case "audio":
        return <Music className="text-pink-500" size={20} />;
      default:
        return <File className="text-gray-500" size={20} />;
    }
  };

  const handleDownload = (file) => {
    alert(`Downloading ${file.name}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Downloads</h1>
        <p className="text-gray-500 text-sm">
          {filteredFiles.length} files available
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 sm:overflow-x-auto sm:flex-nowrap scrollbar-thin scrollbar-thumb-gray-300 pb-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* File Cards */}
      {filteredFiles.length === 0 ? (
        <div className="text-center py-16">
          <FileText className="mx-auto text-gray-400 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-600 mb-1">
            No files found
          </h3>
          <p className="text-sm text-gray-500">
            No files available in the "{selectedCategory}" category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="bg-white rounded-2xl shadow border border-gray-200 p-5 flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 mb-3">
                {getFileIcon(file.type)}
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-800 break-words">
                    {file.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Category: {file.category}
                  </p>
                  <div className="mt-2 text-xs text-gray-500 flex flex-wrap gap-3">
                    <span>Size: {file.size}</span>
                    <span>Uploaded: {file.uploadDate}</span>
                    <span className="w-full sm:w-auto">
                      Downloads: {file.downloadCount}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 sm:self-end w-full sm:w-auto">
                <button
                  onClick={() => handleDownload(file)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Downloads;
