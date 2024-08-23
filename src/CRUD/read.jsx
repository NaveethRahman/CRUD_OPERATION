import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get("http://localhost:4000/Plantproductdetails")
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:4000/user/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          // setData((state) => {
          //   const filteredData = state.filter((val) => val.id !== id);
          //   return filteredData;
          // });

          const filteredData = data.filter((v) => v._id !== id);

          setData(filteredData);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="">
      {data?.map((val) => (
        <div key={val._id}>
          <div className="">
            <Link to={`/update/${val._id}`}>
              <button className="">Update</button>
            </Link>
            <button className="" onClick={() => handleDelete(val._id)}>
              Delete
            </button>
            <h1>Plant Name:{val.plantName}</h1>
            <h1>Plant Description:{val.plantDiscription}</h1>
            <h1>Price:{val.price}</h1>
            <h1>Discount:{val.discount}</h1>
            <h1>Fertilizer:{val.fertilizer}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Read;
