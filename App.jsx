import React from "react";
import { useState } from "react";
import Heading from "./components/Heading";
import AddStudent from "./components/AddStudent";
import AllDetails from "./components/AllDetails";
import StudentsSummary from "./components/StudentsSummary";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Anupam", score: 75 },
    { id: 2, name: "Riya", score: 35 }
  ]);

  const addStudent = (name, score) => {
    setStudents([...students, { id: Date.now(), name, score }]);
  };

  const updateScore = (id, newScore) => {
    setStudents(
      students.map(s =>
        s.id === id ? { ...s, score: Number(newScore) } : s
      )
    );
  };

  return (
    <div>
      <Heading />
      <StudentsSummary students={students} />
      <AddStudent addStudent={addStudent} />
      <AllDetails students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;