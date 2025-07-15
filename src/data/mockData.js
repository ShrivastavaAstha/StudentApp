import {
  createStudent,
  createCourse,
  createAssignment,
  createGrade,
  createAnnouncement,
} from "../types/index.js";

export const mockStudent = createStudent(
  "1",
  "Aahana",
  "aahana.johnson@student.edu",
  "STU2024001",
  "Grade 12",
  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
);

export const mockCourses = [
  createCourse(
    "1",
    "Advanced Mathematics",
    "MATH401",
    "Dr. Sarah Wilson",
    4,
    "bg-blue-500",
    "Mon, Wed, Fri 10:00-11:30",
    "Room 201"
  ),
  createCourse(
    "2",
    "Physics",
    "PHYS301",
    "Prof. Michael Chen",
    3,
    "bg-purple-500",
    "Tue, Thu 14:00-15:30",
    "Lab 105"
  ),
  createCourse(
    "3",
    "English Literature",
    "ENG201",
    "Ms. Emma Davis",
    3,
    "bg-green-500",
    "Mon, Wed 13:00-14:30",
    "Room 304"
  ),
  createCourse(
    "4",
    "Computer Science",
    "CS101",
    "Dr. James Rodriguez",
    4,
    "bg-orange-500",
    "Tue, Thu 10:00-11:30",
    "Computer Lab"
  ),
  createCourse(
    "5",
    "History",
    "HIST201",
    "Prof. Linda Martinez",
    3,
    "bg-red-500",
    "Mon, Wed, Fri 09:00-10:00",
    "Room 105"
  ),
  createCourse(
    "6",
    "Chemistry",
    "CHEM301",
    "Dr. Robert Taylor",
    4,
    "bg-teal-500",
    "Tue, Thu 15:00-16:30",
    "Lab 201"
  ),
];

export const mockAssignments = [
  createAssignment(
    "1",
    "Calculus Problem Set 5",
    "Mathematics",
    "2024-07-20",
    "pending",
    "Complete exercises 1-25 from chapter 8"
  ),
  createAssignment(
    "2",
    "Physics Lab Report",
    "Physics",
    "2024-07-18",
    "submitted",
    "Write a detailed report on the pendulum experiment"
  ),
  createAssignment(
    "3",
    "Essay on Shakespeare",
    "English Literature",
    "2024-07-25",
    "graded",
    "Analyze the themes in Hamlet",
    88
  ),
  createAssignment(
    "4",
    "Python Programming Project",
    "Computer Science",
    "2024-07-22",
    "pending",
    "Create a basic inventory management system"
  ),
  createAssignment(
    "5",
    "World War II Research",
    "History",
    "2024-07-19",
    "submitted",
    "Research paper on WWII causes and effects"
  ),
  createAssignment(
    "6",
    "Chemical Reactions Lab",
    "Chemistry",
    "2024-07-21",
    "pending",
    "Conduct experiments on acid-base reactions"
  ),
];

export const mockGrades = [
  createGrade(
    "1",
    "Mathematics",
    "Midterm Exam",
    92,
    100,
    "2024-07-10",
    "Excellent work on complex problems"
  ),
  createGrade(
    "2",
    "Physics",
    "Lab Report 1",
    85,
    100,
    "2024-07-08",
    "Good analysis, improve conclusion"
  ),
  createGrade(
    "3",
    "English Literature",
    "Poetry Analysis",
    90,
    100,
    "2024-07-12",
    "Insightful interpretation"
  ),
  createGrade(
    "4",
    "Computer Science",
    "Algorithm Quiz",
    95,
    100,
    "2024-07-15",
    "Perfect understanding of concepts"
  ),
  createGrade(
    "5",
    "History",
    "Ancient Civilizations Test",
    88,
    100,
    "2024-07-05",
    "Good knowledge of historical facts"
  ),
  createGrade(
    "6",
    "Chemistry",
    "Molecular Structure Quiz",
    94,
    100,
    "2024-07-11",
    "Excellent understanding of chemistry concepts"
  ),
];

export const mockAnnouncements = [
  createAnnouncement(
    "1",
    "School Sports Day",
    "Annual sports day will be held on July 30th. All students are encouraged to participate.",
    "2024-07-16",
    "medium",
    "Principal Johnson"
  ),
  createAnnouncement(
    "2",
    "Library Maintenance",
    "The library will be closed for maintenance from July 20-22.",
    "2024-07-15",
    "high",
    "Library Staff"
  ),
  createAnnouncement(
    "3",
    "New Course Registration",
    "Registration for next semester courses opens on August 1st.",
    "2024-07-14",
    "low",
    "Academic Office"
  ),
  createAnnouncement(
    "4",
    "Midterm Exam Schedule",
    "Midterm examinations will begin on August 5th. Please check your individual schedules.",
    "2024-07-17",
    "high",
    "Academic Office"
  ),
  createAnnouncement(
    "5",
    "Science Fair",
    "Annual science fair will be held on August 15th. Start preparing your projects!",
    "2024-07-13",
    "medium",
    "Science Department"
  ),
];
