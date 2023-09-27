import TopHeader from "../../components/TopHeader/TopHeader"
import Footer from "../../components/Footer/Footer"
import BackHome from "../../components/BackHome"
import coffeeImg from "../../assets/images/coffee-4.png";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Details = () => {
  const {coffeeId} = useParams();
  const [coffee, setCoffee] = useState(null)
  const {name, chef, supplier, taste, category, details} = coffee || {};

  //load specific coffee
  fetch(`https://coffee-management-mongo-server.vercel.app/coffee/${coffeeId}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setCoffee(data)
  })
  .catch(error => console.log(error.message))
  return (
    <div>
        <TopHeader></TopHeader>
        <BackHome></BackHome>
        <div className="product-details flex justify-center">
            <div className="lg:w-auto md:w-auto w-[100%] product-item flex lg:flex-row md:flex-row flex-col items-center bg-[#F4F3F0] p-20 lg:px-32 md:px-16 px-5 mb-16 gap-10">
                <img src={coffeeImg} alt="coffee image" />
                <div className="coffee-info space-y-3">
                    <h3 className="font-bold text-2xl">Coffee Title</h3>
                    <p><b className="me-1">Name:</b><span>{name}</span></p>
                    <p><b className="me-1">Chef:</b><span>{chef}</span></p>
                    <p><b className="me-1">Supplier:</b><span>{supplier}</span></p>
                    <p><b className="me-1">Taste:</b><span>{taste}</span></p>
                    <p><b className="me-1">Category:</b><span>{category}</span></p>
                    <p><b className="me-1">Details:</b><span>{details}</span></p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Details