import React from 'react';
import BreakingNews from '../../BreakingNews/BreakingNews';

import Section3 from '../../Sections/Section3';
import Section4 from '../../Sections/Section4';
import PhotoGallery from '../../Sections/SectionPhotos';
import VideoSection from '../../Sections/SectionViedeos';

const Home = () => {
  return (
    <div className="w-full">
      

      <BreakingNews/>
      <Section3/>
      <Section4/>
      <PhotoGallery/>
      <VideoSection/>
    
    </div>
  );
};

export default Home;
