import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const location = useLocation();

  // Wait for Clerk to load
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Redirect unauthenticated users
  if (!isSignedIn) {
    return (
      <Navigate
        to="/?sign-in=true"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;