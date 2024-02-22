import { courses } from "../../Kanbas/Database";

import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { HiMiniBars3 } from "react-icons/hi2";

import CourseNavigation from "../Navigation";

import Modules from "../Modules";

import Home from "../Courses/Home";

import Assignments from "../Courses/Assignments";

import AssignmentEditor from "../Courses/Assignments/Editor";

function Courses() {

    const { courseId } = useParams();

    const course = courses.find((course) => course._id === courseId);

    return (

        <div>

            <h1><HiMiniBars3 /> Course {course?.name}</h1>

            <CourseNavigation />

            <div>

                <div

                    className="overflow-y-scroll position-fixed bottom-0 end-0"

                    style={{ left: "320px", top: "50px" }} >

                    <Routes>

                        <Route path="/" element={<Navigate to="Home" />} />

                        <Route path="Home" element={<Home/>} />

                        <Route path="Modules" element={<Modules/>} />

                        <Route path="Piazza" element={<h1>Piazza</h1>} />

                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />

                        <Route path="Assignments" element={<Assignments/>} />

                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>

                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />

                        <Route path="Grades" element={<h1>Grades</h1>} />

                        <Route path="People" element={<h1>People</h1>} />

                    </Routes>

                </div>

            </div>




        </div>

    );

}

export default Courses;