import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider, useSelector } from "react-redux";
import Account from "./Account";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourse,
} from "./Courses/courseReducer";
import "./index.css";
import React from "react";
import { CourseState } from "./Store";

function Kanbas() {
  const courses = useSelector(
    (state: CourseState) => state.coursesReducer.courses
  );
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="Account" element={<Account />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Courses" element={<Dashboard />} />
        <Route path="Courses/:courseId/*" element={<Courses />} />
      </Routes>
    </div>
  );
}
export default Kanbas;
