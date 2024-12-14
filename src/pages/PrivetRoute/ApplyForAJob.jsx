import React, { useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import UseAuth from '../../components/Hooks/UseAuth';
const ApplyForAJob = () => {
    // 
    const {user} = UseAuth();
    // 
    const {id} = useParams();
    const [formData, setFormData] = useState({
        applicantEmail: "",
        gitLink: "",
        linkdInLink: "",
        resumeLinks: "",
        job_id:id,
        userEmail:user?.email,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    // 
      const handleSubmit = (e) => {
        e.preventDefault();
        //  
        axios.post('http://localhost:5000/application', formData )
        .then(data => console.log(data.data))
        .catch(err=>{
            console.log(err.message)
        })

      };
    
      return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Form with Links and Email</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
               Fresh Email Address
              </label>
              <input
                type="email"
                name="applicantEmail"
               
                value={formData.applicantEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
    
            {/* Link 1 Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="link1">
              GitHub Link
              </label>
              <input
                type="url"
                name="gitLink"
              
                value={formData.gitLink}
                onChange={handleChange}
                placeholder="Enter gitHub Link"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
    
            {/* Link 2 Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="link2">
              LinkedIn Link
              </label>
              <input
                type="url"
                name="linkdInLink"
                value={formData.linkdInLink}
                onChange={handleChange}
                placeholder="Enter linkedIn Link"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
    
            {/* Link 3 Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="link3">
              Resume Link
              </label>
              <input
                type="url"
                name="resumeLinks"
                value={formData.resumeLinks}
                onChange={handleChange}
                placeholder="Enter Resume Link"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
    
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      );
};

export default ApplyForAJob;