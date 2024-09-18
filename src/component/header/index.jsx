import React from "react";
import "./index.scss";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link to={"/"}>
        <img
          src="https://cdn.pixabay.com/photo/2020/07/13/02/29/koi-5399206_1280.png"
          alt=""
          width={100}
        />
      </Link>

      <Button
        type="primary"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Header;
