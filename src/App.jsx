import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import TeacherRegistration from './Auth/TeacherRegistration';
import UserRegistration from './Auth/UserRegistration';
import StudentGrade from './Components/StudentGrade';
import TeacherPage from './Components/TeacherPage';
import Navbar from './Components/Navbar';
import Login from './Auth/Login';
import PrivateRoute from './Private/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container bg-blue-100 min-h-screen flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-registration" element={<UserRegistration />} />
          <Route path="/teacher-registration" element={<TeacherRegistration />} />
          <Route path="/login" element={<Login />} />
          
          <Route path='/student' element={<PrivateRoute/>}>
            <Route path="/student-page" element={<StudentGrade />} />
          </Route>

          <Route path='/teacher' element={<PrivateRoute/>}> 
            <Route path="/teacher-page" element={<TeacherPage />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
