import Header from "./components/header";
import HomeBanner from "./components/homeBanner";
import TopbarMenuItems from "./components/topbarMenuItems";
import speaker from "./assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "./assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphone from "./assets/shared/desktop/image-category-thumbnail-headphones.png";
import HomeContent from "./components/homeContent";
import CommonFooterContent from "./components/commonFooterContent";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import jsonData from './data.json'

// HEADPHONES IMPORT

import InnerPagesBanner from "./components/innerPagesBanner";
import Product from "./components/products";
import headphoneImg from "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
import headphoneImgTab from "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
import headphoneImgDesktop from "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"


function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    setData(jsonData.data)
    console.log(data)
  },[])
  return (
    // ************App************
    // <div>
    //   <div className="bg-[#1a1a1a]">
    //     <div className=" text-white max-w-6xl mx-auto">
    //       <Header />
    //       <HomeBanner />
    //     </div>
    //   </div>
    //   <div className="px-6 max-w-6xl mx-auto">
    //     <div className="md:flex justify-between gap-3 py-10 md:py-24 lg:py-20">
    //       <TopbarMenuItems img={headphone} title="Headphones" />
    //       <TopbarMenuItems img={speaker} title="Speakers" />
    //       <TopbarMenuItems img={earphone} title="EARPHONES" />
    //     </div>
    //     <HomeContent/>
    //     <div className="text-center my-32">

    //     <CommonFooterContent/>
    //     </div>
    //   </div>
    //     <Footer/>
    // </div>

    // **********Headphones********
    <div>
      <div className="bg-[#1a1a1a]">
        <div className=" text-white max-w-6xl mx-auto">
          <Header />
          <InnerPagesBanner title="HEADPHONES" />
        </div>
      </div>
      <div className="px-6 max-w-6xl mx-auto">
        <div className="mt-14">
        <Product image={headphoneImg} imageTab={headphoneImgTab} imageDesktop={headphoneImgDesktop} title="XX99 Mark II Headphones" description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."/>
        <Product image={headphoneImg} title="XX99 Mark II Headphones" description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."/>

        </div>
        <div className="md:flex justify-between gap-3 py-0 mt-52 mb-32 md:mt-28">
          <TopbarMenuItems img={headphone} title="Headphones" />
          <TopbarMenuItems img={speaker} title="Speakers" />
          <TopbarMenuItems img={earphone} title="EARPHONES" />
        </div>
        <div className="mb-28">
          <CommonFooterContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
