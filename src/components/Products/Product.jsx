import { Link } from "react-router-dom";
import productImg from "../../assets/images/coffee-4.png";
import Swal from "sweetalert2";
const Product = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef } = coffee;

  const handleDeleteCoffee = (coffeeId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");

        // delete from UI
        const restCoffees = coffees.filter((coffee) => coffee._id !== coffeeId);
        setCoffees(restCoffees);

        //delete from DB
        fetch(
          `https://coffee-management-mongo-server.vercel.app/coffee/${coffeeId}`,
          { method: "DELETE" }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged) {
              console.log("Successfully deleted from DB");
            }
          })
          .catch((error) => console.log(error.message));
      }
    });
  };

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
          <b>Price:</b> <span>{""} Taka</span>
        </p>
      </div>
      <div className="actions flex lg:flex-col md:flex-col flex-row gap-3 text-white">
        <Link to={`/details/${_id}`}>
          <i className="fa-regular fa-eye bg-[#D2B48C] cursor-pointer rounded-[5px] p-3"></i>
        </Link>
        <Link to={`/edit/${_id}`}>
          <i className="fa-solid fa-pen bg-[#3C393B] cursor-pointer rounded-[5px] p-3"></i>
        </Link>
        <i
          onClick={() => handleDeleteCoffee(_id)}
          className="fa-solid fa-trash bg-[#EA4744] cursor-pointer rounded-[5px] p-3"
        ></i>
      </div>
    </div>
  );
};

export default Product;
