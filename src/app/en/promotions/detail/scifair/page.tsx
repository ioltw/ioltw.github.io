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
                <h2>High School Linguistics Science Fair</h2>
                <p>
                nterested in exploring linguistics/language science? Sign up for the Science Fair and share your discoveries with everyone!<br/><br/>
                  <a href="https://ioltw.github.io/scifair-2024/">【3rd High School Linguistics Science Fair (2024) Website】</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}