import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cities = [
  'Jalandhar', 'Amritsar', 'Mohali', 'Ludhiana', 'Patiala', 'Gurdaspur', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad'
];

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to the teachers page
    navigate('/teachers'); // Use the navigate function with the desired route path
  };
 const [newTeacher,setnewTeacher] = useState();
 const clickAddTutor = (e)=>{
     navigate('/RegisterTeacher')
 }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="max-w-xl w-full px-4 py-8 flex items-center justify-center bg-white rounded-lg shadow-lg mt-4    ">
        <div className="max-w-sm w-full mr-8 mt-11 ">
          <img className='w-full rounded-t-lg' src='https://assets-global.website-files.com/64fb1ecdb172d34a9b9f0cd5/65a54afc5dbdc35e287d48e7_pear-deck-tutor-hero.webp' alt="Tutor Hero" />
          <div className="mb-8 text-center mt-4">
            Every student has the potential to shine. Let us help you reach your brightest.
          </div>
        </div>
        <div className="max-w-sm w-full">
          <div className="mb-4 text-center">
            Ready to take the next step? Enter your city to find the perfect tutor for you!
          </div>
          <form className="flex flex-col items-center">
          
            <input type='text ' id = " location" placeholder='Enter the Subject' className='p-2'  />
            <label htmlFor="city" className="mb-2">Enter Your City:</label>
            <select
              id="city"
              name="city"
              value={selectedCity}
              onChange={handleCityChange}
              className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline mb-4"
            >
              <option value="">Select a city...</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
             
            </select>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-full max-w-2xl mt-8 bg-blue-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to share your expertise and inspire others Become a tutor now!</h2>
        <p className="text-lg text-gray-800 mb-4">
          Somewhere there's a student that needs your 1:1 help. Pear Deck Tutor is reimagining the way students access and receive high-quality, personalized tutoring. Join our community of tutors and make a real difference in the lives of students around the country.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clickAddTutor}>
          Become a Tutor
        </button>
      </div>
    </div>
  );
};

export default Home;
