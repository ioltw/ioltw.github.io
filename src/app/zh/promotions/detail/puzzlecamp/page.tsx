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
                      <img src="/img/promotions/puzzlecamp/puzzlecamp_poster.jpg" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>解題訓練營</h2>
                <p>
                  為了讓大家更熟悉語奧的解題模式，我們特別邀請到歷屆台灣國手與具備深厚經驗的講師，來為大家帶來一系列的解題技巧與實戰經驗分享，讓大家在賽前更有信心與協助。
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}