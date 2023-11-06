"use client";
import React, { useEffect } from "react";
import "./shop.scss";
import { AppDispatch, RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";
// import { log } from "console";

const Shop = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  //   console.log(products);
  return (
    <div className="shop">
      <section className="shop-main">
        <h1>Shop</h1>
      </section>
      <section className="shop-products">
        <div className="container cards">
          {products.length > 0
            ? products.map((el: any) => (
                <div key={el.id} className="card">
                  <div className="catalog">{el.catalog}</div>
                  <img src={el.image} alt="" />
                  <p className="name">{el.name}</p>
                  <span className="line3"></span>
                  <div className="d1">
                    <div className="prices">
                      <p className="price">{el.price}</p>
                      <p className="price-sell">{el.priceSell}</p>
                    </div>
                    <img src={el.star} alt="" />
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>
    </div>
  );
};

export default Shop;
