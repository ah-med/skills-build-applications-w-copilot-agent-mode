import React, { useEffect, useState } from 'react';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://psychic-system-r796rjvrrv9h5wrx-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card">
      <h1 className="mb-4">Users</h1>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Add User</button>
    </div>
  );
}

export default Users;
