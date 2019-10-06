import React from 'react'

const divStyle = {
  width: 80,
  height: 80,
};

const CrossComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" {...props} className="crosssvg" style={divStyle}>
    <path d="M10 23a1 1 0 01-.707-1.707l12-12a1 1 0 111.414 1.414l-12 12A.997.997 0 0110 23z" className="crosspath"/>
    <path d="M22 23a.997.997 0 01-.707-.293l-12-12a1 1 0 111.414-1.414l12 12A1 1 0 0122 23z" className="crosspath"/>
  </svg>
)

export default CrossComponent