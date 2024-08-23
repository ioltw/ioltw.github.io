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
                      <img src="/img/promotions/tutorialvideos/thumbnail22-1.png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/tutorialvideos/thumbnail22.png" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/tutorialvideos/thumbnail21.png" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>TOL Puzzle-Solving Video Series</h2>
                <p>
                Not sure how to prepare for the Linguistics Olympiad? Want to see how others think and solve problems? Watch our problem-solving video series!<br/><br/>
                  <a href="https://www.youtube.com/watch?v=hcxGOfMRp3g&list=PLtfo7R8tYZMpxBzYLF1n8KzIiYjYeI70n">【Youtube playlist】</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}