import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login/",   // 👈 HERE
        data
      );

      console.log(res.data);

      // save token
      localStorage.setItem("token", res.data.access);

      // redirect to dashboard
      window.location.href = "/dashboard";

    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) =>
          setData({ ...data, username: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <button onClick={handleLogin}>Login</button>

      <br /><br />

      <button onClick={() => (window.location.href = "/register")}>
        Go to Register
      </button>
    </div>
  );
}