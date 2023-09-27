import { Link } from "react-router-dom";
import productImg from "../../assets/images/coffee-4.png";
const Product = ({coffee}) => {
  const {name, chef} = coffee;
  return (
    <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-5 bg-[#F5F4F1] lg:pb-0 md:pb-0 pb-10 px-5">
      <img src={productImg} alt="Coffee Image" />
      <div className="products-info">
        <p>
          <b>Name:</b> <span>{name}</span>
        </p>
        <p>
          <b>Chef:</b> <span>{chef}</span>
        </p>
        <p>
          <b>Price:</b> <span>{''} Taka</span>
        </p>
      </div>
      <div className="actions flex lg:flex-col md:flex-col flex-row gap-3 text-white">
        <Link to="/details">
        <i class="fa-regular fa-eye bg-[#D2B48C] cursor-pointer rounded-[5px] p-3"></i>
        </Link>
        <Link to="/edit">
        <i class="fa-solid fa-pen bg-[#3C393B] cursor-pointer rounded-[5px] p-3"></i>
        </Link>
        <i class="fa-solid fa-trash bg-[#EA4744] cursor-pointer rounded-[5px] p-3"></i>
      </div>
    </div>
  );
};

export default Product;
