import React, { useContext, useMemo, useState } from "react";
import { StudentContext } from "../main";
import { SearchBox } from "./StudentLists.styles";

const StudentLists = () => {
  const { studentsList } = useContext(StudentContext);

  const [searchTerm, setSearchTerm] = useState("");

  const studFilter = useMemo(
    () =>
      studentsList.filter((stud) =>
        stud.studName.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  return (
    <>
      <h1>Students List</h1>
      <hr />

      <div className="row">
        <div className="col">
          <SearchBox
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <section>
            <table className="table table-light">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Standard</th>
                </tr>
              </thead>
              <tbody>
                {studFilter?.map((student, index) => (
                  <tr key={index}>
                    <td>{student.studName}</td>
                    <td>{student.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default StudentLists;
