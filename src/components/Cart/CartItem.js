import React from "react";
import { ButtonContainer } from "../Button";

export default function CartItem({ product, value }) {
  const { id, title, img, price, total, count } = product;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-4 text-center text-capitalixe">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="image product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center ">
        <span className="d-lg-none">product :</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center ">
        <span className="d-lg-none">price :</span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>

            <span
              className="btn btn-black mx-1"
              onClick={() => {
                increment(id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2  text-center ">
        <div className="cart-icon">
          <i
            onClick={() => {
              removeItem();
            }}
            className="fas fa-trash"
          />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 text-center ">
        <span className="d-lg-none">
          <strong>item total : </strong>
        </span>
        <strong>${total}</strong>
      </div>
    </div>
  );
}
