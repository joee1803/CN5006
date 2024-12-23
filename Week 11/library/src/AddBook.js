import React, { useState } from "react";
import axios from "axios";

export default function BookForm() {
  const url = "http://localhost:5000/";
  const [state, setState] = useState({
    Booktitle: "",
    Author: "",
    Format: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      Booktitle: state.Booktitle,
      PubYear: state.PubYear,
      Author: state.Author,
      Topic: state.Topic,
      Format: state.Format,
    };

    axios.post(`${url}addbooks`, bookData).then((res) => console.log(res.data));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>
      <form onSubmit={onSubmit} method="post">
        <div className="form-group">
          <label>Book Title:</label>
          <input
            className="form-control"
            type="text"
            name="Booktitle"
            value={state.Booktitle}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Book Author:</label>
          <input
            className="form-control"
            type="text"
            name="Author"
            value={state.Author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Pick Book Topic:</label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
          >
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        <div className="form-group">
          <label>Format:</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Format"
              value="Hard Copy"
              checked={state.Format === "Hard Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Hard Copy</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="Format"
              value="Electronic Copy"
              checked={state.Format === "Electronic Copy"}
              onChange={handleChange}
            />
            <label className="form-check-label">Electronic Copy</label>
          </div>
        </div>
        <div className="form-group">
          <label>Publication Year (1980 - 2025):</label>
          <input
            className="form-control"
            type="range"
            name="PubYear"
            min="1980"
            max="2025"
            value={state.PubYear}
            onChange={handleChange}
          />
          <span>{state.PubYear}</span>
        </div>
        <div className="form-group">
          <center>
            <input
              type="submit"
              value="Add this book"
              className="btn btn-primary"
            />
          </center>
        </div>
      </form>
    </div>
  );
}
