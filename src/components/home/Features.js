import React from 'react';
import FeatureItem from './FeatureItem';
import './HomeContent.css';
import { faClipboard, faCreditCard, faHandHoldingDollar, faUsers, faClipboardUser, faUtensils, faHouse, faChurch, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import camperSmiling from '../../assets/images/camperSmiling.jpg'
import campersLaughing from '../../assets/images/campersLaughing.jpg'
import campersWorshiping from '../../assets/images/campersWorshiping.jpg'
import guitarPlaying from '../../assets/images/guitarplaying.jpg'
import happyCampers from '../../assets/images/happyCampers.jpg'
import hiking from '../../assets/images/hiking.jpg'
import slipnslide from '../../assets/images/slipnslide.jpg'

const Features = () => {
  return (
    <div className='features-section'>
      <div className='features-heading'>
        <div className='features-heading-title'>Streamline Operations</div>
        <div className='features-heading-body'>Intent provides all the tools you need to manage your camp effortlessly.</div>
      </div>
      <div className='feature-carousel'>
        <FeatureItem icon={faClipboard} title={"Registration"} body={"Streamline the registration process for campers and families"} image={camperSmiling} />
        <FeatureItem icon={faUsers} title={"Group Management"} body={"Efficiently manage groups and team assignments"} image={campersWorshiping} />
        <FeatureItem icon={faCreditCard} title={"Point of Sale"} body={"Easily handle transactions and sales online and in-person"} image={guitarPlaying} />
        <FeatureItem icon={faHeartPulse} title={"Health Portal"} body={"Maintain and access health records securely"} image={happyCampers} />
        <FeatureItem icon={faHandHoldingDollar} title={"Donor Portal"} body={"Manage donations and donor information"} image={campersLaughing} />
        <FeatureItem icon={faClipboardUser} title={"Staff Applications"} body={"Streamline staff application and onboarding"} image={hiking} />
        <FeatureItem icon={faHouse} title={"Camper Management & Organization"} body={"Keep camper information organized and accessible"} image={slipnslide} />
        <FeatureItem icon={faChurch} title={"Church Connect"} body={"Connect with church groups and communities"} image={'https://via.placeholder.com/150'} />
      </div>
    </div>
  );
}

export default Features;
