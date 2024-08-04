import Carousel from "react-bootstrap/Carousel";
import "./carouselImgStyle.scss";
import { FC } from "react";
import { CarouselImagesProps } from "./CarouselImgs";

const CarouselImages: FC<CarouselImagesProps> = ({ imgSrcs }) => {
  return (
    <div className="images-carousel">
      <Carousel interval={1000}>
        {imgSrcs &&
          imgSrcs.map((src, index) => (
            <Carousel.Item key={index}>
              <img src={src} className="d-block w-100" alt="CrossFit Img" />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;
