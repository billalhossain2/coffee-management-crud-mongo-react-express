import TopHeader from "../TopHeader/TopHeader"
import "./Header.css";
const Header = () => {
  return (
    <div>
        <TopHeader></TopHeader>
        <div className="banner flex flex-col justify-center items-center min-h-screen">
            <div className="p-5 lg:ml-60">
            <h3 className="text-white text-[30px]">Would you like a Cup of Delicious Coffee?</h3>
            <p className="text-[16px] text-white my-4 max-w-[400px]">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="text-[#242222] text-2xl p-2 rounded-lg bg-[#E3B577] hover:bg-transparent hover:text-white hover:outline-1 hover:outline-white hover:outline-dotted">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Header