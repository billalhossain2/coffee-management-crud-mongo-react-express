import "./Brands.css"
import cupImg from "../../assets/images/icons/icon1.png";
import qualityImg from "../../assets/images/icons/icon2.png";
import cradeImg from "../../assets/images/icons/icon3.png";
import roastingImg from "../../assets/images/icons/icon4.png";
const Brands = () => {
  return (
    <div className="bg-[#ECEAE3]">
       <div className="lg:max-w-[70%] md:max-w-[90%] w-[100%] mx-auto grid lg:grid-cols-4 md:grid-cols-3 gird-cols-1 lg:gap-5 md:gap-5 gap-10 py-10">
       <div className="flex flex-col lg:items-start md:items-start items-center lg:px-0 md:px-0 px-5">
        <img src={cupImg} alt="Cup Image" />
        <h5 className="text-3xl">Awesome Aroma</h5>
        <p className="text-[16px]">You will definitely be a fan of the design & aroma of your coffee</p>
       </div>
       <div className="flex flex-col lg:items-start md:items-start items-center lg:px-0 md:px-0 px-5">
        <img src={qualityImg} alt="Cup Image" />
        <h5 className="text-3xl">High Quality</h5>
        <p className="text-[16px]">We served the coffee to you maintaining the best quality</p>
       </div>
       <div className="flex flex-col lg:items-start md:items-start items-center lg:px-0 md:px-0 px-5">
        <img src={cradeImg} alt="Cup Image" />
        <h5 className="text-3xl">Pure Grades</h5>
        <p className="text-[16px]">The coffee is made of the green coffee beans which you will love</p>
       </div>
       <div className="flex flex-col lg:items-start md:items-start items-center lg:px-0 md:px-0 px-5">
        <img src={roastingImg} alt="Cup Image" />
        <h5 className="text-3xl">Proper Roasting</h5>
        <p className="text-[16px]">You will definitely be a fan of the design & aroma of your coffee</p>
       </div>
       </div>
    </div>
  )
}

export default Brands