import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaSquarePen, FaEllipsisVertical } from "react-icons/fa6";
import EditCourse from "./EditCourse";
import {
  setCourse,
  addCourse,
  deleteCourse,
  updateCourse,
} from "../Courses/courseReducer";
import { useSelector, useDispatch } from "react-redux";
import { CourseState } from "../Store";

const Dashboard = () => {
  const courses = useSelector(
    (state: CourseState) => state.coursesReducer.courses
  );
  const course = useSelector(
    (state: CourseState) => state.coursesReducer.course
  );
  const course_count = courses.length;

  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [cname, setCName] = useState("");
  const [cnum, setCNum] = useState("");
  const [csdate, setCSDate] = useState("");
  const [cedate, setCEDate] = useState("");

  return (
    // Dashboard
    <div className="col ms-5 ms-lg-3 container ms-0 me-0 main-content">
      <div className="row">
        <h1 className="display-6 ps-0 mt-2">Dashboard</h1>
        <hr />
      </div>

      {editMode ? (
        <EditCourse
          course={selectedCourse}
          setEditMode={setEditMode}
          // onClose={() => {
          //   setEditMode(false);
          //   setSelectedCourse(null);
          // }}
        />
      ) : (
        <div>
          <div className="row">
            <h4 className="ps-0">Published Courses ({course_count})</h4>
            <hr />
          </div>

          <div className="row">
            <div className="course-add ps-0 border rounded">
              <div className="row">
                <div className="col-6 m-2">
                  <div className="p-2">
                    <h5>Add Course</h5>
                  </div>
                  <br />
                  <input
                    placeholder="Enter Course Name"
                    value={cname}
                    className="form-control mb-2"
                    onChange={(e) => setCName(e.target.value)}
                  />
                  <input
                    placeholder="Enter Course Number"
                    value={cnum}
                    className="form-control mb-2"
                    onChange={(e) => setCNum(e.target.value)}
                  />
                  <input
                    className="form-control mb-2"
                    value={csdate}
                    type="date"
                    onChange={(e) => setCSDate(e.target.value)}
                  />
                  <input
                    className="form-control mb-2"
                    value={cedate}
                    type="date"
                    onChange={(e) => setCEDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="row m-2">
                <div className="col-1">
                  <button
                    type="button"
                    className="btn btn-success me-1"
                    onClick={() => {
                      dispatch(
                        addCourse({
                          name: cname,
                          number: cnum,
                          startDate: csdate,
                          endDate: cedate,
                        })
                      );
                    }}
                  >
                    Add
                  </button>
                </div>
                <div className="col-1">
                  <button type="button" className="btn btn-primary">
                    {" "}
                    {/* onClick={updateCourse} */}
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex flex-row flex-wrap ps-0">
              {courses.map((course, index) => (
                <div className="card dash-card">
                  <div className="card-menu">
                    <div className="dropdown">
                      <button
                        className="btn text-white card-dropdown"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FaEllipsisVertical />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="text-link"
                  >
                    <img
                      src="/images/course.png"
                      className="card-img-top"
                      alt="Course Image"
                    />
                  </Link>
                  <div className="card-body">
                    <div className="mb-3">
                      <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="text-link"
                      >
                        <h5 className="card-title dash-card-title">
                          {course.name}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                          {course.number}
                        </h6>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            202410_1 Fall 2023 Semester Full Term
                          </small>
                        </p>
                      </Link>
                    </div>
                    <div className="mb-3">
                      <button
                        type="button"
                        className="btn btn-warning me-1"
                        onClick={() => {
                          setEditMode(true);
                          // setSelectedCourse(course);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(deleteCourse(course._id));
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <FaSquarePen />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
