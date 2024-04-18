import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });

  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  const save = async () => {
    await client.updateUser(profile);
  };

  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Profile</h1>
          {profile && (
            <div>
              <input
                className="form-control mb-3"
                value={profile.username}
                onChange={(e) =>
                  setProfile({ ...profile, username: e.target.value })
                }
              />
              <input
                type="password"
                className="form-control mb-3"
                value={profile.password}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
              />
              <input
                className="form-control mb-3"
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
              <input
                className="form-control mb-3"
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
              <input
                type="date"
                className="form-control mb-3"
                value={profile.dob}
                onChange={(e) =>
                  setProfile({ ...profile, dob: e.target.value })
                }
              />
              <input
                type="email"
                className="form-control mb-3"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
              <div className="input-group mb-3">
                <select
                  className="form-control"
                  onChange={(e) =>
                    setProfile({ ...profile, role: e.target.value })
                  }
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
                <div className="input-group-append">
                  <span className="input-group-text">Dropdown</span>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary mb-2" onClick={save}>
                  Save
                </button>
                <button className="btn btn-danger mb-2" onClick={signout}>
                  Signout
                </button>
                <Link
                  to="/Kanbas/Account/Admin/Users"
                  className="btn btn-warning"
                >
                  Users
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
