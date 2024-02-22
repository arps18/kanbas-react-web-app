import {Link} from "react-router-dom";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
function Kanbas() {
    return (
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <h1>Kanbas Navigation</h1>
        </div>
        <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          {/* <Route path="Dashboard" element={<Dashboard />} /> */}
          <Route path="Courses/*" element={<h1>Courses</h1>} />
        </Routes>

        </div>
      </div>
  );}
 

export default Kanbas;

