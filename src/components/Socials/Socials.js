import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon as BrandIcon } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Socials.css';

const Socials = () => {
  return (
    <div className="socials-bar">
      <a
        href="https://ryanwhitmore.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGlobe} />
      </a>
      <a
        href="https://gist.githubusercontent.com/warptrail/e8719df085ccb891310ccb5c80618b54/raw/6410274344a22517d39738847522bbb9bec0be85/gistfile1.txt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://www.linkedin.com/in/ryanwhitmoredev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/warptrail"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://twitter.com/whitmorespace"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export default Socials;
