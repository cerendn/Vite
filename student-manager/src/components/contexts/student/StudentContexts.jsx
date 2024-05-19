import { createContext, useEffect } from "react";
import useStudent from "../../hooks/students/useStudent";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const { studentList, isLoading, getStudents, deleteStudent, createStudent } =
    useStudent();
  useEffect(() => {
    getStudents();
  }, []); //studentsList'in gelip calısması için
  const contextValue = {
    studentList,
    isLoading,
    getStudents,
    deleteStudent,
    createStudent,
  };
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
