import React from 'react'
import './AboutContent.css'
import { faHandHolding, faShieldHalved, faMedal } from '@fortawesome/free-solid-svg-icons';
import ValueItem from './ValueItem';

const Values = () => {
  return (
    <div className='values-section'>
      <div className='values-title'>Our Values</div>
      <div className='values-container'>
        <div className='value'>
          <ValueItem title={"Service"} body={""} icon={faHandHolding} />
          <div className='value-description'>
            We are committed to serving our customers, employees, and community with dedication and humility. This involves providing outstanding support, being responsive to customer needs, and going above and beyond to ensure satisfaction. We emphasize a customer-first mindset where helping others is a core principle, reflecting a commitment to making a positive impact through our work.
          </div>
        </div>
        <div className='value'>
          <ValueItem title={"Integrity"} body={""} icon={faShieldHalved} />
          <div className='value-description'>
            We operate with honesty and transparency in all our business dealings. This includes being truthful with our customers about what our software can and cannot do, protecting user data and privacy, and adhering to ethical business practices. Integrity helps build trust and long-term relationships with our clients.
          </div>
        </div>
        <div className='value'>
          <ValueItem title={"Excellence"} body={""} icon={faMedal} />
          <div className='value-description'>
            We strive for excellence in all aspects of our business, from the quality of our software to the support and services we provide. This means continuously improving our product, staying up-to-date with the latest technology trends, and ensuring our software meets the needs of our users efficiently and effectively.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values
