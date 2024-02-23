import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCaretDown, FaPlus, FaEllipsisVertical, FaFilePen, FaCircleCheck } from "react-icons/fa6";
import React from "react";

const AssignmentList = () => {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <ul className="list-group square-list-group mb-3">
            <li className="list-group-item list-group-item-secondary">
                <div className="d-flex justify-content-start align-items-center">
                    <FaGripVertical className="me-2" />
                    <FaCaretDown className="me-2" />
                    <div className="assignment-title flex-grow-1">Assignments</div>
                    <small className="border border-black rounded-pill p-1 me-3">40% of Total</small>
                    <FaPlus className="me-3" />
                    <FaEllipsisVertical className="me-3" />
                </div>
            </li>
            {courseAssignments.map((assignment, index) => (
                <li className="list-group-item assignment-border" key={index}>
                    <div className="d-flex justify-content-start align-items-center">
                        <FaGripVertical className="me-2" />
                        <FaFilePen className="assignment-item-icon fa-lg me-3" />
                        <div className="assignment-item flex-grow-1">
                            <div className="d-flex flex-column">
                                <div className="assignment-item">
                                    <Link
                                        key={assignment._id}
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        className="assignment-link">
                                        {assignment.title}
                                    </Link>
                                </div>
                                <small className="text-body-secondary">{assignment.week}</small>
                                <small className="text-body-secondary">
                                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                                </small>
                            </div>
                        </div>
                        <FaCircleCheck className="fa-lg me-3" style={{ color: 'green' }} />
                        <FaEllipsisVertical className="me-3" />
                    </div>
                </li>
            ))}
        </ul>
    );
}
export default AssignmentList;