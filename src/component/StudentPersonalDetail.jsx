import React, { useContext, useState } from "react";
import { StudentContext } from "../main";

const StudentPersonalDetail = ({ setCurrent }) => {
  const [personalDetail, setPersonalDetail] = useState({
    dob: "",
    aadhar: 0,
    placeBirth: "",
    address: "",
    city: "",
    state: "",
    pinCoe: "",
  });

  const { studentData, studentsList, setStudentsList } =
    useContext(StudentContext);
  console.log(studentData, "in personal");
  console.log(studentsList, "Students");

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetail((prev) => ({ ...prev, [name]: value }));
  };

  const personalDetailData = (e) => {
    e.preventDefault();
    // setStudentData((prev) => ({ ...prev, ...personalDetail }));

    setStudentsList((prev) => [...prev, { ...studentData, ...personalDetail }]);
  };

  return (
    <>
      <h3>Student Personal Detail</h3>
      <hr />
      <form>
        <fieldset>
          <div className="mb-4">
            <label htmlFor="dob" className="form-label">
              Student Date of Birth
            </label>
            <input
              name="dob"
              type="date"
              id="dob"
              className="form-control"
              placeholder="Student Date of Birth"
              onChange={handlePersonalChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="aadharNumber" className="form-label">
              Aadhar Number
            </label>
            <input
              name="aadhar"
              type="number"
              id="aadharNumber"
              className="form-control"
              placeholder="Aadhar Number"
              onChange={handlePersonalChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="placeofBirth" className="form-label">
              Place of Birth
            </label>
            <input
              name="placeBirth"
              type="text"
              id="placeofBirth"
              className="form-control"
              placeholder="Place of Birth"
              onChange={handlePersonalChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              name="address"
              type="text"
              id="address"
              className="form-control"
              placeholder="Address"
              onChange={handlePersonalChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              name="city"
              type="text"
              id="city"
              className="form-control"
              placeholder="City"
              onChange={handlePersonalChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              name="state"
              type="text"
              id="state"
              className="form-control"
              placeholder=" State"
              onChange={handlePersonalChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="pincode" className="form-label">
              Pin Code
            </label>
            <input
              name="pinCoe"
              type="number"
              id="pincode"
              className="form-control"
              placeholder="Pin Code"
              onChange={handlePersonalChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCurrent((prev) => prev - 1)}
          >
            Previous
          </button>

          <button
            type="submit"
            className="btn btn-primary "
            onClick={(e) => personalDetailData(e)}
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default StudentPersonalDetail;
