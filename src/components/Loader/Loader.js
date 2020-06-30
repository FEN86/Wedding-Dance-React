import React from 'react';
import './Loader.scss';

const Loader = () => {
  return  (
      <div className="wrap-loader">
          <div className="loader">
              <div className="loader__bounceball"></div>
              <div className="loader__text">NOW LOADING</div>
          </div>
      </div>
  )
}

export default Loader