import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/app/student-list/StudentList";
import StudentForm from "./components/app/student-form/StudentForm";
import { StudentProvider } from "./components/contexts/student/StudentContexts";
import axios from "axios";

function App() {
  return (
    <StudentProvider>
      <Header
        title="Student Manager"
        navElements={["Profile", "Transcript", "Contact"]}
      />

      <StudentForm />

      <StudentList />
    </StudentProvider>
  );
}

export default App;
