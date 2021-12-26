import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Student } from "../Data";
import "./FormEdit.css";
import { useNavigate } from "react-router-dom";

interface Props {
  handleProcess(student: Student | null): void;
  studentEdit: Student | null;
}

export const FormEdit: React.FC<Props> = (props) => {
  const [student, setStudent] = useState<Student | null>(null);
  const redirect = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.handleProcess(student);
    redirect("/");
  };

  const handleChange = (event: any) => {
    const {name , value} = event.target;
    setStudent({ ...student, [name]: value } as Student);
  };

  useEffect(() => {
    setStudent(props.studentEdit);
  }, [props.studentEdit]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-edit">
          <div className="title">Edit Student</div>
          <div className="form">
            <div className="input_field">
              <label className="form_label">STT :</label>
              <input
                disabled
                type="text"
                className="input readOnly"
                placeholder="STT..."
                name="id"
                value={student?.id ?? ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input_field">
              <label className="form_label">Full Name :</label>
              <input
                type="text"
                className="input"
                placeholder="Fullname..."
                name="fullname"
                value={student?.fullname ?? ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input_field">
              <label className="form_label">Address :</label>
              <input
                type="text"
                className="input"
                placeholder="Address..."
                name="address"
                value={student?.address ?? ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input_field">
              <label className="form_label">Age :</label>
              <input
                type="text"
                className="input"
                placeholder="Your age..."
                name="age"
                value={student?.age ?? ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input_field">
              <label className="form_label">Email :</label>
              <input
                type="text"
                className="input"
                placeholder="example@gmail.com"
                name="email"
                value={student?.email ?? ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input_field">
              <label className="form_label">Phone :</label>
              <input
                type="text"
                className="input"
                placeholder="Number phone..."
                name="phone"
                value={student?.phone ?? ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input_field">
              <label className="form_label">Gender :</label>
              <div className="custom_select">
                <select
                  id="cars"
                  name="gender"
                  value={student?.gender ?? ""}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">-------- Select --------</option>
                  <option value="nam">Male</option>
                  <option value="nu">Female</option>
                </select>
              </div>
            </div>
            <div className="input_field">
              <div className="form_label"></div>
              <div className="input button_submit">
                <Button type="submit" className="btn btn-edit">
                  {props.studentEdit ? "Edit" : "Add"}
                </Button>
                <Button type="reset" className="btn btn-success">
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
