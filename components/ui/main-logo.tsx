import React from 'react';

export const LightLogo = () => (
  <div className="eth-ui">
    <svg className="transform scale-75 max-h-12" xmlns="http://www.w3.org/2000/svg" viewBox="150.9741 215.9361 9.49 14.537" width="54" fill="#333">
      <g transform="matrix(1, 0, 0, 1, 183.55211168213046, 188.8490783190578)">
        <g>
          <path d="M -27.808 37.497 L -23.088 34.767 L -27.808 27.087 Z" fill="rgb(55, 55, 55)"/>
          <path d="M -27.808 27.087 L -32.578 34.767 L -27.808 37.497 Z" fill="rgb(55, 55, 55)"/>
        </g>
        <g>
          <path d="M -23.088 35.074 L -27.808 37.784 L -27.808 41.584 L -23.088 35.074 Z" fill="rgb(50, 50, 50)"/>
          <path d="M -27.808 41.624 L -27.808 37.784 L -32.538 34.994 L -27.808 41.624" fill="rgb(20, 20, 20)"/>
        </g>
      </g>
    </svg>
    <h2 className="eth-ui-white-text">EVM</h2>
    <h3 className="eth-ui-white-text">PM</h3>
  </div>
);

export const DarkLogo = () => (
<div className="eth-ui hover:animate-pulse transition-all duration-300">
  <svg className="transform scale-62 max-h-8 w-[48px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.49 16.63" fill="#fff">
    <path d="M5.61,0,.84,7.68l4.77,2.73Zm0,14.63V10.79L.88,8Zm0-4.22,4.72-2.73L5.61,0Zm4.72-2.33L5.61,10.79v3.8Z" transform="translate(-0.84)" />
  </svg>
  <div>
    <h2 className="eth-ui-white-text font-black mb-x">Degentic Systems</h2>
    {/* <h3 className="eth-ui-white-text inline-flex font-bold mt-x">- secured -</h3> */}
  </div>
</div>
);