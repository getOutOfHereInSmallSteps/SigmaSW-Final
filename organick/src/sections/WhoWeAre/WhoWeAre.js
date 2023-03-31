import React from 'react';
import Heading from '../../components/Typography/Heading';
import List from '../../components/Typography/List';
import Subheading from '../../components/Typography/Subheading';
import FlexContainer from '../../components/UI/FlexContainer';
import ListItem from '../../components/Typography/ListItem';

const WhoWeAre = () => {
  return (
    <div className="bg-[url('./imgs/whoweare.jpg')] bg-no-repeat bg-contain py-[10rem] mb-[10rem]">
      <FlexContainer>
        <div className="bg-color-white rounded-[30px] p-[7.8rem] max-w-[80rem] justify-self-end">
          <Subheading>Eco Friendly</Subheading>
          <Heading className="text-[5rem] mb-[3.6rem]">
            Econis is a Friendly Organic Store
          </Heading>
          <List className="gap-[3.6rem]">
            <ListItem heading="Start with Our Company First" hideIcon>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </ListItem>
            <ListItem heading="Learn How to Grow Yourself" hideIcon>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </ListItem>
            <ListItem heading="Farming Strategies of Today" hideIcon>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </ListItem>
          </List>
        </div>
      </FlexContainer>
    </div>
  );
};

export default WhoWeAre;
