import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";

function App() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:5050/students`);
      const data = await response.json();
      setStudentList(data);
    };
    getData();
  }, []);

  const createStudent = (student) => {
    setStudentList([...studentList, { ...student, id: Date.now().toString() }]);
  };

  return (
    <main>
      <Header
        title="Student Manager"
        navElements={["About Us", "Profile", "Contact"]}
      />
      <StudentForm createStudent={createStudent} />
      <StudentList studentList={studentList} />
    </main>
  );
}

export default App;
