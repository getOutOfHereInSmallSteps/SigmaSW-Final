import React from 'react';
import Heading from '../../components/Typography/Heading';
import List from '../../components/Typography/List';
import Subheading from '../../components/Typography/Subheading';
import FlexContainer from '../../components/UI/FlexContainer';
import ListItem from '../../components/Typography/ListItem';
import FadeInSection from '../../components/Animations/FadeInSection';

const WhoWeAre = () => {
  return (
    <FadeInSection>
      <div className="mb-40 bg-[url('./imgs/whoweare.jpg')] bg-contain bg-no-repeat py-40">
        <FlexContainer>
          <div className="max-w-[80rem] justify-self-end rounded-[30px] bg-color-white p-32">
            <Subheading>Eco Friendly</Subheading>
            <Heading className="mb-16 text-7xl">
              Econis is a Friendly Organic Store
            </Heading>
            <List className="gap-14">
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
    </FadeInSection>
  );
};

export default WhoWeAre;
