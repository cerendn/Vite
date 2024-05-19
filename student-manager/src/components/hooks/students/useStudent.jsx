import axios from "axios";
import { useState, useEffect, createContext } from "react";
import {
  postStudent,
  deleteStudent as deleteStudentAPI,
  getStudents as getStudentsAPI,
} from "../../../network/requests/studentRequests";

export const useStudent = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getStudents();
  }, []);
  const createStudent = async (student) => {
    try {
      setIsLoading(true);
      const newStudent = await postStudent(student);
      setStudentList((prevStudentList) => [...prevStudentList, newStudent]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteStudent = async (studentId) => {
    try {
      setIsLoading(true);
      await deleteStudentAPI(studentId);
      setStudentList((prevStudentList) => {
        return prevStudentList.filter((student) => student.id !== studentId);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudents = async () => {
    try {
      setIsLoading(true);
      const students = await getStudentsAPI();

      setStudentList(students);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); //sonsuz loading döngüsüne girmemesine için hata gelse de gelmese de bu flage geliyor
    }
  };

  return { studentList, isLoading, createStudent, deleteStudent, getStudents };
};

export default useStudent;
