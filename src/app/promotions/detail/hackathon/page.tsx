'use client';  // necessary to make swiper happy

import StyledSwiper from '@/components/styled-swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css'

export default function Hackathon() {
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
                      <div>
                        <img src="/img/promotions/hackathon/19hack2.jpg" alt=""/>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src="/img/promotions/hackathon/19hack.jpg" alt=""/>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src="/img/promotions/hackathon/19hack1.jpg" alt=""/>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <img src="/img/promotions/hackathon/poster-19-long.png" alt=""/>
                      </div>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>語言分析黑客松</h2>
                <p>
                  語言分析黑客松活動提供一個平臺給所有人，與語奧國手們一起體驗邏輯推理的樂趣。<br/><br/>
                  2019年首次區分「插電組」以及「不插電組」，平行場次進行，插電組中我們要嘗試的是如何用程式自動解出語奧的題目；
                  2021年更合體「中文 AI 知識庫與自然語言處理核心套件研討會」，邀請對AI結合語言學有興趣的朋友參加。
                  <br/><br/>無論是以人腦進行語言分析，或是以人腦教電腦進行自動解題，大家都是語言黑客！
                  <br/><br/><a href="https://lope.linguistics.ntu.edu.tw/ioltw/linghacks21/">【第四屆（2021）語言分析黑客松網站】</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}