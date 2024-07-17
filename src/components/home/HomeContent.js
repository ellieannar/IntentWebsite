import React from 'react';
import './HomeContent.css';
import Features from './Features';
import PhotoPanel from './PhotoPanel';
import campersLaughing from '../../assets/images/campersLaughing.jpg'
import Button from './Button';
import Footer from '../footer/Footer';

const HomeContent = () => {
  const videoUrl = process.env.PUBLIC_URL + '/videos/intentBanner.mp4';

  return (
    <div className='home-content'>
      <div className='video-container'>
        <video muted autoPlay loop className='background-video'>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='video-overlay'>
          {/* <Tag title="Camp Management Software" backgroundColor="black" textColor="white"/> */}
          <div className='video-panel-title'>We're More Than Just <br/>A Software Solution</div>
          <div className='video-panel-body'>Our all-in-one camp management software makes camp operations a breeze through effortlessly managing registration, guest groups, scheduling, and more.</div>
          <div className='video-panel-buttons'>
            <Button text={"Beta Group"} link={""} backgroundColor={"black"} textColor={"white"} />
            <Button text={"More Info"} link={""} backgroundColor={"black"} textColor={"white"} />
          </div>
        </div>
      </div>
      <Features />
      <PhotoPanel image={campersLaughing} />
      {/* <QuadrantContainer/> */}
      {/* <RoundedCornerImage image={hiking} corners={[CORNER.top_left]} width='60%' /> */}
    </div>
  );
};

export default HomeContent;
