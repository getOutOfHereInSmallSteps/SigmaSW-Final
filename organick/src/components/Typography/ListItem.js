import React from 'react';

import styles from './ListItem.module.scss';

import Flex from '../UI/Flex';
import Heading from './Heading';
import Paragraph from './Paragraph';

const listItemHeadingStyles = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  width: 'fit-content',
};

const listItemParagraphStyles = {
  width: 'fit-content',
};

const flexStyles = {
  gap: '1rem',
};

const ListItem = props => {
  return (
    <li style={props.style} className={styles['list__item']}>
      <Flex style={flexStyles}>
        {!props.hideIcon && (
          <div className={styles['list__item-icon']}>{props.icon}</div>
        )}

        <div>
          <Heading style={listItemHeadingStyles}>{props.heading}</Heading>
          <Paragraph style={listItemParagraphStyles}>
            {props.children}
          </Paragraph>
        </div>
      </Flex>
    </li>
  );
};

export default ListItem;
