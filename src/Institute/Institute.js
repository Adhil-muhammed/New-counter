import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditInstitute from "./Component/EditInstitute";
import AddInstitute from "./Containers/AddInstitute";
import{InstituteList} from "./Containers/InstituteList";
function Institute() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<InstituteList />} />
          <Route path="/create" element={<AddInstitute/>} />
          <Route path="/edit" element={<EditInstitute/>} />
        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default Institute;
