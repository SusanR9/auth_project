import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({ username: "", password: "" });

  const register = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        data
      );

      console.log(res.data);
      alert("Registered successfully!");

      // ✅ REDIRECT TO LOGIN PAGE
      window.location.href = "/dashboard";

    } catch (error) {
      console.log(error.response?.data);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

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

      <button onClick={register}>Register</button>
    </div>
  );
}