// SignupPage.js
import React, { useState } from 'react';
const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const corsOptions = {
    origin: 'http://localhost:5173', // Allow requests from your React application origin
    methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers in requests
  };
  
  const handleSubmit =  async (e) => {
      e.preventDefault();
      try {
        console.log("entry")
        const response = await fetch('http://localhost:3000/api/v1/signup', {
         
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:  JSON.stringify({
            name:name,
            email:email,
            password:password,
            role:role,
          })
        
        });
    console.log(response)
        if (response.ok) {
          const data = await response.json();
          if (data) {
            console.log('Signup successful:', data);
            // Redirect to another page or handle success scenario
          } else {
            console.error('Empty response received after signup');
            // Handle empty response scenario
          }
        } else {
          console.error('Signup failed:', response.statusText);
          // Handle failure scenario, display error message, etc.
        }
      } catch (error) {
        console.error('Error signing up:', error);
        // Handle
    }
    
  };
  


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mt-10">Sign Up</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 top-20"  onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name</label>
              <div className="mt-1">
                <input
                  id="firstName"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  
                  onChange={(e) => {
                      setName(e.target.value)
                  }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">email</label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="email"
                  type="text"
                  autoComplete="family-name"
                
                  onChange={(e) => {
                    setEmail(e.target.value)
                }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">password</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="password"
                  type="password"
                  autoComplete="email"
                 
                  onChange={(e) => {
                    setPassword(e.target.value)
                }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">role</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="role"
                  type="text"
                  autoComplete="new-password"
                  
                  onChange={(e) => {
                    setRole(e.target.value)
                }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            {/* <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
