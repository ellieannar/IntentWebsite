import React from 'react'
import FeatureItem from './FeatureItem'
import './HomeContent.css'
import { faClipboard, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faHandHoldingDollar, faUsers, faClipboardUser, faUtensils, faHouse, faChurch } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons/faHeartPulse';


const Features = () => {
  return (
    <div>
        <div className='features-heading'>
            <div className='features-heading-title'>Streamline Operations</div>
            <div className='features-heading-body'>Intent provides all the tools you need to manage your camp effortlessly.</div>
        </div>
        <div className='feature-row'>
            <FeatureItem icon={faClipboard} title={"Registration"} body={"Streamline the registration process for campers and families"}/>
            <FeatureItem icon={faUsers} title={"Group Management"} body={"Streamline the registration process for campers and families"}/>
            <FeatureItem icon={faCreditCard} title={"Point of Sale"} body={"Streamline the registration process for campers and families"}/>
        </div>
        <div className='feature-row'>
            <FeatureItem icon={faHeartPulse} title={"Health Portal"} body={"Streamline the registration process for campers and families"}/>
            <FeatureItem icon={faHandHoldingDollar} title={"Donor Portal"} body={"Streamline the registration process for campers and families"}/>
            <FeatureItem icon={faClipboardUser} title={"Staff Applications"} body={"Streamline the registration process for campers and families"}/>
        </div>
        <div className='feature-row'>
            <FeatureItem icon={faHouse} title={"Camper Management & Organization"} body={"Streamline the registration process for campers and families"}/>
            <FeatureItem icon={faChurch} title={"Church Connect"} body={"Streamline the registration process for campers and families"}/>
            <FeatureItem icon={faUtensils} title={"Food Service"} body={"Streamline the registration process for campers and families"}/>
        </div>
  </div>
  )
}

export default Features
