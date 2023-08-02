import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

const Cat = (props) =>{
    return(
        <section id="about" className="">
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay = {{
            delay : 3000,
            disableOnInteraction : false
        }}
      >
        {
            props.dbpath.map((v, i)=>{
                return(
                    <SwiperSlide className={`section  d-flex flex-column justify-content-center catslide${i}`}
                    style={{ backgroundImage : `url(${v.imgsrc})`, backgroundColor : `${v.bgcolor}`}}
                    >
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
      </section>
    )
}

export default Cat;