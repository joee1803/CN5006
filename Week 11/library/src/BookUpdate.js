import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookUpDateForm() {
  const [state, setState] = useState({
    Booktitle: "",
    Author: "",
    Format: "",
    Topic: "",
    PubYear: 1990,
  });
  const url = "http://localhost:5000/";

  const { id } = useParams(); // Extract the `id` from the URL params

  // Handle changes to form inputs
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  // Fetch book data when the component is mounted
  useEffect(() => {
    axios
      .get(`${url}getbook/${id}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log("Error occurred while fetching book data", err);
      });
  }, [id]);

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      Booktitle: state.Booktitle,
      PubYear: state.PubYear,
      Author: state.Author,
      Topic: state.Topic,
      Format: state.Format,
    };

    // Send POST request to update the book
    axios
      .post(`${url}updatebook/${id}`, bookData)
      .then((res) => {
        console.log("Book updated successfully", res.data);
      })
      .catch((err) => {
        console.log("Error occurred during book update:", err);
      });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book: {state.Booktitle}</h3>
      <form onSubmit={onSubmit}>
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
          <label>Publication Year (between 1980 and 2025):</label>
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
        <center>
          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </center>
      </form>
    </div>
  );
}

export default BookUpDateForm;
