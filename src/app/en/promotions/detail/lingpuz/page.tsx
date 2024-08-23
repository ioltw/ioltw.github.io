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
                <h2>Linguistic Puzzle Marathon</h2>
                <p>
                To promote linguistic knowledge at the elementary and middle school levels, the Taiwan Olympiad in Linguistics collaborated with Kang Chiao International School Linkou Campus to host the Linguistic Puzzle Marathon. This event provides students with an opportunity to explore linguistics, with the goal of building a bridge between students and the International Linguistics Olympiad and the Taiwan Science Fair in Linguistics. We encourage students to further their learning and exploration of linguistic knowledge.
                 <br/><br/>For more information, please visit our<a href="https://www.facebook.com/Taiwan.Olympiad.in.Linguistics">【Facebook Page】</a> or email Mr. Champsky at <a href="mailto:lingpuz.marathon@gmail.com">lingpuz.marathon@gmail.com</a>
                </p>
                </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}