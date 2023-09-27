
import Header from "../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import Products from "../../components/Products/Products";
import Follow from "../../components/Follow/Follow";
import Footer from "../../components/Footer/Footer";
import useTitle from "../../Hooks/useTitle";
const Home = () => {
  useTitle("Home - Coffee Management")
  return (
    <div>
        <Header></Header>
        <Brands></Brands>
        <Products></Products>
        <Follow></Follow>
        <Footer></Footer>
    </div>
  );
};

export default Home;
