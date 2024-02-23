import React from 'react';
import db from '../../Database';
import { useParams } from 'react-router-dom';
import GradesTopBar from './GradesTopBar';
import './index.css';

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div>
            <GradesTopBar />
            <div className="table-responsive">
                <table className="table table-striped table-bordered border-secondary text-center">
                    <thead className="table-secondary">
                        <tr>
                            <th>Student Name</th>
                            {assignments.map((assignment) => (
                                <th key={assignment._id}>
                                    {assignment.title}
                                    <br />
                                    Out of {assignment.points}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment.user}>
                                    <td>
                                        {user?.firstName} {user?.lastName}
                                    </td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) =>
                                                grade.student === enrollment.user && grade.assignment === assignment._id
                                        );

                                        return (
                                            <td key={assignment._id}>
                                                {grade?.grade != null ? `${grade.grade}%` : ''}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Grades;
