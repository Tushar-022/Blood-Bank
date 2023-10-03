import React from 'react';
import Carousel from 'react-multi-carousel';

import { bannerData } from '../../constants/data';
import { Box, styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const Image = styled('img')(({theme})=>({
  width: '100%', /* Use 100% to cover the entire width of the container */
  height: 550, /* Set a fixed height or adjust as needed */
  [theme.breakpoints.down('sm')]:{
    objectFit:'cover',
    height:140
  }
}))

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Banner() {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item"
      autoPlay={true}
      autoPlaySpeed={2500}
      containerClass="carousel-container"
    >
     
      {bannerData.map(data => (
        <Image src={data.url} alt="banner" key={data.id} />
      ))}
    </Carousel>
  );
}
