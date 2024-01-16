// TeacherPage.js
import React, { useState } from 'react';

function TeacherPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    subject: '',
    score: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for submitting the grade here
    console.log('Grade submitted:', formData);
  };

  const handleGetAllStudents = () => {
    // Add your logic for getting all students with grades here
    console.log('Getting all students with grades...');
  };

  const handleGetStudentGrade = () => {
    // Add your logic for getting a specific student's grade here
    console.log('Getting student grade for:', formData.studentName);
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Teacher Page</h2>

      <div className="flex items-center justify-center">
        <p className="text-lg text-gray-600">
          Welcome to the Teacher Page. Explore your teaching tools and features here.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Add Student Grade</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="mb-2">
            Student ID:
            <input
              type="number"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <label className="mb-2">
            Subject:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <label className="mb-2">
            Score:
            <input
              type="number"
              name="score"
              value={formData.score}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 mt-4"
          >
            Add Grade
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Get Student's Grade</h3>
        <div className="flex flex-col items-center">
          <label className="mb-2">
            Student Name:
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <button
            onClick={handleGetStudentGrade}
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300"
          >
            Get Student Grade
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Get All Students with Grades</h3>
        <button
          onClick={handleGetAllStudents}
          className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Get All Students
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Manage Classes
        </button>
      </div>
    </div>
  );
}

export default TeacherPage;
