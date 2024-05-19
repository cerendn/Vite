import { useContext } from "react";
import { StudentContext } from "../../contexts/student/StudentContexts";

const StudentCard = ({ student, isLoading }) => {
  const { deleteStudent } = useContext(StudentContext);
  const handleDelete = () => {
    try {
      deleteStudent(student.id);
    } catch (error) {
      console.log("StudentCard", error);
    }
  };
  return (
    <div className="student-card">
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <span className="delete-buton" onClick={handleDelete}>
          X
        </span>
      )}
      <ul>
        <li>{student.studentName}</li>
        <li>{student.course}</li>
        <li>{student.instructor}</li>
      </ul>
    </div>
  );
};

export default StudentCard;
