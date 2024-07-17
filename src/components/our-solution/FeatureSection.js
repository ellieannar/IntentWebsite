import React from 'react';
import './OurSolution.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faCreditCard, faHandHoldingDollar, faUsers, faClipboardUser, faHouse, faChurch, faHeartPulse } from '@fortawesome/free-solid-svg-icons';

const features = [
  { icon: faClipboard, title: "Registration", description: "Streamline the registration process for campers and families.", details: "Detailed info about Registration with bullet points and images." },
  { icon: faUsers, title: "Group Management", description: "Efficiently manage camper groups and staff assignments.", details: "Detailed info about Group Management with bullet points and images." },
  { icon: faCreditCard, title: "Point of Sale", description: "Manage transactions and sales effortlessly.", details: "Detailed info about Point of Sale with bullet points and images." },
  { icon: faHeartPulse, title: "Health Portal", description: "Access and manage health records securely.", details: "Detailed info about Health Portal with bullet points and images." },
  { icon: faHandHoldingDollar, title: "Donor Portal", description: "Engage and manage donors easily.", details: "Detailed info about Donor Portal with bullet points and images." },
  { icon: faClipboardUser, title: "Staff Applications", description: "Streamline the staff application process.", details: "Detailed info about Staff Applications with bullet points and images." },
  { icon: faHouse, title: "Camper Management & Organization", description: "Organize and manage camper information effectively.", details: "Detailed info about Camper Management & Organization with bullet points and images." },
  { icon: faChurch, title: "Church Connect", description: "Connect and collaborate with church groups.", details: "Detailed info about Church Connect with bullet points and images." },
];

const FeatureSection = ({ onFeatureClick }) => {
  return (
    <div className='feature-section'>
      <h2>Features</h2>
      <p>Select a feature to learn more</p>
      <div className='features'>
        {features.map((feature, index) => (
          <div key={index} className='feature-item' onClick={() => onFeatureClick(feature)}>
            <FontAwesomeIcon icon={feature.icon} className='feature-icon' />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
