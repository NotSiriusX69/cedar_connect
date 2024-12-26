import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>loading...</div>;

  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;
