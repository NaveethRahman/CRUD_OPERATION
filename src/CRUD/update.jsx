import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const initialState = {
    plantName: "",
    plantDiscription: "",
    price: "",
    discount: "",
    fertilizer: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const data = {
      _id : id,
    }

    const queryString = new URLSearchParams(data).toString();

    const getById = async () => {
      await axios
        // .get(`http://localhost:4000/Plantproductbyid?${queryString}`)
        .get(`http://localhost:4000/Plantproductbyid?_id=${id}`)
        .then((res) => {
            if(res.status === 200 || res.status === 201){
                setFormData(res.data.data)
            }
        })
        .catch((err) => console.log(err));
    };
    getById();
  }, []);   

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoader(true);

    axios
      .put(`http://localhost:4000/Plantproductdetails/${id}`, formData)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setFormData(initialState);

          navigate(`/`);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  const handleNavigate = () => {
    navigate(`/read`);
  };

  return (
    <div>
      <h1>Edit Form</h1>
      <form onSubmit={handleUpdate} onReset={handleReset}>
        <input
          type="text"
          name="plantName"
          required
          placeholder="Enter Your plantName"
          onChange={handleChange}
          value={formData.plantName}
        />
        <input
          type="text"
          name="plantDiscription"
          required
          placeholder="Enter your plantDiscription"
          onChange={handleChange}
          value={formData.plantDiscription}
        />
        <input
          type="number"
          name="price"
          required
          placeholder="Enter your price"
          onChange={handleChange}
          value={formData.price}
        />
        <input
          type="text"
          name="discount"
          required
          placeholder="Enter your discount"
          onChange={handleChange}
          value={formData.discount}
        />
        <input
          type="text"
          name="fertilizer"
          required
          placeholder="Enter your fertilizer"
          onChange={handleChange}
          value={formData.fertilizer}
        />

        <div>
          <button type="reset">Previous</button>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleNavigate}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
