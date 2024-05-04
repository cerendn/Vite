import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StudentList from './components/app/student-list/StudentList';
import StudentForm from './components/app/student-form/StudentForm';

function App() {
  const [studentList, setStudentList] = useState([
    { studentName: "Barkin Onay Sayin", course: "Onay Teknikleri", instructor: "Hicran Ertugral", id: "001" },
    { studentName: "Ali Riza Taskiran", course: "JavaScript", instructor: "Buse Ugras", id: "002" },
    { studentName: "Berkay Turna", course: "React", instructor: "Orun Durmaz", id: "003" },
    { studentName: "Cenk Kaynak", course: "Html Css", instructor: "Orkun Durmaz", id: "004" },
  ]);

  const [studentInput, setStudentInput] = useState({ studentName: "", course: "", instructor: "" });
  const [studentInputErr, setStudentInputErr] = useState({ studentName: false, course: false, instructor: false });

  const addStudent = (event) => {
    event.preventDefault();

    setStudentInputErr({ studentName: false, course: false, instructor: false });

    if (studentInput.studentName.trim() && studentInput.course.trim() && studentInput.instructor.trim()) {
      setStudentList([...studentList, { ...studentInput, id: Date.now().toString() }]);
      setStudentInput({ studentName: "", course: "", instructor: "" });
    } else {
      !studentInput.studentName.trim() && setStudentInputErr(prevStudentInputErr => ({ ...prevStudentInputErr, studentName: true }));
      !studentInput.course.trim() && setStudentInputErr(prevStudentInputErr => ({ ...prevStudentInputErr, course: true }));
      !studentInput.instructor.trim() && setStudentInputErr(prevStudentInputErr => ({ ...prevStudentInputErr, instructor: true }));
    }
  };

  return (
    <main>
      <Header title='Student Manager' navElements={['About Us','Profile','Contact']} />
     <StudentForm 
  studentInput={studentInput}
  setStudentInput={setStudentInput}
  studentInputErr={studentInputErr}
  addStudent={addStudent}
/>
      <StudentList studentList={studentList} />
    </main>
  );
}

export default App;
