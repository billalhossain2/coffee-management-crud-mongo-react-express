import cup9Img from "../../assets/images/cups/Rectangle 9.png";
import cup10Img from "../../assets/images/cups/Rectangle 10.png";
import cup11Img from "../../assets/images/cups/Rectangle 11.png";
import cup12Img from "../../assets/images/cups/Rectangle 12.png";
import cup13Img from "../../assets/images/cups/Rectangle 13.png";
import cup14Img from "../../assets/images/cups/Rectangle 14.png";
import cup15Img from "../../assets/images/cups/Rectangle 15.png";
import cup16Img from "../../assets/images/cups/Rectangle 16.png";
const Follow = () => {
  return (
    <div className="mb-32">
         <div className='text-center mb-20 mt-32'>
        <p>Follow Us Now</p>
        <h1 className='text-[35px]'>Follow on Instagram</h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 lg:max-w-[80%] md:max-w-[90%] w-[100%] mx-auto px-2">
            <img className="w-[100%]" src={cup9Img} alt="cup image" />
            <img className="w-[100%]" src={cup10Img} alt="cup image" />
            <img className="w-[100%]" src={cup11Img} alt="cup image" />
            <img className="w-[100%]" src={cup12Img} alt="cup image" />
            <img className="w-[100%]" src={cup13Img} alt="cup image" />
            <img className="w-[100%]" src={cup14Img} alt="cup image" />
            <img className="w-[100%]" src={cup15Img} alt="cup image" />
            <img className="w-[100%]" src={cup16Img} alt="cup image" />
        </div>
    </div>
  )
}

export default Follow