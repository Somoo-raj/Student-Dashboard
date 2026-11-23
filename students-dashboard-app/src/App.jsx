import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import StudentDetails from "./Pages/StudentDetails";
import Navbar from "./components/1-Navbar"
import AddStudent from "./components/2-AddStudent"
import StudentList from "./components/3-StudentList";

function App() {
  // Load saved students once when the app starts; use an empty list if none are saved.
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  // Track which student, if any, is currently being edited.
  const [editingStudent, setEditingStudent] = useState(null);

  // Keep the saved student list in sync whenever its state changes.
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add a new student to the list.
  function handleAddStudent(newStudent) {
    console.log("Student received:", newStudent);
    setStudents(prev => [...prev, newStudent]);
  }

  // Remove the student whose ID matches the selected ID.
  function handleDeleteStudent(id) {
    setStudents(prev => prev.filter(student => student.id !== id)
    );
  }

  // Set the selected student so the form can display their details.
  function handleEdit(student) {
    setEditingStudent(student);
  }

  // Replace the matching student with the updated details.
  function handleUpdateStudent(updatedStudent) {
    setStudents(prev => prev.map(student => student.id === updatedStudent.id ? updatedStudent : student));
  }

  // Render the navigation, student form, and student list.
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            {/* Pass state and handlers to child components through props. */}
            <AddStudent
              onAddStudent={handleAddStudent}
              editingStudent={editingStudent}
              onUpdateStudent={handleUpdateStudent}
              setEditingStudent={setEditingStudent} />
            <StudentList
              students={students}
              onDeleteStudent={handleDeleteStudent}
              onEditStudent={handleEdit}
            />
          </>
        }
        />
        <Route path="/students/:id" element={<StudentDetails studentsArray={students} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
