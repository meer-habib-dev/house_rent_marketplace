import React, { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMount = useRef(true);
  useEffect(() => {
    if (isMount) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setCheckingStatus(false);
      });
    }
  }, [isMount]);
  return {
    loggedIn,
    checkingStatus,
  };
};

export default useAuthStatus;
