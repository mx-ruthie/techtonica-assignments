import React from "react";
import { useState } from "react";

const Users = () => {

  //mock users
const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

  //adding state 
  const [users, setUsers] = useState([marlin, nemo, dory]);
  //the useState for our working components
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: id, name: name, email: email };
    setUsers([...users, newUser]);
  };

  return <section className="user-management">
  <h2>User Management</h2>

  <ul id="users-list">
    {/* display all existing Users here */}
    <li>...</li>
  </ul>
  <div>
              <h3>Add User</h3>
              <form id="add-user" action="#">
                <fieldset>
                  <label>Name</label>
                  <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)} />
                  {/* changing type to number creates a dropdown */}
                  <input type="number" id="add-user-id" value={id} onChange={(e) => setId(e.target.value)}/>
                  <input type="text" id="add-user-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" value="Add" onSubmit={handleSubmit}/>
              </form>
            </div>

            <div>
              <h3>Delete User</h3>
              <form id="delete-user" action="#">
                <fieldset>
                  <label>User ID</label>
                  <input type="text" id="delete-user-id" />
                </fieldset>
                <input type="submit" />
              </form>
            </div>
          </section>
};

export default Users;