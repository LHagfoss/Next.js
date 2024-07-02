"use client"  
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import google from '@public/google.png'
import Navbar from './components/Navbar'

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#202124] flex justify-center items-center flex-col gap-5">
      <Navbar />
      <img src={google.src} alt="" />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Home;
