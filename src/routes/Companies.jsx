import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CompanyCard from '../views/CompanyCard';
import ErrorPage from '../pages/ErrorPage';


const Companies = () => {

  const[companyData, setCompanyData] = useState([]);

  const getCompanyData = async () => {
    const res = await fetch(
     "https://tqinterviewapi.azurewebsites.net/api/Companies?key="+localStorage.getItem("key").slice(1,-1));
      if(res.status !== 200) {
       // alert("There was a problem!")
      } else {
         const data = await res.json();
         console.log(data);
         setCompanyData(data);
      } 
}

  useEffect(() => {

  getCompanyData();

  }, []);

  console.log("Local storage Key: "+localStorage.getItem("key").toString());

  return (
    <div  className="App">
        
        <h3> Welcome to the Companies page</h3>
        {/* <Button className='myButton' onClick={getCompanyData}>Get Companies</Button> */}

        <p>The list of companies</p>
        {
          companyData?.length > 0 ? (
            <div className='container'>
            {
              companyData.map((company) => (
                <CompanyCard  company={company} />
              ))
            }
         
          </div>

          ) : (
            <div>
              <ErrorPage />
            </div>
          )
        }
      
        <Button className='myButton'>Create Company</Button>
    </div>
  )
}

export default Companies;