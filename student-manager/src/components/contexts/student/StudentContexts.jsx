// StudentContexts.jsx

import React, { createContext, useReducer, useEffect } from "react";
import useStudent from "../../hooks/students/useStudent";

export const StudentContext = createContext();

const initialState = {
  students: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "STUDENTS_REQUEST":
      return { ...state, isLoading: true };
    case "STUDENTS_SUCCESS":
      return { ...state, isLoading: false, students: action.payload };
    case "STUDENTS_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { getStudents, deleteStudent, createStudent } = useStudent();

  useEffect(() => {
    const fetchStudents = async () => {
      dispatch({ type: "STUDENTS_REQUEST" });
      try {
        const students = await getStudents();
        dispatch({ type: "STUDENTS_SUCCESS", payload: students });
      } catch (error) {
        dispatch({ type: "STUDENTS_ERROR", payload: error });
      }
    };

    fetchStudents();
  }, [getStudents]);

  const handleCreateStudent = async (student) => {
    const newStudent = await createStudent(student);
    dispatch({ type: "ADD_STUDENT", payload: newStudent });
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    dispatch({ type: "DELETE_STUDENT", payload: id });
  };

  const contextValue = {
    studentList: students,
    isLoading: isLoading,
    error: error,
    createStudent: handleCreateStudent,
    deleteStudent: handleDeleteStudent,
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};
