import React from "react";
import ModuleList from "../Modules/Modulelist";
import ModulesTopRow from "../Modules/ModulesTopRow";
import CourseStatus from "./CourseStatus";
import "./index.css"

const Home = () => {
    return (
        <div className="row">
            <div className="col">
                <ModulesTopRow />
                <ModuleList />
            </div>
            <div className="col-4">
                <CourseStatus />
            </div>

        </div>
    );
}
export default Home;