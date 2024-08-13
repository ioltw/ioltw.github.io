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
                      <img src="/img/promotions/langcutech/366029506_698391408988555_3708571822829114030_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/374282208_714836427344053_1442960102294485885_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/392949181_741673841326978_3714915542679861518_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/393609125_741673884660307_2991926083584223685_n.jpg" alt=""/>
                    </SwiperSlide>

                    <SwiperSlide>
                      <img src="/img/promotions/langcutech/420191551_797069295787432_1056909308502045675_n.jpg" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-description">
                <h2>語言探索之旅</h2>
                <p>
                  我們每天都在使用語言，但您是否曾經好奇「語言學」究竟是什麼樣的學問？現在，讓我們一同搭上語言探索號，展開一場奇幻的語言學之旅。<br/><br/>
                  我們特別為國小學生設計了四堂語言學互動課程，透過邏輯思考、觀察分析、推理解謎等有趣的活動，啟發孩子們的思辯力與創造力。語言學就像一個放大鏡，讓孩子們化身為超級偵探，探索語言背後的隱藏奧秘。
                  <br/><br/>
                  📌 課程時間（2023年）： 9/3、10/15、12/3、1/21<br/>
                  📌 課程地點：國立臺灣大學樂學館3樓
                  <br/><br/>更多資訊請見<a href="https://www.facebook.com/Taiwan.Olympiad.in.Linguistics">【FB粉專】</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}