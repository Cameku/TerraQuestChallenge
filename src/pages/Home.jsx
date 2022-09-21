import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Button  from 'react-bootstrap/Button';

let apiString = [];
const useLocalState = (key) => {
 
  const [value, setValue] = useState(() => {
    if(typeof window !== "undefined"){
      const savedData = window.localStorage.getItem(key);
      
      if(savedData !== null) {
        
       apiString.push(savedData);

       // return JSON.parse(savedData);
      }
    }
   // return JSON.parse(apiString);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value])

  return [value, setValue];
}


const Home = () => {

  const [data, setData] =  useLocalState('key', "");

  const getData = () => {
    Axios.get("https://tqinterviewapi.azurewebsites.net/api/Companies/key").then((response) => {
      setData(response.data);
      console.log(response.data);
    }); 
  }
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div  className="App">
      <div>
          <h1>Terra Quest React Challenge </h1>
        </div>
      <Button className='myButton' onClick={getData}>Click to get key</Button><br />
      <div className='myData'><p>The key is: </p>
         {data}
      </div>

      <Button className='myButton' onClick={ () => { navigate("/Companies") }}>Companies</Button>
      <Button className='myButton' onClick={ () => { navigate("/CompanyCard") }}>Company Card</Button>
      <Button className='myButton' onClick={ () => { navigate("/CreateCompany") }}>Create Company</Button>
    </div>
  )
}

export default Home;