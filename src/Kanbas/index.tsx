import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Account from "./Account";

import "./index.css";

function Kanbas() {
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