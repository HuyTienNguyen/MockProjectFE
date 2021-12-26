import React, { useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { MainHeader, MainContent, FormEdit } from "./pages/index.js";
import { Route, Routes } from "react-router-dom";
import { ListDataStudent, Student } from "./pages/Data";

function App() {
  const [studentList, setStudentList] =
    useState<Array<Student>>(ListDataStudent);
  const [studentEdit, setStudentEdit] = useState<Student | null>(null);

  const handleUpdate = (id: number) => {
    const studentEditById = studentList.find((e: Student) => {
      if (e.id === id) {
        return e;
      }
    });
    if (studentEditById) setStudentEdit(studentEditById);
  };

  const handleDelete = (id: number): void => {
    setStudentList(() => {
      return studentList.filter((e) => e.id !== id)
    })
  };

  const handleAdd = (student: Student): void => {
    if (student?.id !== undefined){
      const studentListEdit = studentList.map((e) => {
        if(e.id === student.id){
          return student;
        }
        return e;
      })
      setStudentList(studentListEdit);
    } else {
      const idItem = studentList.slice(-1)[0].id + 1;
      student.id = idItem;
      setStudentList([...studentList, student]);
    }
  };

  return (
    <>
      <GlobalStyles>
        <MainHeader />
      </GlobalStyles>
      <Routes>
        <Route
          path="/"
          element={
            <MainContent
              studentList={studentList}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          }
        ></Route>
        <Route path="/add" element={<FormEdit handleProcess={handleAdd} studentEdit={null} />}></Route>
        <Route path="/edit" element={<FormEdit handleProcess={handleAdd} studentEdit={studentEdit as Student} />}></Route>
      </Routes>
    </>
  );
}

export default App;
