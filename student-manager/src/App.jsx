import { useState } from 'react'
import './App.css';

function App() {
  const [students, setStudents] = useState([ ]);
  const [studentInput,setStudentInput] = useState({name:"",course:"",instructor:""});

   //error states
  const [studentError, setStudentError] = useState({ name: false, course: false, instructor: false });


  return (
    <>
    <main>
      <h2>Student Manager</h2>
      <form action="" className='students'>
        <div className="input">
          <input type="text" placeholder="Name" value={studentInput.name}
          onChange={(event) =>
            setStudentInput({ ...students, name: event.target.value })}/>
          {studentError.name &&  <p className='input-error'>Enter a valid name</p>}  
          </div>
          <br />
        <div className="input">
          <input type="text" placeholder="Course" value={studentInput.course} 
          onChange={(event) => 
          setStudentInput({...students, course: event.target.value})}/>
          {studentError.course && <p className='input-error'>Enter a valid course</p>}       
          </div>
          <br />
        <div className="input">
          <input type="text" placeholder="Instructor" value={studentInput.instructor} 
          onChange={(event) =>
          setStudentInput({...students,instructor : event.target.value})}/>
          {studentError.instructor && <p className='input-error'>Enter a valid instructor</p>}
          </div>
          <br />
        <button>Add Student</button>
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

export default App ;
