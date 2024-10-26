import { useAuth } from './context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 text-white bg-gray-800">
      <h1 className="text-xl">Nexorand</h1>
      {user ? (
        <div className="flex space-x-4">
          <span>{user.name}</span>
          <button onClick={logout} className="px-2 bg-red-500">
            Logout
          </button>
        </div>
      ) : (
        <span>Not logged in</span>
      )}
    </nav>
  );
}

export default Navbar;
