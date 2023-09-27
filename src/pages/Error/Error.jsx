import React from 'react'
import TopHeader from '../../components/TopHeader/TopHeader'
import Footer from '../../components/Footer/Footer'
import errorGifImg from "../../assets/images/404/error.gif";
import BackHome from '../../components/BackHome';
const Error = () => {
  return (
    <div>
        <TopHeader></TopHeader>
        <BackHome></BackHome>
        <div className='flex justify-center'>
            <img src={errorGifImg} alt="Error Gif Image" />
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Error