import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import BackHome from "../../components/BackHome";
import TopHeader from "../../components/TopHeader/TopHeader";
const AddCoffee = () => {
  const [coffee, setCoffee] = useState({name:'', supplier: '', category:'', photo:'', chef:'', taste:'', details:''})
  const handleChange = (e)=>{
    const name = e.target.name;
    setCoffee({...coffee, [name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    //Add a new coffee to DB
    fetch('https://coffee-management-mongo-server.vercel.app/coffee', {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(coffee)
    })
    .then(res => res.json())
    .then(result => {
      if(result.acknowledged){
      alert("Successfully added")
      }
    })
    .catch(error => console.log(error.message))
  }
  return (
    <div>
      <TopHeader></TopHeader>
      <div>
        <BackHome></BackHome>

        <div className="form-container max-w-[70%] mx-auto bg-[#F4F3F0] p-10 my-20">
          <header className="text-center">
            <h3 className="text-[35px] text-[#374151] font-bold">
              Add New Coffee
            </h3>
            <p className="my-8">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </header>
          <main>
            <form onSubmit={handleSubmit}>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <div className="text-[20px] mb-4">
                    <label className="block" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="p-2 rounded-lg w-[100%] outline-none"
                      type="text"
                      id="name"
                      placeholder="Enter coffee name"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-[20px] mb-4">
                    <label className="block" htmlFor="supplier">
                      Supplier
                    </label>
                    <input
                      className="p-2 rounded-lg w-[100%] outline-none"
                      type="text"
                      id="supplier"
                      placeholder="Enter coffee supplier"
                      name="supplier"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-[20px] mb-4">
                    <label className="block" htmlFor="category">
                      Category
                    </label>
                    <input
                      className="p-2 rounded-lg w-[100%] outline-none"
                      type="text"
                      id="category"
                      placeholder="Enter coffee category"
                      name="category"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-[20px]">
                    <label className="block" htmlFor="photo">
                      Photo
                    </label>
                    <input
                      className="p-2 rounded-lg w-[100%] outline-none"
                      type="text"
                      id="photo"
                      placeholder="Enter photo URL"
                      name="photo"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[20px] mb-4">
                    <label className="block" htmlFor="chef">
                      Chef
                    </label>
                    <input
                      className="p-2 rounded-lg w-[100%] outline-none"
                      type="text"
                      id="chef"
                      placeholder="Enter coffee chef"
                      name="chef"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-[20px] mb-4">
                    <label className="block" htmlFor="taste">
                      Taste
                    </label>
                    <input
                      className="p-2 rounded-lg w-[100%] outline-none"
                      type="text"
                      id="supplier"
                      placeholder="Enter coffee taste"
                      name="taste"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-[20px] mb-4">
                    <label className="block" htmlFor="details">
                      Details
                    </label>
                    <input
                      className="p-2 rounded-lg w-[100%] outline-none"
                      type="text"
                      id="details"
                      placeholder="Enter coffee details"
                      name="details"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button className="bg-[#D2B48C] border-[1px] border-solid border-[#331A15] text-2xl text-[#331A15] py-2 mt-6 w-full">
                Add Coffee
              </button>
            </form>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddCoffee;
