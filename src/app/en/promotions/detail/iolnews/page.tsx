'use client';  // necessary to make swiper happy

import StyledSwiper from '@/components/styled-swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css'

export default function Iolnews() {
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
                      <img src="/img/promotions/iolnews/00347364.20230731274136785M.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/iolnews/3628693_1_1.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/iolnews/20210812004961.jpg" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/img/promotions/iolnews/20220801003932.jpg" alt=""/>
                    </SwiperSlide>
                  </StyledSwiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-4">
                <div className="portfolio-description">
                    <h2>2024 Taiwan Team Wins Three Silver, One Bronze, and One
                    Honorable Mention in the Individual Contest, and a Bronze
                    Medal in the Team Contest!</h2>
                    <p>
                    Since Taiwan formed a team to participate in the International Linguistics Olympiad in 2016, the team has consistently performed exceptionally well. Below are some examples of media coverage:
                    </p>
                    <h3>2024</h3>
                    <ul className="links">
                        <li><a href="https://www.cna.com.tw/news/aopl/202407310039.aspx" target="_blank">【中央社新聞】國際語奧台灣隊大放異彩 勇奪多項榮譽</a></li>
                        <li><a href="https://sec.ntu.edu.tw/epaper/article.asp?num=1612&sn=29180" target="_blank">【臺大校訊】臺大教授帶領臺灣代表隊勇奪「2024國際語言學奧林匹亞競賽」佳績並取得2025主辦權</a></li>
                    </ul>
                    <h3>2023</h3>
                    <ul className="links">
                        <li><a href="https://www.cna.com.tw/postwrite/chi/347365" target="_blank">2023 年國際語奧台灣代表隊勇奪二銀三銅一佳作！</a></li>
                    </ul>
                    <h3>2022</h3>
                    <ul className="links">
                        <li><a href="https://www.chinatimes.com/realtimenews/20220801003931-260405?chdtv" target="_blank">國際語奧我獲2銀3佳作 團體賽兩隊均獲獎</a></li>
                    </ul>
                    <h3>2021</h3>
                    <ul className="links">
                        <li><a href="https://news.ltn.com.tw/news/life/breakingnews/3628693" target="_blank">國際語言學奧賽 台灣獲1金1銀3銅</a></li>
                        <li><a href="https://www.chinatimes.com/realtimenews/20210812004940-260421?ctrack=mo_main_rtime_p01&chdtv" target="_blank">為國爭光！普台高中學生代表台灣角逐國際語言學奧林匹亞摘銀</a></li>
                        <li><a href="https://www.upmedia.mg/news_info.php?SerialNo=122083" target="_blank">台中一中小林同學拿下該校首面國際語言學奧林匹亞金牌</a></li>
                    </ul>
                    <h3>2019</h3>
                    <ul className="links">
                        <li><a href="https://www.cna.com.tw/news/aopl/201908050034.aspx" target="_blank">中央通訊社: 國際語奧競賽 台灣隊摘2銅4佳作</a></li>  
                        <li><a href="http://kr.rti.org.tw/archives/3757" target="_blank">中央廣播電台 타이완학생 IOL서 동상2 장려상4</a></li>
                        <li><a href="https://news.sina.com.tw/article/20190805/32201218.html" target="_blank">新浪新聞：竹科實中學生王治鈞 國際語奧競賽奪銅</a></li>  
                        <li><a href="https://udn.com/news/story/6812/3970091" target="_blank">聯合新聞網: 國際語奧競賽 台灣隊摘2銅4佳作</a></li>
                        <li><a href="hhttps://www.setn.com/News.aspx?NewsID=581071" target="_blank">三立新聞網：國際語奧競賽　台灣隊摘2銅4佳作</a></li>
                        <li><a href="https://times.hinet.net/news/22494200" target="_blank">HiNet生活誌：國際語奧競賽 台灣隊摘2銅4佳作</a></li>
                                    <li><a href="https://money.udn.com/money/story/5599/3970091" target="_blank">經濟日報: 國際語奧競賽 台灣隊摘2銅4佳作</a></li>
                        <li><a href="https://www.ocacnews.net/overseascommunity/article/article_story.jsp?id=247847" target="_blank">僑務電子報: 國際語奧競賽 台灣隊摘2銅4佳作</a></li>  
                        <li><a href="https://www.taiwannews.com.tw/ch/news/3758865" target="_blank">台灣英文新聞: 國際語奧競賽 台灣隊摘2銅4佳作</a></li>
                        <li><a href="http://www.ksnews.com.tw/index.php/news/contents_page/0001289778" target="_blank">更生日報: 國際語奧競賽 台灣隊摘2銅4佳作</a></li>
                        <li><a href="https://www.msn.com/zh-tw/news/other/%E5%9C%8B%E9%9A%9B%E8%AA%9E%E5%A5%A7%E7%AB%B6%E8%B3%BD-%E5%8F%B0%E7%81%A3%E9%9A%8A%E6%91%982%E9%8A%854%E4%BD%B3%E4%BD%9C/ar-AAFkyFS" target="_blank">MSN新聞：國際語奧競賽 台灣隊摘2銅4佳作</a></li>
                        <li><a href="https://tw.news.yahoo.com/%E5%9C%8B%E9%9A%9B%E8%AA%9E%E5%A5%A7%E7%AB%B6%E8%B3%BD-%E5%8F%B0%E7%81%A3%E9%9A%8A4%E5%AD%B8%E7%94%9F%E7%8D%B2%E4%BD%B3%E4%BD%9C-%E5%9C%96-021749020.html" target="_blank">YAHOO新聞: 國際語奧競賽 台灣隊4學生獲佳作 (圖)</a></li>
                        <li><a href="https://tw.news.yahoo.com/%E5%8F%B0%E7%81%A3%E4%BB%A3%E8%A1%A8%E9%9A%8A%E5%8F%83%E5%8A%A0%E5%9C%8B%E9%9A%9B%E8%AA%9E%E5%A5%A7%E7%AB%B6%E8%B3%BD-%E5%9C%96-021548904.html" target="_blank">YAHOO新聞: 台灣代表隊參加國際語奧競賽 (圖)</a></li>
                        <li><a href="https://tw.news.yahoo.com/%E7%AB%B9%E7%A7%91%E5%AF%A6%E4%B8%AD%E5%AD%B8%E7%94%9F%E6%9D%8E%E5%AE%87%E8%BB%92-%E5%9C%8B%E9%9A%9B%E8%AA%9E%E5%A5%A7%E7%AB%B6%E8%B3%BD%E5%A5%AA%E9%8A%85-%E5%9C%96-021649842.html" target="_blank">YAHOO新聞: 竹科實中學生李宇軒 國際語奧競賽奪銅 (圖)</a></li>
                        <li><a href="https://tnews.cc/035/newscon127987.htm" target="_blank">新竹新聞網: 竹科實中學生王治鈞國際語奧競賽奪銅(圖)</a></li>
                    </ul>
                    <h3>2018</h3>
                    <ul className="links">
                        <li><a href="http://www.ntdtv.com.tw/b5/20180802/video/227015.html" target="_blank">新唐人亞太台: 國際語奧台灣捷報 亞洲排名第二奪3銀2優選</a></li>
                        <li><a href="http://www.chinatimes.com/realtimenews/20180802004631-260405" target="_blank">中時電子報: 勝過中日韓！國際語言學奧賽我獲亞洲第二</a></li>
                        <li><a href="https://m.ctee.com.tw/livenews/ch/20180802004631-260405" target="_blank">工商時報: 勝過中日韓！國際語言學奧賽我獲亞洲第二</a></li>
                        <li><a href="https://hanreporter.blogspot.com/2018/08/blog-post_3.html" target="_blank">數位網路報: 語言學奧林匹亞賽再捷， 超越中、日、韓，亞洲第二</a></li>
                    </ul>
                    <h3>2017</h3>
                    <ul className="links">
                        <li><a href="http://m.cna.com.tw/news/firstnews/201708060009.aspx" target="_blank">中央社: 國際語言學奧賽 台灣隊抱走2金2銀</a></li>
                        <li><a href="http://www.chinatimes.com/realtimenews/20170806001860-260405" target="_blank">中時電子報: 國際語奧我得1金2銀2優選 團體冠軍</a></li>
                        <li><a href="https://tw.appledaily.com/new/realtime/20170806/1176885/" target="_blank">蘋果日報: 台灣隊征語奧 團體賽奪金</a></li>
                        <li><a href="http://www.mingpaocanada.com/van/htm/News/20170806/tccd1_r.htm" target="_blank">明報加拿大版: 台生奪語奧團體賽金牌</a></li>
                        <li><a href="http://www.cdns.com.tw/news.php?n_id=3&nc_id=177965" target="_blank">中華日報: 語言學奧賽 我團體金牌</a></li>
                        <li><a href="http://m.cna.com.tw/news/firstnews/201708060009.aspx" target="_blank">Focus Taiwan: Taiwan team wins gold at International Linguistic Olympiad</a></li>
                    </ul>
                    <h3>2016</h3>
                    <ul className="links">
                        <li><a href="http://www.chinatimes.com/newspapers/20160804000419-260114" target="_blank">中國時報: 語言學奧賽 鄭安騏最年輕得獎者</a></li>
                        <li><a href="http://news.ltn.com.tw/news/life/breakingnews/1783958" target="_blank">自由時報: 國際語言學奧林匹亞賽 台灣獲1銀2優選</a></li>
                        <li><a href="https://udn.com/news/story/6899/1871673-%E8%AA%9E%E8%A8%80%E5%A5%A7%E8%B3%BD-14%E6%AD%B2%E9%84%AD%E5%AE%89%E9%A8%8F%E7%8D%B2%E7%8D%8E%E5%89%B5%E7%B4%80%E9%8C%84" target="_blank">聯合新聞網: 語言奧賽 14歲鄭安騏獲獎創紀錄</a></li>
                        <li><a href="https://www.nownews.com/news/20160803/2191937" target="_blank">今日新聞: 語言學奧林匹亞摘1銀2優選　台灣產最年輕得獎選手</a></li>
                        <li><a href="http://www.chinatimes.com/realtimenews/20160803005045-260405" target="_blank">中時電子報: 國際語言學奧林匹亞競賽 我獲一銀二優選</a></li>
                    </ul>
                </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}