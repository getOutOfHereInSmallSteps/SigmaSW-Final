import React from 'react';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FadeInSection = props => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`${isVisible ? 'animate-fade' : ''}`}>
      {props.children}
    </div>
  );
};

export default FadeInSection;
