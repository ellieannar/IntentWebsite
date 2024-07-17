import React from 'react';
import './OurSolution.css';

const ComparisonSection = () => {
  return (
    <div className='comparison-section'>
      <h2>Why Choose Us?</h2>
      <div className='comparison-table'>
        <div className='comparison-row'>
          <div className='comparison-cell'>Feature</div>
          <div className='comparison-cell'>Our Solution</div>
          <div className='comparison-cell'>Competitor A</div>
          <div className='comparison-cell'>Competitor B</div>
        </div>
        <div className='comparison-row'>
          <div className='comparison-cell'>Registration</div>
          <div className='comparison-cell'>Streamlined and user-friendly</div>
          <div className='comparison-cell'>Complex and outdated</div>
          <div className='comparison-cell'>Limited functionality</div>
        </div>
        {/* <!-- Add more rows as needed --> */}
      </div>
    </div>
  );
};

export default ComparisonSection;
