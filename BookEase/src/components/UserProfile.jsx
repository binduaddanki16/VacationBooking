import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [editableUser, setEditableUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser(editableUser);
    alert("Profile Updated!");
  };

  return (
    <div className="container mt-5">
      <h2>My Profile</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" value={editableUser.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" name="email" value={editableUser.email} onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserProfile;