import { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/api/user/v1/get-users')
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Leaderboard</h1>
      {leaders.map((leader) => (
        <div key={leader.id} className="p-2 border-b">
          {leader.name}: {leader.points} points
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
