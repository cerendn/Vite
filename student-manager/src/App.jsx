import "./App.css";
import Header from "./components/shared/header-page/Header";
import { StudentProvider } from "./components/contexts/student/StudentContexts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/shared/landing-page/LandingPage";
import StudentListPage from "./pages/app/student/student-list-page/StudentListPage";
import NewStudentPage from "./pages/app/student/new-student-page/NewStudentPage";
import NotFoundPage from "./components/shared/not-found-page/NotFoundPage";
// import Reducer from "./pages/Reducer";

function App() {
  return (
    <Router>
      <StudentProvider>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/students/new" element={<NewStudentPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="/students/reducer" element={<Reducer />} /> */}
        </Routes>
      </StudentProvider>
    </Router>
  );
}

export default App;
