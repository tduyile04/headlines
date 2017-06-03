import React from 'react';
import banner1 from '../../../../images/war1.jpg';
import banner2 from '../../../../images/jared.jpg';
import banner3 from '../../../../images/bomb.jpg';

class Slider extends React.Component {
  render() {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img src={banner1} className='images' />
            <div className="image-tag caption left-align">
              <h3>Trump one step from war.</h3>
              <h5>
                TIME 
              </h5>
            </div>
          </li>
          <li>
            <img src={banner2} className='images' />
            <div className="image-tag caption center-align">
              <h3>The Trials of Jared Krushner</h3>
              <h5>
                USA TODAY
              </h5>
            </div>
          </li>
          <li>
            <img src={banner3} className='images' />
            <div className="image-tag caption right-align">
              <h3>13 hurt in Afghanistan bombing</h3>
              <h5>
                CNN
              </h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;