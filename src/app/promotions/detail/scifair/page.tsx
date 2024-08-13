'use client';  // necessary to make swiper happy

import StyledSwiper from '@/components/styled-swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css'

export default function Scifair() {
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
                      <img src="/img/promotions/scifair/fair3.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/scifair/fair1.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/scifair/group.jpg" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>中學生語言科學科展</h2>
                <p>
                  有興趣做語言學／語言科學的探索嗎？快來報名科展把你的發現分享給大家！<br/><br/>
                  <a href="https://ioltw.github.io/scifair-2024/">【第三屆（2024）網站】</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}