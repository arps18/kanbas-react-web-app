import React, { useState, useEffect } from "react";
import * as client from "./client";
import { User } from "./client";
import {
  BsFillCheckCircleFill,
  BsPencil,
  BsTrash3Fill,
  BsPlusCircleFill,
} from "react-icons/bs";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });

  const [role, setRole] = useState("USER");
  const fetchUsersByRole = async (role: string) => {
    const users = await client.findUsersByRole(role);
    setRole(role);
    setUsers(users);
  };

  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user: User) => {
    try {
      console.log(user);
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <select
            onChange={(e) => fetchUsersByRole(e.target.value)}
            value={role || "USER"}
            className="form-control mb-3"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <h1 className="text-center mb-4">User Table</h1>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <span>Username</span>
                </th>
                <th>
                  <span>Password</span>
                </th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Role</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
              <tr>
                <td>
                  <input
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    value={user.firstName}
                    onChange={(e) =>
                      setUser({ ...user, firstName: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    value={user.lastName}
                    onChange={(e) =>
                      setUser({ ...user, lastName: e.target.value })
                    }
                    className="form-control"
                  />
                </td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                    className="form-control"
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                  </select>
                </td>
                <td className="text-nowrap">
                  <BsFillCheckCircleFill
                    onClick={updateUser}
                    className="me-2 text-success fs-1 text"
                  />
                  <BsPlusCircleFill
                    onClick={createUser}
                    className="text-success fs-1 text"
                  />
                </td>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.role}</td>
                  <td className="text-nowrap">
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => deleteUser(user)}
                    >
                      <BsTrash3Fill />
                    </button>
                    <button className="btn btn-warning">
                      <BsPencil onClick={() => selectUser(user)} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
