import { useState } from 'react'
import './App.css';

function App() {
  const [students, setStudents] = useState([
    {
      studentName: "Ceren",
      course: "React",
      instructor: "Orkun  Durmaz",
      id: "1",
    },
    {
      studentName: "Ege",
      course: "JavaScript",
      instructor: "Orkun  Durmaz",
      id: "2",
    },
    {
      studentName: "Berkay",
      course: "Node.js",
      instructor: "Orkun  Durmaz",
      id: "3",
    },
    {
      studentName: "Barkın",
      course: "Django",
      instructor: "Orkun  Durmaz",
      id: "4",
    },
  ]);
  const [studentInput,setStudentInput] = useState({name:"",course:"",instructor:""});

  return (
    <>
    <main>
      <h2>Student Manager</h2>
      <form action="" className='students'>
        <div className="input">
          <input type="text" placeholder="name" value={studentInput.name}
          onChange={(event) =>
            setStudents({ ...prevstudentList, name: event.target.value })}/>
          <p className='input-error'>Enter a valid name</p>
          </div>
        <div className="input">
          <input type="text" placeholder="course"  />
          <p className='input-error'>Enter a valid course</p>
          </div>
        <div className="input">
          <input type="text" placeholder="instructor" />
          <p className='input-error'>Enter a valid instructor</p>
          </div>
        <button>Submit</button>
      </form>
      <div className="student-list">
        <h3>Student List</h3>
        {students.map(student => {
          return(
            <div className='student-card'>
            <ul>
            <li> {studentInput.name}  </li>
            <li> {studentInput.course} </li>
            <li> {studentInput.instructor}</li>
          </ul>
          </div>
         ) } 
        )} 
       
        
      </div>
    </main>
    </>
  )
}

export default App
