import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    signOut(auth);
    navigate("/login");
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}