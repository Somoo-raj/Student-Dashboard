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
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.E.(Computer Science, AI, Data Science)">B.E.(Computer Science, AI, Data Science)</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="MBBS">MBBS</option>
                    <option value="BDS">BDS</option>
                    <option value="BAMS">BAMS</option>
                    <option value="BHMS">BHMS</option>
                    <option value="B.Sc.">B.Sc.</option>
                    <option value="Nursing">Nursing</option>
                    <option value="Pharmacy (B.Pharm)">Pharmacy (B.Pharm)</option>
                    <option value="Physiotherapy (BPT)">Physiotherapy (BPT)</option>
                    <option value="BBA">BBA</option>
                    <option value="B.Com">B.Com</option>
                    <option value="MBA">MBA</option>
                    <option value="CA (Chartered Accountancy)">CA (Chartered Accountancy)</option>
                    <option value="CS (Company Secretary)">CS (Company Secretary)</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="BA (Economics, Psychology, English)">BA (Economics, Psychology, English)</option>
                    <option value="B.Des (Graphic, UI/UX, Fashion Design)">B.Des (Graphic, UI/UX, Fashion Design)</option>
                    <option value="Mass Communication">Mass Communication</option>
                </select>
                <button type="submit">Add Student</button>
            </form>
        </div>
    )
}

export default AddStudent;