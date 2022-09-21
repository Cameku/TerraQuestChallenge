import { Axios } from "axios";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



const CompanyCard = ({ company }) => {
  return (
    <div>
      {/* <h1> Welcome to the CompanyCard page</h1> */}

      <div className="container">
        <div className="myCard">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>Company card</Card.Title>
              <br />
              <br />
              <Card.Text>Name: {company.name}</Card.Text>
              <Card.Text>Address: {company.address}</Card.Text>
              <Card.Text>Post Code: {company.url}</Card.Text>
    
              <Button variant="success">View Employees</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
