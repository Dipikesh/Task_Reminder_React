import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [description, setDescription] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    onAdd({ name, day, description });
    setName("");
    setDay("");
    setDescription("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Reminder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Date and Time</label>
        <input
          type="text"
          placeholder="Date and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <input
        type="submit"
        className="btn btn-block"
        value="Set Reminder"
      ></input>
    </form>
  );
};

export default AddTask;
