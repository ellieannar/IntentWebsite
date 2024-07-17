import React, { useState } from 'react';
import FeatureSection from './FeatureSection';
import ComparisonSection from './ComparisonSection';
import InteractiveGallery from './InteractiveGallery';
import FeatureModal from './FeatureModal';
import './OurSolution.css';
import happyCampers from '../../assets/images/happyCampers.jpg'

const OurSolution = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleCloseModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className='our-solution'>
      <div className='photo-container'>
            <img src={happyCampers} alt='Campers Worshiping' className='about-heading-image'/>
            <div className='photo-overlay'>
            <div className='photo-panel-title'>OUR SOLUTION</div>
            <div className='photo-panel-body'>Discover how our comprehensive camp management software can streamline your operations and enhance your camp experience.</div>
            </div>
        </div>
      <FeatureSection onFeatureClick={handleFeatureClick} />
      {/* <ComparisonSection />
      <InteractiveGallery /> */}
      {selectedFeature && <FeatureModal feature={selectedFeature} onClose={handleCloseModal} />}
    </div>
  );
};

export default OurSolution;
