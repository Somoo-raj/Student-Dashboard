import { useState } from "react";
import "./StudentList.css";

function StudentList({ students, onDeleteStudent, onEditStudent }) {
    // Stores the text used to filter students by name.
    const [search, setSearch] = useState("");

    // Render the search field and a card for each student matching the search.
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
                {/* Show only students whose names contain the search text. */}
                {students
                    .filter((student) => student.name.toLowerCase().includes(search.toLowerCase()))
                    .map((student) => (
                        <div className="student-card" key={student.id}>
                            {/* Pick a consistent avatar color and initial from the student's name. */}
                            <div className="student-avatar" style={{
                                backgroundColor: ["#2563eb", "#16a34a", "#9333ea", "#ea580c", "#db2777"]
                                [(student.name || "").trim().charCodeAt(0) % 5]
                            }}> {(student.name || "?").trim().charAt(0).toUpperCase()}
                            </div>
                            {/* Display the student's saved contact and course details. */}
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
                                {/* Ask the parent component to remove this student. */}
                                <button onClick={() => onDeleteStudent(student.id)}>Delete</button>
                                {/* Ask the parent component to load this student for editing. */}
                                <button onClick={() => onEditStudent(student)}>Edit</button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default StudentList;