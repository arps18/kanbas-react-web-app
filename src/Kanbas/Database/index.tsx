import courses from "./course.json";
import modules from "./module.json";
import assignments from "./assignment.json";
import users from "./users.json";
import enrollments from "./enrollments.json";
import grades from "./grades.json";

let db = {
  courses: courses,
  modules: modules,
  assignments: assignments,
  users: users,
  enrollments: enrollments,
  grades: grades,
};
export default {
    courses,
    modules,
    assignments,
    users,
    enrollments,
    grades
};