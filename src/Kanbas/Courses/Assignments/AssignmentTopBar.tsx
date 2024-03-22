import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";

const AssignmentsTopBar = () => {
    return (
        <div>
            <div className="d-flex gap-1">
                <div className="me-auto w-25">
                    <input type="text" className="form-control" placeholder="Search for Assignment" />
                </div>
                <button type="button" className="btn btn-secondary"><i className="fa-solid fa-plus"></i>
                    Group</button>
                <button type="button" className="btn btn-danger"><i className="fa-solid fa-plus"></i>
                    Assignment</button>
                <div className="dropdown">
                    <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <FaEllipsisVertical />
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Option 1</a></li>
                        <li><a className="dropdown-item" href="#">Option 2</a></li>
                        <li><a className="dropdown-item" href="#">Option 3</a></li>
                    </ul>
                </div>
            </div>

            <hr />
        </div>
    )
}
export default AssignmentsTopBar;