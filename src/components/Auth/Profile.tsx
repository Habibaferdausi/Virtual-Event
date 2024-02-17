import React, { useState } from 'react';

const Profile: React.FC = () => {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleUpdateProfile = () => {
    // Handle profile update logic (e.g., update data in Firestore)
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="Avatar URL" />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;
