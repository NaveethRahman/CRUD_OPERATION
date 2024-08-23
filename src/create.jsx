import React from "react";
import axios from "axios";
import { useState } from "react";

const Create = () => {
  const initialstate = {
    plantName: "",
    plantDiscription: "",
    price: "",
    discount: "",
    fertilizer: "",
  };
  const [formData, setFormData] = useState(initialstate);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/Plantproductdetails", formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setFormData(initialstate);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Buy Plants</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label
            htmlFor=""
            style={{ marginLeft: "530px", paddingRight: "78px" }}
          >
            <b>Plant Name</b>
          </label>
          <input
            type="text"
            name="plantName"
            required
            placeholder="Enter Your plantName"
            onChange={handleChange}
            value={formData.plantName}
          />

          <label
            htmlFor=""
            style={{ marginLeft: "530px", paddingRight: "36px" }}
          >
            <b>Plant Description</b>
          </label>
          <input
            type="text"
            name="plantDiscription"
            required
            placeholder="Enter your plantDiscription"
            onChange={handleChange}
            value={formData.plantDiscription}
          />

          <label
            htmlFor=""
            style={{ marginLeft: "530px", paddingRight: "129px" }}
          >
            <b>Price</b>
          </label>
          <input
            type="number"
            name="price"
            required
            placeholder="Enter your price"
            onChange={handleChange}
            value={formData.price}
          />

          <label
            htmlFor=""
            style={{ marginLeft: "530px", paddingRight: "100px" }}
          >
            <b>Discount</b>
          </label>
          <input
            type="text"
            name="discount"
            required
            placeholder="Enter your discount"
            onChange={handleChange}
            value={formData.discount}
          />

          <label
            htmlFor=""
            style={{ marginLeft: "530px", paddingRight: "100px" }}
          >
            <b>Fertilizer</b>
          </label>
          <input
            type="text"
            name="fertilizer"
            required
            placeholder="Enter your fertilizer"
            onChange={handleChange}
            value={formData.fertilizer}
          />

          <button
            type="submit"
            style={{ marginLeft: "765px", marginTop: "15px" }}
          >
            Buy
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Create;
