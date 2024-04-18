import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signin = async () => {
    try {
      // Check if username or password is empty
      if (!credentials.username.trim() || !credentials.password.trim()) {
        setError("Please enter both username and password.");
        return;
      }

      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Sign In</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <br />
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={signin}
            >
              Sign In
            </button>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to={"/Kanbas/Account/Signup"}>Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
