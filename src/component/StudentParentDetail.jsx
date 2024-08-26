import React, { useContext, useState } from "react";
import { StudentContext } from "../main";

const StudentParentDetail = ({ setCurrent }) => {
  const [parentDetail, setParentDetail] = useState({
    fatherName: "",
    fatherQuali: "",
    fatherOccup: "",
    fatherIncome: "",
    fatherEmail: "",
    fatherNumber: "",
    motherName: "",
    motherQuali: "",
    motherOccup: "",
    motherIncome: "",
    motherEmail: "",
    motherNumber: "",
  });

  const { studentData, setStudentData } = useContext(StudentContext);

  console.log(studentData, "in pd");

  const handleParentChange = (e) => {
    const { name, value } = e.target;
    setParentDetail((prev) => ({ ...prev, [name]: value }));
  };

  const parentDetailData = () => {
    setCurrent((prev) => prev + 1);
    setStudentData((prev) => ({ ...prev, ...parentDetail }));
  };

  return (
    <>
      <h3>Parent Details</h3>
      <hr />
      <form>
        <fieldset>
          <div className="mb-4">
            <label htmlFor="fathername" className="form-label">
              Father Name
            </label>
            <input
              name="fatherName"
              type="text"
              id="fathername"
              className="form-control"
              placeholder="Father Name"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Qualification" className="form-label">
              Qualification
            </label>
            <input
              name="fatherQuali"
              type="text"
              id="qualification"
              className="form-control"
              placeholder="Qualification"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Occupation" className="form-label">
              Occupation
            </label>
            <input
              name="fatherOccup"
              type="text"
              id="occupation"
              className="form-control"
              placeholder="Occupation"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="annualIncome" className="form-label">
              Annual Income
            </label>
            <input
              name="fatherIncome"
              type="number"
              id="income"
              className="form-control"
              placeholder="Annual Income"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email Id
            </label>
            <input
              name="fatherEmail"
              type="email"
              id="email"
              className="form-control"
              placeholder="Email Id"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              name="fatherNumber"
              type="number"
              id="mobileNumber"
              className="form-control"
              placeholder="Mobile Number"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mothername" className="form-label">
              Mother Name
            </label>
            <input
              name="motherName"
              type="text"
              id="mothername"
              className="form-control"
              placeholder="Mother Name "
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Qualification" className="form-label">
              Qualification
            </label>
            <input
              name="motherQuali"
              type="text"
              id="qualification"
              className="form-control"
              placeholder="Qualification"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Occupation" className="form-label">
              Occupation
            </label>
            <input
              name="motherOccup"
              type="text"
              id="occupation"
              className="form-control"
              placeholder="Occupation"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="annualIncome" className="form-label">
              Annual Income
            </label>
            <input
              name="motherIncome"
              type="number"
              id="income"
              className="form-control"
              placeholder="Annual Income"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email Id
            </label>
            <input
              name="motherEmail"
              type="email"
              id="email"
              className="form-control"
              placeholder="Email Id"
              onChange={handleParentChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              name="motherNumber"
              type="number"
              id="mobileNumber"
              className="form-control"
              placeholder="Mobile Number"
              onChange={handleParentChange}
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
            type="button"
            className="btn btn-primary"
            onClick={() => parentDetailData()}
          >
            Continue
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default StudentParentDetail;
