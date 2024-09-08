'use client';  // necessary to make swiper happy

import StyledSwiper from '@/components/styled-swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css'

export default function Puzzlecamp() {
  return (
    <main id="main">
      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-8">
              <div className="portfolio-details-slider">
                <div className="swiper-wrapper align-items-center">
                      <img src="/img/promotions/puzzlecamp/puzzlecamp_poster.jpg" alt=""/>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>Linguistic Training Camp</h2>
                <p>
                To help everyone become more familiar with the problem-solving format of the Linguistics Olympiad, we have specially invited past Taiwan team members and experienced instructors to share a series of problem-solving techniques and practical experiences. This will help boost your confidence and provide assistance before the competition.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}