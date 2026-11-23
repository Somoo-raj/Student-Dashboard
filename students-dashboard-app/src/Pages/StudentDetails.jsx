import { useParams } from "react-router-dom"
import "./StudentDetails.css";

function StudentDetails({ studentsArray }) {
    const { id } = useParams();

    const student = studentsArray.find((item) => String(item.id) === id);

    console.log(student);

    if (!student) {
        return <h2>Student not found</h2>
    }
    return (
        <div className="student-details">
            <h1>Student Profile</h1>

            <div className="student-avatar" style={{
                backgroundColor: ["#2563eb", "#16a34a", "#9333ea", "#ea580c", "#db2777"]
                [(student.name || "").trim().charCodeAt(0) % 5]
            }}> {(student.name || "?").trim().charAt(0).toUpperCase()}
            </div>

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
    )
}

export default StudentDetails;