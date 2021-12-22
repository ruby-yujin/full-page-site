import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

export default function VisualSlick() {
  const slickRef = useRef();

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log('@@ slickRef', slickRef.current);
  }, []);

  // const prevSlide = () => {
  //   slickRef.current.slickPrev()
  // }

  // const nextSlide = () => {
  //   slickRef.current.slickNext()
  // }

  return (
    <SliderWrap>
      <Slider {...settings} ref={slickRef}>
        <SlideItem>
          <SlideItemInner>
            <Contents>
              <p>현재와 미래의 가치를 잇는 브릿지인베스트먼트1</p>
              <h3>
                We connect values from <br />
                the Present with the Future
              </h3>
            </Contents>
            <Background>
              <img src="/assets/img/main/visual.jpg" alt="" />
            </Background>
          </SlideItemInner>
        </SlideItem>

        <SlideItem>
          <SlideItemInner>
            <Contents>
              <p>현재와 미래의 가치를 잇는 브릿지인베스트먼트2</p>
              <h3>
                We connect values from <br />
                the Present with the Future
              </h3>
            </Contents>
            <Background>
              <img src="/assets/img/main/section1.jpg" alt="" />
            </Background>
          </SlideItemInner>
        </SlideItem>
        <SlideItem>
          <SlideItemInner>
            <Contents>
              <p>현재와 미래의 가치를 잇는 브릿지인베스트먼트3</p>
              <h3>
                We connect values from <br />
                the Present with the Future
              </h3>
            </Contents>
            <Background>
              <img src="/assets/img/main/section2.jpg" alt="" />
            </Background>
          </SlideItemInner>
        </SlideItem>
      </Slider>

      {/* <div onClick={prevSlide}>이전</div>
      <div onClick={nextSlide}>다음</div> */}
    </SliderWrap>
  );
}

const SliderWrap = styled.div`
  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: '';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  > div {
  }
`;

const SlideItem = styled.div`
  height: 100vh;
  width: 100%;
`;

const SlideItemInner = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  img,
  video {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  margin-top:-10% p {
    font-size: 26px;
    line-height: 2.19;
  }

  h3 {
    font-size: 60px;
    font-weight: bold;
    line-height: 1.5;
  }
`;
