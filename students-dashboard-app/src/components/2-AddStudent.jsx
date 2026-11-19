import { useState, useEffect } from "react"
import "./AddStudent.css"

function AddStudent({ onAddStudent, editingStudent, onUpdateStudent, setEditingStudent }) {
    const initialFormData = {
        name: "",
        email: "",
        course: ""
    };

    const [formData, setFormData] = useState(initialFormData)

    useEffect(() => {
        if (editingStudent) {
            setFormData(editingStudent);
        }
    }, [editingStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingStudent) {
            onUpdateStudent({
                ...formData, id: editingStudent.id
            });
        } else {
            onAddStudent({ ...formData, id: Date.now() });
        }

        setFormData(initialFormData);
        setEditingStudent(null);
    };

    return (
        <div className="add-student">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Course</option>
                    <option value="React">React</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Node.js">Node.js</option>
                </select>
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default AddStudent;