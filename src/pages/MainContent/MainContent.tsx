import React from "react";
import { Link } from "react-router-dom";
import "./MainContent.css";
import { Student } from "../Data";

interface Props {
  studentList: Array<Student>;
  handleUpdate(id: number): void;
  handleDelete(id: number): void;
}

export const MainContent: React.FC<Props> = (props) => {
  return (
    <div className="content">
      <div className="container">
        <h1 className="title">List Students</h1>
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
            {props.studentList.map((student, index) => {
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
            })}
          </tbody>
        </table>
        <div>
          <Link to="/add" className="nav-link text-light">
            <button type="button" className="btn btn-success">Create new students</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
