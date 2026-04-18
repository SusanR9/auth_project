import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no token → redirect to login
    if (!token) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Dashboard (Protected)</h2>
      <p>You are logged in successfully ✅</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}