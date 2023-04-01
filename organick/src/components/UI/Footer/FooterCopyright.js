import React from 'react';

import Paragraph from '../../Typography/Paragraph';

const FooterCopyright = () => {
  return (
    <div className="text-center">
      <Paragraph className="mb-4">
        Copyright © <span className="font-bold">Organick</span> | Designed by
        <span className="font-bold"> VictorFlow</span> Templates - Powered by
        <span className="font-bold"> Webflow</span>
      </Paragraph>
    </div>
  );
};

export default FooterCopyright;
