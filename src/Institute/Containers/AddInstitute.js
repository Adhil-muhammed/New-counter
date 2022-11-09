import React from "react";
import { UseInstitute } from "../hooks/UseInstitute";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddInstitute() {
  const { institute, setInstitute, createInstitute } = UseInstitute();
  const { name } = institute;
  const onSubmit = (e) => {
    e.preventDefault();
    createInstitute.mutate(institute);
  };
  return (
    <div>
      <Row className="g-2 mt-4">
        <Col md={6}>
          <form onSubmit={onSubmit}>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Enter course Name "
            >
              <Form.Control
                type="text"
                placeholder="Add Course"
                value={name}
                onChange={(e) => {
                  setInstitute((draft) => {
                    draft.name = e.target.value;
                  });
                }}
              />
            </FloatingLabel>
            <button className="btn btn-success">Create New</button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default AddInstitute;
