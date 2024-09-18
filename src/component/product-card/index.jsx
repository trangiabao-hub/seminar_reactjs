import React from "react";
import "./index.scss";
import api from "../../config/axios";
function ProductCard({ koiFish }) {
  const handleAddToCart = async () => {
    try {
      const response = await api.post("cart", {
        productId: koiFish.id,
        quantity: 1,
      });

      console.log(response);
    } catch (err) {
      console.log(err);
      alert("Thêm vào giỏ hàng thất bại!");
    }
  };

  return (
    <div className="product-card">
      <img src={koiFish.image} alt="" />

      <p className="name">{koiFish.name}</p>
      <p className="price">{koiFish.price}</p>

      <center>
        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      </center>
    </div>
  );
}

export default ProductCard;
