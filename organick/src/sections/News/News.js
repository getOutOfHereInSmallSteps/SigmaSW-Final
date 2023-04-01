import React from 'react';

import Subheading from '../../components/Typography/Subheading';
import Heading from '../../components/Typography/Heading';
import Button from '../../components/UI/Button';
import Container from '../../components/UI/Container';

import NewsPiece from './NewsPiece';

const News = () => {
  return (
    <Container className="mb-[20rem]">
      <div className="flex justify-between mb-[4.8rem]">
        <div className="max-w-[70rem]">
          <Subheading>News</Subheading>
          <Heading className="text-[5rem]">
            Discover weekly content about organic food, & more
          </Heading>
        </div>
        <Button type="white" className="h-fit self-end">
          More News
        </Button>
      </div>

      <div className="flex gap-[4.8rem] justify-between flex-wrap">
        <NewsPiece
          heading="The Benefits of Vitamin D & How to Get It"
          description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          author="Rachi Card"
          className="bg-[url('./imgs/news-1.png')]"
        />
        <NewsPiece
          heading="Our Favourite Summertime Tommeto"
          description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          author="Rachi Card"
          className="bg-[url('./imgs/news-2.png')]"
        />
      </div>
    </Container>
  );
};

export default News;
