import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';

export default function Demo({file}) {
  return (
    <Carousel
    slideSize="100%"
    slideGap="xl"
    slidesToScroll={1}
      withIndicators
    //   height="50vh"
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: "100%",
          },
        },
      }}
    >
      {file.map((photo, i) => (
        <Carousel.Slide> <div className="hotelImgWrapper" key={i}>
                  <img
                    src={photo.src}
                    alt=""
                    width="50vw"
                    className="hotelImg"
                  />
                </div>
                </Carousel.Slide>
              ))}
    </Carousel>
  );
}
