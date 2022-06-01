import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts";

const RequireAuth = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export { RequireAuth };
