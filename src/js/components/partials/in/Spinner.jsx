import React from 'react';
/**
 * Spinner component that displays a loop ainmation while page
 * is loading
 * @class Spinner
 * @extends {React.Component}
 */
const Spinner = () => {
  return (
    <div className="preloader-wrapper big active center-align">
      <div className="spinner-layer spinner-blue center-align">
        <div className="circle-clipper left">
          <div className="circle " />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>

      <div className="spinner-layer spinner-red center-align">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>

      <div className="spinner-layer spinner-yellow center-align">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>

      <div className="spinner-layer spinner-green center-align">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
