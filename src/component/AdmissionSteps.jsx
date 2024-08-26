import React from "react";
import { Steps } from "antd";
import { useState } from "react";

import StudentDetail from "./StudentDetail";
import StudentParentDetail from "./StudentParentDetail";
import StudentPersonalDetail from "./StudentPersonalDetail";

const description = "All fields are mandatory";

const AdmissionSteps = () => {
  const [current, setCurrent] = useState(0);

  const formData = [
    <StudentDetail setCurrent={setCurrent} />,
    <StudentParentDetail setCurrent={setCurrent} />,
    <StudentPersonalDetail setCurrent={setCurrent} />,
  ];
  return (
    <>
      <h1>Admission Form</h1>
      <hr />
      <Steps
        current={current}
        items={[
          {
            title: "Student Details",
            description,
          },
          {
            title: "Parent Details",
            description,
          },
          {
            title: "Personal Details",
            description,
          },
        ]}
      />
      {formData[current]}
    </>
  );
};
export default AdmissionSteps;
