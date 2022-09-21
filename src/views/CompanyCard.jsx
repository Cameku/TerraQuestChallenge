import React from "react";

const company = {
  Name: "Mercedes Bens",
  Address: "123 The Hide",
  Postcode: "MK14 8DD",
  Website: "https://www.elevatecare.co.uk/",
  Employees: "Buttom"
};

const CompanyCard = () => {
  return (
    <div>
      <h1> Welcome to the CompanyCard page</h1>

      <div className="container">
        <div className="card">
          <div>
            <p>Name: {company.Name}</p>
            <p>Address: {company.Address}</p>
            <p>Post Code: {company.Postcode}</p>
            <p>URL: {company.Website}</p>
            <p><button className='myButton' onClick={() => {}}>View Employees</button></p>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default CompanyCard;
