import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../functions/getUserData";

import "./index.scss"
import { ScaleLoader } from "react-spinners";
import { Link, NavLink } from "react-router-dom";

const Users = () => {
  // return <div>Users</div>;
  const [usersLoading, setUsersLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      if (res.status === 200) {
        setUserList(res.data)
      }
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (<>
    {usersLoading && (
      <div className="users-loader">
        <ScaleLoader color="#586665" height={20} />
      </div>
    )}
    <div className="user-list">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Verified</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {console.log(userList)}
          {userList.map((user, index) => (
            <tr key={user._id}>
              <td>
                {index + 1}
              </td>
              <td>{`${user.first_name} ${user.last_name ? user.last_name : ''}`}</td>
              <td>{user.email}</td>
              <td>{user.phoneno}</td>
              <td>{user.verified ? 'True':'False'}</td>
              <td>
                <Link
                  to={`/users/${user._id}`}
                  className="user"
                  key={user._id}
                >
                  <button >View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
};

export default Users;
