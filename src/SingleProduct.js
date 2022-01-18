import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  const fetchSingleData = async () => {
    try {
      const { data } = await axios.get(`/api/product?id=${id}`);
      setProduct(data);
    } catch (error) {}
    setLoad(false);
  };

  useEffect(() => {
    fetchSingleData();
  }, []);

  if (load) {
    return (
      <section className="section section-center">
        <h2>Loading...</h2>
      </section>
    );
  }
  const {
    fields: { name, price, image, desc },
  } = product;
  return (
    <section className="section section-center">
      <Link to="/">Home page</Link>
      <div>
        <div className="title">
          <h2>{name}</h2>
          <div className="title-underline"></div>
        </div>
        <article className="single-product">
          <img className="single-product-img" src={image[0].url} alt={name} />
          <div>
            <h5>{name}</h5>
            <h5 className="price">$ {price}</h5>
            <p>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SingleProduct;
