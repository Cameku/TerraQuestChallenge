import React from 'react';
import Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const CreateCompany = () => {

  const navigate = useNavigate();
  return (
    <div>
      <h1> Welcome to the CreateCompany page</h1>

      <Button className='myButton' onClick={ () => { navigate("/") }}>Back Home</Button>
    </div>
  )
}

export default CreateCompany;