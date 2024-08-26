import React, { useContext, useState } from "react";
import { StudentContext } from "../main";

const StudentDetail = ({ setCurrent }) => {
  const [studData, setStudData] = useState({
    studName: "",
    studSurname: "",
    schoolName: "",
    standard: 0,
  });

  const { setStudentData } = useContext(StudentContext);

  const handleStudDataChange = (e) => {
    const { name, value } = e.target;
    setStudData((prev) => ({ ...prev, [name]: value }));
  };

  const studtentDetailData = () => {
    setCurrent((prev) => prev + 1);
    setStudentData((prev) => ({ ...prev, ...studData }));
  };
  return (
    <>
      <hr />
      <form>
        <fieldset>
          <div className="mb-4">
            <label htmlFor="firstname" className="form-label">
              Student First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="studName"
              className="form-control"
              placeholder="Student First Name"
              onChange={handleStudDataChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="firstname" className="form-label">
              Student SurName
            </label>
            <input
              name="studSurname"
              type="text"
              id="surname"
              className="form-control"
              placeholder="Student SurName"
              onChange={handleStudDataChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastschool" className="form-label">
              Name of the School Last Attended
            </label>
            <input
              name="schoolName"
              type="text"
              id="lastschool"
              className="form-control"
              placeholder="Name of the School Last Attended"
              onChange={handleStudDataChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="Standard" className="form-label">
              Standard to which admission is sought
            </label>
            <input
              name="standard"
              type="number"
              id="standard"
              className="form-control"
              placeholder="Standard to which Admission is sought"
              onChange={handleStudDataChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => studtentDetailData()}
          >
            Continue
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default StudentDetail;
