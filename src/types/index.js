// Student data structure
export const createStudent = (id, name, email, studentId, grade, avatar) => ({
  id,
  name,
  email,
  studentId,
  grade,
  avatar
});

// Course data structure
export const createCourse = (id, name, code, instructor, credits, color, schedule, room) => ({
  id,
  name,
  code,
  instructor,
  credits,
  color,
  schedule,
  room
});

// Assignment data structure
export const createAssignment = (id, title, subject, dueDate, status, description, grade) => ({
  id,
  title,
  subject,
  dueDate,
  status,
  description,
  grade
});

// Grade data structure
export const createGrade = (id, subject, assignment, score, maxScore, date, feedback) => ({
  id,
  subject,
  assignment,
  score,
  maxScore,
  date,
  feedback
});

// Announcement data structure
export const createAnnouncement = (id, title, message, date, priority, author) => ({
  id,
  title,
  message,
  date,
  priority,
  author
});