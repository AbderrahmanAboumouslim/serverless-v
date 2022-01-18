import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Airtable = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="sectoin section-center">
      <div className="title">
        <h2>Products from this server</h2>
        <div className="title"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          const { name, price, url, id } = product;
          return (
            <Link to={`/${id}`} className="product" key={id}>
              <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">$ {price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Airtable;
