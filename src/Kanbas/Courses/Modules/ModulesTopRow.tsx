import React from 'react';
import { FaEllipsisVertical, FaCircleCheck } from 'react-icons/fa6';

const ModulesTopRow = () => {
    return (
        <div>
            <div className="row">
                <div className="col d-flex justify-content-end mb-2 gap-1">
                    <button type="button" className="btn btn-secondary">Collapse All</button>
                    <button type="button" className="btn btn-secondary">View Progress</button>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <FaCircleCheck className="me-2" style={{ color: 'lightgreen' }} />
                            Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
                            <li><a className="dropdown-item" href="#">Unpublish all</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger"><i className="fa-solid fa-plus"></i>
                        Module</button>
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
            </div>

            <div className="row">
                <hr />
            </div>
        </div >
    )
}
export default ModulesTopRow;