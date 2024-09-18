import Header from "../../component/header";
import ProductCard from "../../component/product-card";
import "./index.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="home__main-content">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
