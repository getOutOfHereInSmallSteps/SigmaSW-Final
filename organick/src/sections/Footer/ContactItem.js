import React from 'react';
import Paragraph from '../../components/Typography/Paragraph';
import styles from './ContactItem.module.scss';

const ContactUs = ({ label, link }) => {
  return (
    <div className={styles['contact']}>
      <Paragraph
        style={{ display: label ? 'block' : 'none' }}
        className={styles['contact-label']}
      >
        {label || ''}
      </Paragraph>
      <a href="/" className={styles['contact-link']}>
        {link}
      </a>
    </div>
  );
};

export default ContactUs;
