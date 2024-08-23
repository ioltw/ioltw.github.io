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
                      <img src="/img/promotions/highschool/ck.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/highschool/ck2.jpg" alt=""/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <img src="/img/promotions/highschool/ck3.jpg" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>Campus Outreach</h2>
                <p>
                We hope that more people in Taiwan will learn about, participate in, and support the Linguistics Olympiad! We have visited various high schools (including Taichung Girls' Senior High School, Wen-Hua Senior High School, National Experimental High School at Hsinchu Science Park, National Experimental High School at Central Taiwan Science Park, Lo-Tung Senior High School, and Chien-Kuo High School, to name a few). We also introduced the Olympiad in the "Uncovering Languages" general education course at National Taiwan University. We welcome invitations from teachers at any level, whether from universities or high schools, to arrange on-campus promotions or related collaborations.<br/>
                Contact us:<a href="mailto:ioltwtwiol@gmail.com">ioltwtwiol@gmail.com</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}