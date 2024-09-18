import React from "react";
import "./index.scss";
function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="https://minhxuankoifarm.com/wp-content/uploads/2020/09/ca-koi-doitsu-hariwake.jpg"
        alt=""
      />

      <p className="name">Cá Koi Doitsu</p>
      <p className="price">1.000.000đ</p>

      <center>
        <button>Thêm vào giỏ hàng</button>
      </center>
    </div>
  );
}

export default ProductCard;
