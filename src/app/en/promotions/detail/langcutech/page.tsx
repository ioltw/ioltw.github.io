'use client';  // necessary to make swiper happy

import StyledSwiper from '@/components/styled-swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css'

export default function Highschool() {
  return (
    <main id="main">
      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-8">
              <div className="portfolio-details-slider">
                <div className="swiper-wrapper align-items-center">
                  <StyledSwiper>
                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/366029506_698391408988555_3708571822829114030_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/374282208_714836427344053_1442960102294485885_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/392949181_741673841326978_3714915542679861518_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/393609125_741673884660307_2991926083584223685_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/420191551_797069295787432_1056909308502045675_n.jpg" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>A Tour in Linguistics</h2>
                <p>
                We use language every day, but have you ever wondered what "linguistics" is really about? Now, let's embark on a magical journey of linguistic exploration together.<br/><br/>
                We have specially designed four interactive linguistics courses for elementary school students. Through fun activities involving logical thinking, observation, analysis, and puzzle-solving, we inspire children's critical thinking and creativity. Linguistics is like a magnifying glass, turning children into super detectives exploring the hidden mysteries behind language.<br/><br/>
                📌 Course Dates (2023): 9/3, 10/15, 12/3, 1/21<br/>
                📌 Course Location: Lesyue Building, 3rd Floor, National Taiwan University
                  <br/><br/>For more information, please visit our <a href="https://www.facebook.com/Taiwan.Olympiad.in.Linguistics">【Facebook Page】</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}