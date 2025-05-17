import React, { useEffect, useState } from 'react';


function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://psychic-system-r796rjvrrv9h5wrx-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="card">
      <h1 className="mb-4">Activities</h1>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>User</th>
            <th>Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.user}</td>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3">Add Activity</button>
    </div>
  );
}

export default Activities;
