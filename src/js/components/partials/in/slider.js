import React from 'react';

class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img src="/images/war1.jpg" className='images' />
            <div className="image-tag caption left-align">
              <h3>Join other fastLearners. Own your learning, Change the world.</h3>
              <h5>
                You learn at your pace. Whether it takes a day or a year, we would be right by your side every 
                step of the way
              </h5>
            </div>
          </li>
          <li>
            <img src="/images/war1.jpg" className='images' />
            <div className="image-tag caption center-align">
              <h3>We are not bound by location. Are you ?</h3>
              <h5>Over a million people from diferrent part of the world are a member
                of our community
              </h5>
            </div>
          </li>
          <li>
            <img src="/images/war1.jpg" className='images' />
            <div className="image-tag caption right-align">
              <h3>Set your goals. We track your progress</h3>
              <h5>We offer quality assessments and reviews for each course taken to help you 
                measure your gowth
              </h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;