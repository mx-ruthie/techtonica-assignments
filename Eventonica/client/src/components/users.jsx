import React from "react";
import { useState } from "react";
import DeleteUser from "./DeleteUser";

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
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    setUsers([...users, newUser]);
    console.log(users);
    //these next lines re-set the input fields to empty strings on submit
    setName("");
    setId("");
    setEmail("");
  };

  const deleteUser = (deleteId) => {
    const newUsers = users.filter((i) => i.id !== deleteId);
    setUsers(newUsers);
  };

  return <section className="user-management">
  <h2>User Management</h2>

  <ul id="users-list">
  {users.map((user, index) => {
            return (
                <li key={index}>
                    Name: {user.name}, Email: {user.email}
                </li>
            );
        })}
    
  </ul>
  <div>
              <h3>Add User</h3>
              <form id="add-user" onSubmit={handleSubmit}>
                <fieldset>
                  <label>Name: </label>
                  <input type="text" id="add-user-name" value={name} onChange={(e) => setName(e.target.value)} />
                  {/* changing type to number creates a dropdown */}
                  <label>User ID: </label>
                  <input type="number" id="add-user-id" value={id} onChange={(e) => setId(e.target.value)}/>
                  <label>Email: </label>
                  <input type="text" id="add-user-email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </fieldset>
                {/* Add more form fields here */}
                <input type="submit" value="Add" />
              </form>
            </div>

            <DeleteUser deleteUser={deleteUser}/>
          </section>
};

export default Users;