import React from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {

    //change the variable names from fetchCars to something else
    
    const fetchCars = async () => {
      try {

        //Check the URLs: Is it port 3000 or 8000??
        
        let response = await axios.get('http://127.0.0.1:3000/api/home/', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });
        console.log(user);
        setCars(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className='container'>
      <h1>Home Page for {user.username}!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
