import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";
import { Student } from "../Data";

interface Props {
  studentList: Array<Student>;
  handleUpdate(id: number): void;
  handleDelete(id: number): void;
  handleSearch: (value: string) => void;
  handleSort: (type: string) => void;
}

export const MainContent: React.FC<Props> = (props) => {
  //action search
  const [valueInput, setValueInput] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (valueInput.trim()) {
      props.handleSearch(valueInput);
    }
    setValueInput("");
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
    // console.log(event.target.value);
  };

  //action sort
  const [type, setType] = useState<string>("");
  function handleSort(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.options[event.target.selectedIndex].value;
    if (value) {
      setType(value);
      props.handleSort(value);
    }
  }
  return (
    <div className="content">
      <div className="container">
        <h1 className="title">List Students</h1>

        {/* Select sort */}
        <select onChange={handleSort}>
          <option value="">Select field to sort</option>
          <option value="id">Id</option>
          <option value="fullname">fullname</option>
          <option value="email">email</option>
        </select>

        {/* Select Search */}
        <form action="" onSubmit={handleSearch}>
          <div className="form-group">
            <input
              className="input"
              value={valueInput}
              type="text"
              placeholder="Search...."
              onChange={handleChangeInput}
            />
            <button type="submit" className="submit">
              Search
            </button>
          </div>
        </form>
        <table className="content-table-lists">
          <thead>
            <tr>
              <th>STT</th>
              <th>Fullname</th>
              <th>Address</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.studentList.length > 0 ? (
              props.studentList.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student.id}</td>
                    <td>{student.fullname}</td>
                    <td>{student.address ?? ""}</td>
                    <td>{student.age ?? ""}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.gender ?? ""}</td>
                    <td>
                      <Link to="/edit" className="nav-link text-light">
                        <button
                          className="btn btn-edit"
                          onClick={() => {
                            props.handleUpdate(student.id);
                          }}
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        className="btn btn-delete"
                        onClick={() => props.handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3}>no users</td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <Link to="/add" className="nav-link text-light">
            <button type="button" className="btn btn-success">
              Create new students
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
