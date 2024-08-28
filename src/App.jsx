import "./App.css";
import { Route, Routes } from "react-router-dom";
import { StudentContext } from "./main";
import AdmissionSteps from "./component/AdmissionSteps";
import { useState } from "react";
import Navbar from "./component/Navbar";
import StudentLists from "./component/StudentLists";
import Home from "./component/Home";
import { StudentData } from "./assets/StudentData";

function App() {
  const [studentData, setStudentData] = useState({});

  const [studentsList, setStudentsList] = useState(StudentData);
  return (
    <StudentContext.Provider
      value={{ studentData, setStudentData, studentsList, setStudentsList }}
    >
      <>
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<StudentLists />} />
            <Route path="/form" element={<AdmissionSteps />} />
          </Routes>
        </div>
      </>
    </StudentContext.Provider>
  );
}

export default App;
