import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'


let apiString = [];
const useLocalState = (key) => {
 
  const [value, setValue] = useState(() => {
    if(typeof window !== "undefined"){
      const savedData = window.localStorage.getItem(key);
      
      if(savedData !== null) {
        
       apiString.push(savedData);

        return JSON.parse(savedData);
      }
    }
    return JSON.parse(apiString);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value])

  return [value, setValue];
}


const Home = () => {

  const [data, setData] =  useLocalState('key', "")

  const getData = () => {
    Axios.get("https://tqinterviewapi.azurewebsites.net/api/Companies/key").then((response) => {
      
      console.log(response);
      setData(response.data);
    }); 
  }
  const navigate = useNavigate();
  return (
    <div  className="App">
      <div>
          <h1>Terra Quest React Challenge </h1>
        </div>
      <button className='myButton' onClick={getData}>Get Data</button><br />
      <div className='myData'>
         {data}
      </div>

      <button className='myButton' onClick={ () => { navigate("/Companies") }}>Companies</button>
      <button className='myButton' onClick={ () => { navigate("/CompanyCard") }}>Company Card</button>
      <button className='myButton' onClick={ () => { navigate("/CreateCompany") }}>Create Company</button>
    </div>
  )
}

export default Home;