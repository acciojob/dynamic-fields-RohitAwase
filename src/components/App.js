
import React, { useState } from "react";

function App() {
  const [fields, setFields] = useState([
    { id: 1, name: "", age: "" }
  ]);

  // Add a new field group
  const addFields = () => {
    setFields([
      ...fields,
      {
        id: Date.now(),
        name: "",
        age: ""
      }
    ]);
  };

  // Remove a specific field group
  const removeFields = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Update input values
  const handleChange = (id, e) => {
    const { name, value } = e.target;

    setFields(
      fields.map((field) =>
        field.id === id
          ? { ...field, [name]: value }
          : field
      )
    );
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <h2>Dynamic Form Fields</h2>

      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleChange(field.id, e)}
                required
              />
            </div>

            <div>
              <label>Age: </label>
              <input
                type="number"
                name="age"
                value={field.age}
                onChange={(e) => handleChange(field.id, e)}
                required
              />
            </div>

            <button
              type="button"
              onClick={() => removeFields(field.id)}
            >
              Remove
            </button>

            <hr />
          </div>
        ))}

        <button type="button" onClick={addFields}>
          Add More
        </button>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
