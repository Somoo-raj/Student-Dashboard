import { useState } from "react";
import Navbar from "./components/1-Navbar"
import AddStudent from "./components/2-AddStudent"
import StudentList from "./components/3-StudentList";

function App() {
  const [students, setStudents] = useState([]);

  function handleAddStudent(newStudent) {
    console.log("Student received:", newStudent);
    // react stores the data inside the state.
    setStudents(prev => [...prev, newStudent]);
  }

  // Delte student feature
  function handleDeleteStudent(id) {
    setStudents(prev => prev.filter(student => student.id !== id)
    );
  }

  const [editingStudent, setEditingStudent] = useState(null); // No student is being edited right now.

  function handleEdit(student) {
    setEditingStudent(student);
  }

  function handleUpdateStudent(updatedStudent) {
    setStudents(prev => prev.map(student => student.id === updatedStudent.id ? updatedStudent : student));
  }

  return (
    <>
      <Navbar />
      {/* Child to parent communication */}
      <AddStudent onAddStudent={handleAddStudent} editingStudent={editingStudent} onUpdateStudent={handleUpdateStudent} setEditingStudent={setEditingStudent} />
      <StudentList students={students} onDeleteStudent={handleDeleteStudent} onEditStudent={handleEdit} />
    </>
  )
}

export default App
