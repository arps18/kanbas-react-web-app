import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./moduleReducer";
import { ModulesState, Module } from "../../Store"; // Adjust the import path as needed
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const [module, setModuleState] = useState<Module>({
    _id: "",
    title: "",
    description: "",
    lessons: [],
    submodules: [],
    course: "",
    name: ""
  });

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = () => {
    client.updateModule(module).then((status) => {
      dispatch(updateModule(module));
    });
  };

  const moduleList = useSelector(
    (state: ModulesState) => state.modulesReducer.modules
  );

  return (
    <div className="flex-fill pe-5 ps-0">
      <div className="d-flex justify-content-end">
        <button className="btn btn-light m-1">Collapse All</button>
        <button className="btn btn-light m-1">View Progress</button>
        <button className="btn btn-light dropdown-toggle m-1">
          <FaCheckCircle className="text-success fs-20 mr-5" />
          Publish All
        </button>
        <button className="btn btn-danger m-1">+ Module</button>
        <button className="btn btn-light m-1">
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <div>
        <h4>Add New Module</h4>
        <div>
          <input
            className="form-control my-1"
            value={module.title}
            onChange={(e) =>
              setModuleState({ ...module, title: e.target.value })
            }
          />
        </div>
        <div>
          <textarea
            className="form-control my-1"
            value={module.description}
            onChange={(e) =>
              setModuleState({ ...module, description: e.target.value })
            }
          />
        </div>
        <div>
          <button
            onClick={handleAddModule}
            className="btn btn-sm btn-success me-1"
          >
            Add
          </button>
          <button
            onClick={handleUpdateModule}
            className="btn btn-sm btn-primary me-1"
          >
            Update
          </button>
        </div>
      </div>
      <ul className="list-group wd-modules mt-4">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setModuleState(module)}
            >
              <div className="module-header py-3">
                <span className="me-2 ms-1 cursor-pointer">
                  <FaEllipsisV className="fs-20" />
                </span>
                <div className="d-inline-flex align-items-center justify-content-center">
                  <button className="btn dropdown-toggle me-2"></button>
                  <span className="fw-bold cursor-pointer">{module.title}</span>
                </div>
                <span className="float-end pe-2">
                  <button className="dropdown-toggle bg-transparent me-3 d-inline-flex align-items-center justify-content-center">
                    <FaCheckCircle className="text-success fs-20" />
                  </button>
                  <FaPlusCircle className="me-3 fs-20 cursor-pointer grey-color" />
                  <button
                    onClick={() => dispatch(setModule(module))}
                    className="btn btn-primary me-1"
                    style={{ padding: 3 }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteModule(module._id)}
                    className="btn btn-danger"
                    style={{ padding: 3 }}
                  >
                    Delete
                  </button>
                  <FaEllipsisV className="ms-2 fs-20 cursor-pointer" />
                </span>
              </div>
              {module._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson: { name: string }) => (
                    <li className="list-group-item module-li">
                      <div className="module-content py-2">
                        <span className="me-2 ms-1">
                          <FaEllipsisV
                            className="fs-20"
                            style={{ marginRight: -13 }}
                          />
                          <FaEllipsisV className="fs-20 me-2" />
                        </span>
                        {lesson.name}
                        <span className="float-end pe-2">
                          <FaCheckCircle className="text-success me-3 fs-20 cursor-pointer" />
                          <FaEllipsisV className="ms-2 fs-20 cursor-pointer" />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ModuleList;
