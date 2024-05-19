import { useContext, useState } from "react";
import StudentList from "../student-list/StudentList";
import { StudentContext } from "../../contexts/student/StudentContexts";

const StudentForm = () => {
  const [studentInput, setStudentInput] = useState({
    studentName: "",
    course: "",
    instructor: "",
  });
  const [studentInputErr, setStudentInputErr] = useState({
    studentName: false,
    course: false,
    instructor: false,
  });

  const addStudent = (event) => {
    event.preventDefault();

    setStudentInputErr({
      studentName: false,
      course: false,
      instructor: false,
    });

    //hata yoksa
    if (
      studentInput.studentName.trim() &&
      studentInput.course.trim() &&
      studentInput.instructor.trim()
    ) {
      // const newStudent = { ...studentInput, id: Date.now().toString() };
      createStudent(studentInput); //App.js'den gelen fonksiyon

      //inputlari temizle
      setStudentInput({ studentName: "", course: "", instructor: "" });
    } else {
      !studentInput.studentName.trim() &&
        setStudentInputErr((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          studentName: true,
        }));
      !studentInput.course.trim() &&
        setStudentInputErr((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          course: true,
        }));
      !studentInput.instructor.trim() &&
        setStudentInputErr((prevStudentInputErr) => ({
          ...prevStudentInputErr,
          instructor: true,
        }));
    }
  };
  const { createStudent } = useContext(StudentContext);
  return (
    <form onSubmit={addStudent} className="student-form">
      <div className="input-control">
        <input
          type="text"
          placeholder="Student Name"
          value={studentInput.studentName}
          onChange={(event) =>
            setStudentInput((prevStudentInput) => ({
              ...prevStudentInput,
              studentName: event.target.value,
            }))
          }
        />
        {studentInputErr.studentName && (
          <p className="input-error">Enter a valid student name!</p>
        )}
      </div>
      <br />
      <div className="input-control">
        <input
          type="text"
          placeholder="Course"
          value={studentInput.course}
          onChange={(event) =>
            setStudentInput((prevStudentInput) => ({
              ...prevStudentInput,
              course: event.target.value,
            }))
          }
        />
        {studentInputErr.course && (
          <p className="input-error">Enter a valid course!</p>
        )}
      </div>
      <br />
      <div className="input-control">
        <input
          type="text"
          placeholder="Instructor"
          value={studentInput.instructor}
          onChange={(event) =>
            setStudentInput((prevStudentInput) => ({
              ...prevStudentInput,
              instructor: event.target.value,
            }))
          }
        />
        {studentInputErr.instructor && (
          <p className="input-error">Enter a valid instructor!</p>
        )}
      </div>
      <br />
      <button type="submit" value="Add Student" onClick={addStudent}>
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;
