import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home = () => {
  return (
    <>
      {/* 첫 번째 Swiper */}
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}

        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}

        speed={1000}
        loop={true}
        allowTouchMove={false}

        modules={[Pagination, Navigation, Autoplay]}

        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./img/slide1.png" alt="img1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/slide2.png" alt="img2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/slide3.png" alt="img3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/slide4.png" alt="img4" />
        </SwiperSlide>
      </Swiper>


      {/* 중간 텍스트 */}
      <div className="text">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nemo rerum, et fugit minus perferendis quibusdam expedita
          eius fuga vero aliquid vel at inventore eos recusandae porro,
          omnis labore dolorum explicabo.

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis iusto hic sequi quidem maiores quibusdam a vitae,
          aut dolorem saepe quos qui ducimus optio velit pariatur id,
          blanditiis laudantium voluptatem!
        </p>
      </div>


      {/* 두 번째 Coverflow Swiper */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false,}}
        speed={1000}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="coverflowSwiper"
      >
        <SwiperSlide>
          <img src="./img/쿠로사키 이치고.webp" alt="slide1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/쿠치키 루키아.webp" alt="slide2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/쿠치키 뱌쿠야.webp" alt="slide3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/히라코 신지.webp" alt="slide4" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/아이젠 소스케.jpg" alt="slide5" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/이치마루 긴.webp" alt="slide6" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="./img/우라하라 키스케.png" alt="slide7" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home
