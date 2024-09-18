import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // xem người dùng login hay chưa?
    const token = localStorage.getItem("token");
    if (!token) {
      // nếu chưa login thì chuyển đến trang login
      navigate("/login");
    }
  }, []);

  return <Outlet />;
};

export default PrivateRoute;
