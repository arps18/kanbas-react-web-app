import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaSquarePen, FaEllipsisVertical } from "react-icons/fa6";
import { useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const course_count = courses.length;
  return (
    // Dashboard
    <div className="col ms-5 ms-lg-3 container ms-0 me-0 main-content">
      <div className="row">
        <h1 className="display-6 ps-0 mt-2">Dashboard</h1>
        <hr />
      </div>

      <div className="row">
        <h4 className="ps-0">Published Courses ({course_count})</h4>
        <hr />
      </div>
      <div className="row">
        <h4 className="ps-0">
          <h6>New Course Form</h6>
          <input
            value={course.name}
            className="w-25 mb-2 form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="w-25 mb-2 form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="w-25 mb-2 form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="w-25 mb-2 form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />

          <div className="row">
            <div className="col-2">
              <button className="btn btn-info" onClick={addNewCourse}>
                Add New Course
              </button>
            </div>
            <div className="col-2">
              <button className="mx-2 btn btn-warning" onClick={updateCourse}>
                Update Course
              </button>
            </div>
          </div>
          <hr />
        </h4>
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
                <div className="row">
                  {/* <FaSquarePen /> */}
                  <div className="col-4">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-success"
                    >
                      Go{" "}
                    </Link>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-primary"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
