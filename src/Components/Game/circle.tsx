import React from 'react'
import './style.scss';

const divStyle = {
  width: 80,
  height: 80,
};

const CircleComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 200" {...props} className="circlesvg" style={divStyle}>
    <circle cx={100} cy={100} r={60} className="circlepath" />
  </svg>
)

export default CircleComponent
