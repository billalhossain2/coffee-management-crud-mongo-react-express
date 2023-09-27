import "./TopHeader.css";
import topHeaderLogo from "../../assets/images/more/top-header-logo.png";
const TopHeader = () => {
  return (
    <div className='top-header-container'>
       <div className='flex items-center justify-center space-x-2'>
        <img className='w-[70px] h-[70px]' src={topHeaderLogo} alt="Header logo" />
        <h1 className='lg:text-6xl md:text-5xl text-3xl text-white py-5'>Espresso Emporium</h1>
       </div>
    </div>
  )
}

export default TopHeader