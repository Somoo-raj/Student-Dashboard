import { useState } from "react";
import "./StudentList.css";

function StudentList({ students, onDeleteStudent, onEditStudent }) {
    const [search, setSearch] = useState("");

    return (
        <div className="student-list">
            <input
                type="text"
                placeholder="Search Student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h2>Student List</h2>
            <div className="student-grid">
                {students
                    .filter((student) => student.name.toLowerCase().includes(search.toLowerCase()))
                    .map((student) => (
                        <div className="student-card" key={student.id}>
                            <div className="student-info">
                                <div className="info-row">
                                    <span>Name</span>
                                    <span>{student.name}</span>
                                </div>
                                <div className="info-row">
                                    <span>Email</span>
                                    <span>{student.email}</span>
                                </div>
                                <div className="info-row">
                                    <span>Course</span>
                                    <span>{student.course}</span>
                                </div>
                            </div>
                            <div className="student-actions">
                                {/* Delete student list */}
                                <button onClick={() => onDeleteStudent(student.id)}>Delete</button>
                                {/* for editing students details */}
                                <button onClick={() => onEditStudent(student)}>Edit</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default StudentList;