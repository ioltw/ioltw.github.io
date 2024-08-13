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
                <h2>前進校園分享</h2>
                <p>
                  我們希望台灣有更多人瞭解語奧、參與語奧並支持語奧！我們曾前往各高中（台中女中、文華高中、新竹實中、中科實中、羅東高中、建國中學，僅舉數例），也在臺大「探索語言」通識課上介紹語奧，歡迎各國、高中老師與各方來信邀約，安排到校推廣或相關合作。<br/>
                  <br/>聯絡我們：<a href="mailto:ioltwtwiol@gmail.com">ioltwtwiol@gmail.com</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}