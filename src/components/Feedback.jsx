import React, { useState } from "react";
import { Star, Send, MessageSquare, ThumbsUp, Award } from "lucide-react";

const Feedback = () => {
  const [appRating, setAppRating] = useState(0);
  const [teacherRatings, setTeacherRatings] = useState({});
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("general");
  const [showThankYou, setShowThankYou] = useState(false);

  const teachers = [
    { id: 1, name: "Dr. Sarah Wilson", subject: "Mathematics" },
    { id: 2, name: "Prof. Michael Chen", subject: "Physics" },
    { id: 3, name: "Ms. Emma Davis", subject: "English Literature" },
    { id: 4, name: "Dr. James Rodriguez", subject: "Computer Science" },
    { id: 5, name: "Prof. Linda Martinez", subject: "History" },
    { id: 6, name: "Dr. Robert Taylor", subject: "Chemistry" },
  ];

  const categories = [
    { value: "general", label: "General Feedback" },
    { value: "app", label: "App Experience" },
    { value: "teaching", label: "Teaching Quality" },
    { value: "facilities", label: "School Facilities" },
    { value: "suggestion", label: "Suggestions" },
    { value: "bug", label: "Report Bug" },
  ];

  const handleStarClick = (rating, type, teacherId = null) => {
    if (type === "app") {
      setAppRating(rating);
    } else if (type === "teacher") {
      setTeacherRatings((prev) => ({
        ...prev,
        [teacherId]: rating,
      }));
    }
  };

  const renderStars = (rating, type, teacherId = null) => {
    return [...Array(5)].map((_, index) => (
      <button
        key={index}
        onClick={() => handleStarClick(index + 1, type, teacherId)}
        className={`text-xl sm:text-2xl transition-colors ${
          index < rating
            ? "text-yellow-400"
            : "text-gray-300 hover:text-yellow-200"
        }`}
      >
        <Star fill={index < rating ? "currentColor" : "none"} />
      </button>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", {
      appRating,
      teacherRatings,
      feedback,
      category,
    });
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setAppRating(0);
      setTeacherRatings({});
      setFeedback("");
      setCategory("general");
    }, 3000);
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 pb-10 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-2xl font-bold text-gray-800">Feedback & Ratings</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MessageSquare size={16} />
          <span>Your feedback helps us improve</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* App Rating */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="mr-2 text-blue-500" size={20} />
            Rate the Public School App
          </h3>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-gray-600">Overall experience:</span>
            <div className="flex items-center gap-1">
              {renderStars(appRating, "app")}
            </div>
            {appRating > 0 && (
              <span className="text-sm text-gray-500">({appRating}/5)</span>
            )}
          </div>

          {appRating > 0 && (
            <div className="text-sm text-gray-600 mt-2">
              {appRating === 5 && "Excellent! We're glad you love the app! 🎉"}
              {appRating === 4 && "Great! Thanks for the positive feedback! 👍"}
              {appRating === 3 &&
                "Good! We appreciate your feedback and will keep improving."}
              {appRating === 2 &&
                "We're sorry to hear that. Please let us know how we can improve."}
              {appRating === 1 &&
                "We apologize for the poor experience. Your feedback is valuable to us."}
            </div>
          )}
        </div>

        {/* Teacher Ratings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <ThumbsUp className="mr-2 text-green-500" size={20} />
            Rate Your Teachers
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {teacher.name}
                    </h4>
                    <p className="text-sm text-gray-600">{teacher.subject}</p>
                  </div>
                  {teacherRatings[teacher.id] && (
                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                      ({teacherRatings[teacher.id]}/5)
                    </span>
                  )}
                </div>
                <div className="flex gap-1">
                  {renderStars(
                    teacherRatings[teacher.id] || 0,
                    "teacher",
                    teacher.id
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Text Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <MessageSquare className="mr-2 text-purple-500" size={20} />
            Share Your Thoughts
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Feedback Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Feedback
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Please share your thoughts, suggestions, or report any issues..."
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full sm:w-auto"
          >
            <Send size={16} />
            <span>Submit Feedback</span>
          </button>
        </div>
      </form>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-4">
              Your feedback has been submitted successfully. We appreciate your
              input and will use it to improve our services.
            </p>
            <div className="text-sm text-gray-500">
              This dialog will close automatically...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
