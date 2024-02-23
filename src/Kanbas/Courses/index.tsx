import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import db  from "../Database";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumb from "./breadcrumb";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css"
import React from "react";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(segment => segment !== "");
  const pageNames = pathSegments.slice(3);
  return (
    <div className="container ms-0 me-0 main-content">
        <div className="row">
            {course && <Breadcrumb courseId={course._id} courseName={course.name} pageNames={pageNames} />}
        </div>

        <div className="row">
            <div className="col-2">
                <CourseNavigation />
            </div>
            <div className="col ms-5">
                <div>
                    <div>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
export default Courses;