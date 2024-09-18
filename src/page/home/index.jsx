import { useEffect, useState } from "react";
import Header from "../../component/header";
import ProductCard from "../../component/product-card";
import "./index.scss";
import api from "../../config/axios";

const Home = () => {
  const [koiFishs, setKoiFishs] = useState([]);

  const fetchKoiFish = async () => {
    // hàm gọi API lấy dữ liệu cá koi
    try {
      const response = await api.get("product");
      setKoiFishs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchKoiFish(); // chạy thằng này mỗi khi mà trang load lên
  }, []);

  return (
    <div className="home">
      <Header />

      <div className="home__main-content">
        {/* cứ mỗi con cá => <ProductCard /> */}
        {koiFishs.map((koiFish) => (
          <ProductCard koiFish={koiFish} />
        ))}
      </div>
    </div>
  );
};

export default Home;
