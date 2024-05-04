

const StudentForm = ({ studentInput, setStudentInput, studentInputErr, addStudent }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submit işlemleri burada gerçekleştirilecek
        addStudent(event);
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <div className="input-control">
                <input
                    type="text"
                    placeholder="Student Name"
                    value={studentInput.studentName}
                    onChange={(event) => setStudentInput(prevStudentInput => ({ ...prevStudentInput, studentName: event.target.value }))}
                />
                {studentInputErr.studentName && <p className="input-error">Enter a valid student name!</p>}
            </div>
            <div className="input-control">
                <input
                    type="text"
                    placeholder="Course"
                    value={studentInput.course}
                    onChange={(event) => setStudentInput(prevStudentInput => ({ ...prevStudentInput, course: event.target.value }))}
                />
                {studentInputErr.course && <p className="input-error">Enter a valid course!</p>}
            </div>
            <div className="input-control">
                <input
                    type="text"
                    placeholder="Instructor"
                    value={studentInput.instructor}
                    onChange={(event) => setStudentInput(prevStudentInput => ({ ...prevStudentInput, instructor: event.target.value }))}
                />
                {studentInputErr.instructor && <p className="input-error">Enter a valid instructor!</p>}
            </div>
            <input type="submit" value="Add Student" />
        </form>
    );
};

export default StudentForm;
