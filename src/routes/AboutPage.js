import React, { useEffect } from 'react';
import About from '../components/About/About';

const AboutPage = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
  }, []);

  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
