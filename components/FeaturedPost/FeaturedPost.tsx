import React, { useState, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import { client } from '../../utils/client';
import { getFeaturedPost } from '../../utils/query';
import FeaturedPostCard from './FeaturedPostCard';
import { CarouselStyle, FeaturedPostContainer } from './styles';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPost = () => {
  const [ featuredPosts, setFeaturedPost ] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

useEffect(() => {
     client.fetch(getFeaturedPost())
    .then((data) => {
      setFeaturedPost(data);
      setDataLoaded(true);
    })

}, []);

  return (
    <FeaturedPostContainer>
      <CarouselStyle infinite responsive={responsive} >
        {dataLoaded && featuredPosts.map((post, i) => (
          <FeaturedPostCard key={i} post={post} />
        ))}
      </CarouselStyle>
    </FeaturedPostContainer>
  )
}

export default FeaturedPost