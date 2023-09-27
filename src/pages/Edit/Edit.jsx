import TopHeader from "../../components/TopHeader/TopHeader"
import BackHome from "../../components/BackHome"
import Footer from "../../components/Footer/Footer"
import React from 'react'

const Edit = () => {
  return (
    <div>
        <TopHeader></TopHeader>
        <BackHome></BackHome>
        <div className="form-container lg:max-w-[70%] w-[100%] mx-auto bg-[#F4F3F0] p-10 my-20">
          <header className="text-center">
            <h3 className="text-[35px] text-[#374151] font-bold">
            Update Existing Coffee Details
            </h3>
            <p className="my-8">
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </p>
          </header>
          <main>
            <form>
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
                    />
                  </div>
                </div>
              </div>
              <button className="bg-[#D2B48C] border-[1px] border-solid border-[#331A15] text-2xl text-[#331A15] py-2 mt-6 w-full">
              Update Coffee Details
              </button>
            </form>
          </main>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Edit
