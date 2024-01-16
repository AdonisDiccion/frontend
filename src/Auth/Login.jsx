import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Auth';
import * as Api from "../Api/api";


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("Submitting:", formData);
        const { data } = await Api.loginStudent("/login", {
            ...formData,
          });
          if (data?.error) {
            console.log("Error:", data.error);
        }else {
            localStorage.setItem("auth", JSON.stringify(data));
            setAuth({ ...auth, token: data.token, user:data.user });
            navigate(location.state || "/");
          }
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <label className="block">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
