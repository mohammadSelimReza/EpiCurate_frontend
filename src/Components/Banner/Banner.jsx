import { useEffect, useState } from "react";
import api from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      const bannerData = await api.get("/management/banner/");
      setBanner(bannerData.data);
    };

    fetchBanner();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {banner.map((item) => (
          <SwiperSlide key={item.id} className="relative h-full">
            <img
              src={item.bnr_img}
              alt="Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>

            {/* Dynamic Text Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12 text-white z-10 w-3/4">
              <div>
                <h1 className="text-5xl md:text-7xl w-3/4 font-bold mb-4">
                  {item.title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-8">
                  {item.title_info}
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-emerald-500 rounded-full hover:bg-emerald-600 transition duration-300">
                    {item.btn1}
                  </button>
                  <button className="px-6 py-3 bg-transparent border-2 border-emerald-500 text-white rounded-full hover:bg-emerald-500 transition duration-300">
                    {item.btn2}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
