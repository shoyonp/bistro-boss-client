// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
   <section> 
    <SectionTitle heading="ORDER ONLINE" subHeading="From 11:00am to 10:00pm"></SectionTitle>
    <Swiper
   slidesPerView={3}
   spaceBetween={30}
   freeMode={true}
   pagination={{
     clickable: true,
   }}
   autoplay={true}
   modules={[FreeMode, Pagination]}
   className="mySwiper mb-20"
 >
   <SwiperSlide>
     <img src={slide1} alt="" />
     <h3 className="text-xl uppercase text-center -mt-16 mb-8 text-white">
       salad
     </h3>
   </SwiperSlide>
   <SwiperSlide>
     <img src={slide2} alt="" />
     <h3 className="text-xl uppercase text-center -mt-16 text-white">
       Pizzas
     </h3>
   </SwiperSlide>
   <SwiperSlide>
     <img src={slide3} alt="" />
     <h3 className="text-xl uppercase text-center -mt-16 text-white">
       Soupe
     </h3>
   </SwiperSlide>
   <SwiperSlide>
     <img src={slide4} alt="" />
     <h3 className="text-xl uppercase text-center -mt-16 text-white">
       desserts
     </h3>
   </SwiperSlide>
   <SwiperSlide>
     <img src={slide5} alt="" />
     <h3 className="text-xl uppercase text-center -mt-16 text-white">
       salad
     </h3>
   </SwiperSlide>
 </Swiper></section>
  );
};

export default Category;
