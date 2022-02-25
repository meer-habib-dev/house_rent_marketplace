import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  return user ? (
    <div>
      <h1>{user.displayName} </h1>
    </div>
  ) : (
    "Not Logged In"
  );
};

export default Profile;
