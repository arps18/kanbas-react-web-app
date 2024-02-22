import ModuleList from "../../Modules/List";

import "../Modules/index.css"

import { FaBan, FaBell, FaBullhorn, FaCheckCircle, FaFileImport } from "react-icons/fa";

import { FaChartSimple, FaCircleDot, FaRightFromBracket } from "react-icons/fa6";




function Home() {

    return (

        <div className="d-flex">

            <div className="flex-fill">

                <h2>Home</h2>

                <ModuleList />

            </div>

            <div className="course-status flex-grow-0 me-2 d-none d-lg-block m-10">

                <h3>Course Status</h3>

                <button className="top-buttons" type="button">

                    <FaBan className="me-2" />Unpublished</button>

                <button className="top-buttons btn-published" type="button">

                    <FaCheckCircle className="me-2" />Published</button>

                <ul className="p-0 list-unstyled button-list">

                    <li><button className="top-buttons">

                        <FaFileImport className="me-2" />Import Existing Content</button></li>

                    <li><button className="top-buttons">

                        <FaRightFromBracket className="me-2" />Import From Commons</button></li>

                    <li><button className="top-buttons">

                        <FaCircleDot className="me-2" />Choose Home Page</button></li>

                    <li><button className="top-buttons">

                        <FaChartSimple className="me-2" />View Course Stream</button></li>

                    <li><button className="top-buttons">

                        <FaBullhorn className="me-2" />New Announcement</button></li>

                    <li><button className="top-buttons">

                        <FaChartSimple className="me-2" />New Analytics</button></li>

                    <li><button className="top-buttons">

                        <FaBell className="me-2" />View Course Notifications</button></li>

                </ul>

                <h3>To Do</h3>

                <hr />

                <span style={{color: 'red'}}>Grade A1-ENV+HTML</span>

                <br /><br />

                <span style={{fontSize: '1.5em', marginRight: '20px'}}>Coming Up</span>

                <br />

                <a href="#" style={{color: 'red',textDecoration: 'none'}}>View Calender</a>

                <hr />

                <div className="upcoming-lecs">

                    <li><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>

                    <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>

                    <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>

                </div>

            </div>

        </div>

    );

}

export default Home;