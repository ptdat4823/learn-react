import React, { useEffect, useRef } from "react";
import { addUser, deleteUser, getUser, updateUser } from "./service";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const refInput = useRef({});
  const refDebound = useRef(null);
  useEffect(() => {
    getUser().then((data) => {
      setUsers(data);
    });
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    refInput.current = { ...refInput.current, [name]: value };
    filterName(e);
  };
  const handleAdd = () => {
    addUser(refInput.current).then((data) => {
      setUsers(data);
    });
    refInput.current = {};
  };
  const handleUpdate = () => {
    updateUser(refInput.current).then((data) => {
      setUsers(data);
    });
    refInput.current = {};
  };
  const handleDelete = (id) => () => {
    deleteUser(id).then((data) => {
      setUsers(data);
    });
  };
  const filterName = ({ target }) => {
    clearTimeout(refDebound.current);
    refDebound.current = setTimeout(() => {
      getUser(target.value).then((data) => {
        setUsers(data);
      });
    }, 500);
  };
  return (
    <div>
      <h1>User management:</h1>
      <label>Id</label>
      <input name="id" onChange={handleInputChange} />
      <br />
      <label>email</label>
      <input ref={refDebound} name="email" onChange={handleInputChange} />
      <br />
      <label>gender</label>
      <input name="gender" onChange={handleInputChange} />
      <br />
      <label>name</label>
      <input name="name" onChange={handleInputChange} />
      <br />
      <label>address</label>
      <input name="address" onChange={handleInputChange} />
      <br />
      <label>dob</label>
      <input name="dob" onChange={handleInputChange} />
      <br />
      <label>phone</label>
      <input name="phone" onChange={handleInputChange} />
      <br />
      <label>avatar</label>
      <input name="avatar" onChange={handleInputChange} />
      <br />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleUpdate}>Update</button>
      <table
        border={1}
        style={{ borderCollapse: "collapse", marginTop: "16px" }}
      >
        <thead>
          <tr>
            <th>-</th>
            <th>id</th>
            <th>email</th>
            <th>gender</th>
            <th>name</th>
            <th>address</th>
            <th>dob</th>
            <th>phone</th>
            <th>avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <button onClick={handleDelete(user.id)}>x</button>
              </td>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.dob}</td>
              <td>{user.phone}</td>
              <td>
                <img
                  style={{ width: "150px" }}
                  src={user.avatar}
                  alt="user avatar"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
