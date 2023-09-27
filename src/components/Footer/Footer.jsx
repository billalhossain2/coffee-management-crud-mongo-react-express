import topBarLogo from "../../assets/images/more/top-header-logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#f1eeee]">
        <div className="flex lg:flex-row flex-col justify-between max-w-[80%] mx-auto lg:gap-80 gap-16">
        <div>
            <img className="w-[80px] h-[80px]" src={topBarLogo} alt="top logo" />
            <h3 className="text-[30px] my-3">Espresso Emporium</h3>
            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className="icons text-3xl space-x-3 space-y-3">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <h3 className="text-[30px] my-3">Get in Touch</h3>
            <div className="contacts space-x-3 space-y-3">
             <p><i class="fa-solid fa-phone"></i> <span>+88 01533 333 333</span></p>
             <p><i class="fa-solid fa-envelope"></i> <span>info@gmail.com</span></p>
             <p><i class="fa-solid fa-location-dot"></i> <span>72, Wall street, King Road, Dhaka</span></p>
            </div>
        </div>

        <div>
            <h3 className="text-[30px] my-3">Connect with Us</h3>
            <form className="lg:max-w-[300px] md:max-w-[300px] w-[100%]">
                <input className="w-[100%] my-3 p-3 border-0 outline-none rounded-lg hover:outline-1 hover:outline-dotted hover:outline-black" type="text" name="name" placeholder="Name"/>
                <br />
                <input className="w-[100%] my-3 p-3 border-0 outline-none rounded-lg  hover:outline-1 hover:outline-dotted hover:outline-black" type="text" name="email" placeholder="Email"/>
                <br />
                <textarea className="outline-none p-3 rounded-lg w-[100%]  hover:outline-1 hover:outline-dotted hover:outline-black" name="comment" id="comment" cols="60" rows="5"></textarea>
                <br />
                <input className="my-3 text-2xl border-[1px] border-solid border-black rounded-full py-2 px-5 cursor-pointer" type="submit" value="Send Message" />
            </form>
        </div>
    </div>
    <div className="bottom-footer">
        <p className="text-center py-3 text-white">Copyright Espresso Emporium ! All Rights Reserved</p>
    </div>
    </footer>
  )
}

export default Footer