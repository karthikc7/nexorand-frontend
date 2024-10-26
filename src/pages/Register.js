import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      alert('Registered successfully!');
      navigate('/login');  // Redirect to login page
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
        Register
      </button>
    </form>
  );
}

export default Register;
