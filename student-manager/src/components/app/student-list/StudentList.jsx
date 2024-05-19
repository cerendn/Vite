import { useContext } from "react";
import StudentCard from "../student-card/StudentCard";
import { StudentContext } from "../../contexts/student/StudentContexts";

const StudentList = () => {
  const { studentList, isLoading } = useContext(StudentContext);
  const validStudentList = Array.isArray(studentList) ? studentList : [];
  return (
    <div className="student-list-container">
      <div className="student-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          validStudentList.map((student) => {
            return <StudentCard student={student} key={student.id} />;
          })
        )}
      </div>
    </div>
  );
};
export default StudentList;
