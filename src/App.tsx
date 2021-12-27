import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { MainHeader, MainContent, FormEdit } from "./pages/index.js";
import { Route, Routes } from "react-router-dom";
import { ListDataStudent, Student } from "./pages/Data";

function App() {
  const [studentList, setStudentList] =
    useState<Array<Student>>(ListDataStudent);
    const [dataBackup, setDataBackup] =
    useState<Array<Student>>(ListDataStudent);
  const [studentEdit, setStudentEdit] = useState<Student | null>(null);
  const [filterSort, setFilterSort] = useState<string | number>("");
  const [filterSearch, setFilterSearch] = useState<string>("");

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
      return studentList.filter((e) => e.id !== id);
    });
  };

  const handleAdd = (student: Student): void => {
    if (student?.id !== undefined) {
      const studentListEdit = studentList.map((e) => {
        if (e.id === student.id) {
          return student;
        }
        return e;
      });
      setStudentList(studentListEdit);
    } else {
      const idItem = studentList.slice(-1)[0].id + 1;
      student.id = idItem;
      setStudentList([...studentList, student]);
    }
  };

  useEffect(() => {
    let sorted = studentList;
    if (filterSearch.trim() === "all") {
      console.log('all')
      sorted = dataBackup;
    } else if (filterSearch) {
      setDataBackup(studentList);
      sorted = sorted.filter((item: any) => {
        if (
          item.id === parseInt(filterSearch) ||
          item.fullname === filterSearch ||
          item.email === filterSearch ||
          item.phone === filterSearch
        ) {
          return item;
        }
      });
    }
    if (filterSort) {
      sorted = sorted.sort((a: any, b: any) => {
        if (a[filterSort] > b[filterSort]) return 1;
        else if (a[filterSort] < b[filterSort]) return -1;
        return 0;
      });
    }
    setStudentList([...sorted]);
  }, [filterSort, filterSearch]);

  const handleSort = (type: string | number) => {
    setFilterSort(type);
  };

  const handleSearch = (input: string) => {
    setFilterSearch(input.toLowerCase());
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
              handleSort={handleSort}
              handleSearch={handleSearch}
            />
          }
        ></Route>
        <Route
          path="/add"
          element={<FormEdit handleProcess={handleAdd} studentEdit={null} />}
        ></Route>
        <Route
          path="/edit"
          element={
            <FormEdit
              handleProcess={handleAdd}
              studentEdit={studentEdit as Student}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
