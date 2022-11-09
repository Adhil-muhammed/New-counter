import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { UseInstitute } from "../hooks/UseInstitute";
import "../Api/Api";
import { Button } from "react-bootstrap";
import InstitutedFilter from "../Component/InstitutedFilter";
import { DeleteAlert } from "../Component/DeleteAlert";
import { SuccessAlert } from "../Component/SuccessAlert";

export const InstituteList = () => {
  const {
    Institutes,
    onDelete,
    isConfirmDelete,
    setIsConfirmDelete,
    onConfirm,
    alertHandler,
  } = UseInstitute();
  const location = useLocation()
  const history = useNavigate()

  const onEdit = () => {
    history(`${location.pathname}edit`);
  };
  return (
    <>
      <InstitutedFilter />
      <DeleteAlert
        show={isConfirmDelete}
        handleClose={() => setIsConfirmDelete(false)}
        onConfirm={onConfirm}
      />
      {alertHandler && <SuccessAlert />}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Course Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Institutes.data?.map((obj, index) => (
            <tr key={obj.instituteId}>
              <td>{index}</td>

              <td>{obj.name}</td>
              <td>
                {
                  <>
                    <Button className="mt-2" variant="primary" onClick={onEdit}>
                      edite
                    </Button>
                    <Button
                      className="mt-2"
                      variant="danger"
                      onClick={() => {
                        onDelete(obj.instituteId);
                      }}
                    >
                      Delete
                    </Button>
                  </>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
