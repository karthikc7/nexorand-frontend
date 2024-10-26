import { useState, useEffect } from 'react';

function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/api/user/v1/get-users')
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  const claimPoints = async (id) => {
    await fetch(`http://localhost:7000/api/user/v1/claim-points/${id}`, {
      method: 'PATCH',
    });
    alert('Points claimed!');
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Friends List</h1>
      {friends.map((friend) => (
        <div key={friend.id} className="flex justify-between p-2 border-b">
          <span>{friend.name}: {friend.points} points</span>
          <button
            onClick={() => claimPoints(friend.id)}
            className="p-1 text-white bg-green-500"
          >
            Claim Points
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
