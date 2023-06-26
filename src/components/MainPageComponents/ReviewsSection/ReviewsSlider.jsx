import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import { ReactComponent as ArrowLeft } from 'images/arrowLeft.svg';
import { ReactComponent as ArrowRight } from 'images/arrowRight.svg';
import { FcButtingIn } from 'react-icons/fc';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import {
  Section,
  Container,
  SliderWrapper,
  Title,
  ReviewContentBox,
  Avatar,
  Rate,
  Name,
  ReviewSliderCard,
  ReviewText,
  SwiperNavBox,
  SwiperNavBtn,
} from './ReviewsSlider.styled';

import reviwers from './reviwers.json';

const customStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: '#FFAC33',
  inactiveFillColor: '#CEC9C1',
};

export const ReviewsSlider = () => {
  const swiperRef = useRef(null);
  SwiperCore.use([Autoplay]);

  const slides = reviwers;

  return (
    <Section>
      <Container>
        <Title>REVIEWS</Title>
        <SliderWrapper>
          <Swiper
            initialSlide={1}
            slidesPerView={1}
            ref={swiperRef}
            autoplay={{ delay: 5000 }}
            navigation={{
              prevEl: '#my-prev-button',
              nextEl: '#my-next-button',
            }}
            modules={[Navigation]}
            direction={'horizontal'}
            autoHeight={true}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              1440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <ReviewSliderCard>
                  <ReviewContentBox>
                    <Avatar>
                      <FcButtingIn size={48} />
                    </Avatar>
                    <div>
                      <Name>{slide.name}</Name>
                      <Rate>
                        <Rating
                          value={slide.rating}
                          style={{ maxWidth: 110, gap: 5 }}
                          itemStyles={customStyles}
                          readOnly
                        />
                      </Rate>
                    </div>
                  </ReviewContentBox>
                  <ReviewText>{slide.text}</ReviewText>
                </ReviewSliderCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderWrapper>
        <SwiperNavBox>
          <SwiperNavBtn id="my-prev-button">
            <ArrowLeft />
          </SwiperNavBtn>
          <SwiperNavBtn id="my-next-button">
            <ArrowRight />
          </SwiperNavBtn>
        </SwiperNavBox>
      </Container>
    </Section>
  );
};
