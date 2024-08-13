'use client';  // necessary to make swiper happy

import StyledSwiper from '@/components/styled-swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css'

export default function Lingpuz() {
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
                        <img src="/img/promotions/lingpuz/DSCF2988.JPG" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/img/promotions/lingpuz/DSCF3410.JPG" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/img/promotions/lingpuz/DSCF3329.JPG" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/img/promotions/lingpuz/DSCF3360.JPG" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/img/promotions/lingpuz/DSCF2961.JPG" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
                <div className="portfolio-description">
                <h2>語言解謎鐵人賽</h2>
                <p>
                    為了推廣語言學知識至中、小學階段，台灣語言學奧林匹亞及林口康橋國際高中合作舉辦語言解謎鐵人賽，提供中、小學生一個探究語言學的機會。此活動的目標是搭建學生銜接國際奧林匹亞語言學和台灣中學生語言科學科展的橋樑，鼓勵學生能夠更進階地學習、探究語言學知識。
                    <br/><br/>更多資訊請見<a href="https://www.facebook.com/Taiwan.Olympiad.in.Linguistics">【FB粉專】</a>或email查姆斯基先生：<a href="mailto:lingpuz.marathon@gmail.com">lingpuz.marathon@gmail.com</a>
                </p>
                </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}