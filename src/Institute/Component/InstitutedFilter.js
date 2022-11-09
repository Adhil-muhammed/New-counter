import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const InstitutedFilter = () => {
  const history = useNavigate();
  const location = useLocation();
  const gotoCreate = () => {
    history(`${location.pathname}create`);
  };
  return (
    <React.Fragment>
      <Button className="mb-5" onClick={gotoCreate}>
        Create New
      </Button>
    </React.Fragment>
  );
};

export default InstitutedFilter;
