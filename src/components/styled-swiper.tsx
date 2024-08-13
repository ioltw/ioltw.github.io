import { ReactElement } from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css'

export default function StyledSwiper({ children }: { children: ReactElement[] }) {
    return (
        <Swiper
            speed={400}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Pagination]}
            pagination={{
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            }}
        >
            {children}
        </Swiper>
    );
}
