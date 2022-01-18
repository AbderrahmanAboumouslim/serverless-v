import React, { useState, useEffect } from "react";
import axios from "axios";
const URL_API = "https://serverless.netlify.app/api/3-airtable";
const OldData = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(URL_API);
      setProducts(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="sectoin section-center">
      <div className="title">
        <h2>Products from old app API</h2>
        <div className="title"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          const { name, price, url, id } = product;
          return (
            <article className="product" key={id}>
              <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">$ {price}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OldData;
