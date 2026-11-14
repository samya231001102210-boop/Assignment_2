import { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList({ students }) {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    }

    if (sortOrder === "low") {
      return a.cgpa - b.cgpa;
    }

    return a.id - b.id;
  });

  return (
    <div className="student-list-container">

      <div className="list-heading">
        <h2>Student List</h2>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default Order</option>
          <option value="high">CGPA: High to Low</option>
          <option value="low">CGPA: Low to High</option>
        </select>
      </div>

      <div className="student-list">
        {sortedStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>

    </div>
  );
}

export default StudentList;