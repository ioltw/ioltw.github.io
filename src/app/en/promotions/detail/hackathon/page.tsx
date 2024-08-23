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
                <h2>Linguistic Analysis Hackathon</h2>
                <p>
                The Linguistic Analysis Hackathon provides a platform for everyone to experience the fun of logical reasoning together with Taiwan's Olympiad representatives.<br/><br/>
In 2019, for the first time, the event was divided into "Plugged-in" and "Unplugged" categories, held in parallel. In the "Plugged-in" category, participants explored how to use programming to automatically solve Linguistics Olympiad problems. In 2021, the event was combined with the "Chinese AI Knowledge Base and Natural Language Processing Core Tools Workshop," inviting friends interested in the intersection of AI and linguistics to participate.
<br/><br/>
Whether you analyze language with your brain or teach a computer to solve problems automatically, everyone is a language hacker!
                  <br/><br/><a href="https://lope.linguistics.ntu.edu.tw/ioltw/linghacks21/">【4th Linguistics Hackathon (2021) Website】</a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}