import { baseService } from "../services/baseService";

export const getStudents = async () => {
  try {
    const response = await baseService.get("/students");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("get students error:", error);
  }
};
//statusleri kontrol ettiğimiz alan
export const getStudentById = async (studentId) => {
  try {
    const response = await baseService.get(`/students/${studentId}`);
    return response.data;
  } catch (error) {
    console.error("get student by id error:", error);
  }
};
export const postStudent = async (newStudent) => {
  try {
    const response = await baseService.post("/students", newStudent);
    return response.data;
  } catch (error) {
    console.error("post student:", error);
  }
};
export const deleteStudent = async (studentId) => {
  try {
    const response = await baseService.delete(` /students/${studentId} `);
    return response.data;
  } catch (error) {
    console.error("delete student:", error);
  }
};
