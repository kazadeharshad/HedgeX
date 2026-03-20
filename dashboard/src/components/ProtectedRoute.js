import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3002/verify",
          { withCredentials: true }
        );

        setIsAuth(data.status);
      } catch (err) {
        setIsAuth(false);
      }
    };

    verify();
  }, []);

  if (isAuth === null) return null; // or loader

  return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;