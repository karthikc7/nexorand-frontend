import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const userData = await response.json();
      login(userData);  // Save user data in context and localStorage
      navigate('/home');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 space-y-4">
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="p-2 border"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="p-2 border"
      />
      <button type="submit" className="p-2 text-white bg-blue-500">
        Login
      </button>
    </form>
  );
}

export default Login;
