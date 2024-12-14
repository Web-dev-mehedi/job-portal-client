import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddJob = () => {
  const [formData, setFormData] = useState({
    jobName: "",
    companyName: "",
    location: "",
    phone: "",
    salary: "",
    jobImage: null,
    description: "",
    jobType: "",
    jobCategory: "",
    experience: "",
    qualification: "",
    skills:[],
    level: "",
    applicationStartDate: "",
    applicationLastDate: "",
    workingHours: "",
    benefits: "",
    statement: "",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  //
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, jobImage: file }));
    console.log("Selected File:", file);
  };

  //
  const handleSkillsChange = (e) => {
    const value = e.target.value;
    // Split the string into an array of skills and trim spaces around each skill
    const skillsArray = value.split(",")
    setFormData((prev) => ({...prev, skills: skillsArray,
    }));
  };
  //
  const handleTagsChange = (e) => {
    const value = e.target.value;
    const tagsArray = value.split(",");
    console.log(tagsArray);
    setFormData((prev) => ({
      ...prev,
      tags: tagsArray,
    }));
  };

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Details Submitted:", formData);

    // Add logic to save data to a database or API
    axios
      .post("http://localhost:5000/add-jobs", formData)
      .then((data) => {
        console.log(data.data);
        alert("data added");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaPlus /> Add New Job
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Job Name */}
        <div className="flex flex-col">
          <label htmlFor="jobName" className="text-gray-700 font-medium">
            Job Name
          </label>
          <input
            type="text"
            name="jobName"
            placeholder="Enter job name"
            value={formData.jobName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        {/* Company Name */}
        <div className="flex flex-col">
          <label htmlFor="companyName" className="text-gray-700 font-medium">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        {/* Location */}
        <div className="flex flex-col">
          <label htmlFor="location" className="text-gray-700 font-medium">
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 font-medium">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        {/* Salary */}
        <div className="flex flex-col">
          <label htmlFor="salary" className="text-gray-700 font-medium">
            Salary
          </label>
          <input
            type="number"
            name="salary"
            placeholder="Enter salary"
            value={formData.salary}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Job Image */}
        <div className="flex flex-col">
          <label htmlFor="jobImage" className="text-gray-700 font-medium">
            Job Image
          </label>
          <input
            type="file"
            name="jobImage"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Description */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label htmlFor="description" className="text-gray-700 font-medium">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter job description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
          />
        </div>
        {/* Job Type */}
        <div className="flex flex-col">
          <label htmlFor="jobType" className="text-gray-700 font-medium">
            Job Type
          </label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select job type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        {/* Job Category */}
        <div className="flex flex-col">
          <label htmlFor="jobCategory" className="text-gray-700 font-medium">
            Job Category
          </label>
          <select
            name="jobCategory"
            value={formData.jobCategory}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Accounting/Finance">Accounting/Finance</option>
            <option value="Production/Operation">Production/Operation</option>
            <option value="Education/Training">Education/Training</option>
            <option value="Design/Creative">Design/Creative</option>
            <option value="Health & Fitness">Health & Fitness</option>
            <option value="Research/Consultancy">Research/Consultancy</option>
            <option value="Engineer/Architects">Engineer/Architects</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="Data Entry/Operator">Data Entry/Operator</option>
            <option value="Marketing/Sales">Marketing/Sales</option>
            <option value="Security/Support Service">
              Security/Support Service
            </option>
          </select>
        </div>

        {/* Experience */}
        <div className="flex flex-col">
          <label htmlFor="experience" className="text-gray-700 font-medium">
            Experience (Years)
          </label>
          <input
            type="number"
            name="experience"
            placeholder="Enter required experience"
            value={formData.experience}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Qualification */}
        <div className="flex flex-col">
          <label htmlFor="qualification" className="text-gray-700 font-medium">
            Qualification
          </label>
          <input
            type="text"
            name="qualification"
            placeholder="Enter qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Level */}
        <div className="flex flex-col">
          <label htmlFor="level" className="text-gray-700 font-medium">
            Level
          </label>
          <input
            type="text"
            name="level"
            placeholder="Enter job level"
            value={formData.level}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Application Start Date */}
        <div className="flex flex-col">
          <label
            htmlFor="applicationStartDate"
            className="text-gray-700 font-medium"
          >
            Application Start Date
          </label>
          <input
            type="date"
            name="applicationStartDate"
            value={formData.applicationStartDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Application Last Date */}
        <div className="flex flex-col">
          <label
            htmlFor="applicationLastDate"
            className="text-gray-700 font-medium"
          >
            Application Last Date
          </label>
          <input
            type="date"
            name="applicationLastDate"
            value={formData.applicationLastDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Working Hours */}
        <div className="flex flex-col">
          <label htmlFor="workingHours" className="text-gray-700 font-medium">
            Working Hours
          </label>
          <input
            type="text"
            name="workingHours"
            placeholder="Enter working hours"
            value={formData.workingHours}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Benefits */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label htmlFor="benefits" className="text-gray-700 font-medium">
            Benefits
          </label>
          <textarea
            name="benefits"
            placeholder="Enter job benefits"
            value={formData.benefits}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          />
        </div>
        {/* Statement */}
        <div className="col-span-1 md:col-span-2 flex flex-col">
          <label htmlFor="statement" className="text-gray-700 font-medium">
            Statement
          </label>
          <textarea
            name="statement"
            placeholder="Enter job statement"
            value={formData.statement}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          />
        </div>
        {/* Tags */}
        <div className="flex flex-col">
          <label htmlFor="tags" className="text-gray-700 font-medium">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            placeholder="Enter tags (comma separated)"
            onChange={handleTagsChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* skills */}
        <div className="flex flex-col">
          <label htmlFor="tags" className="text-gray-700 font-medium">
            Skills
          </label>
          <input
            type="text"
            name="skills"
            placeholder="Enter needed Skills (comma separated)"
            onChange={handleSkillsChange}
            className="border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
