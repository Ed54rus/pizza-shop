import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={3}
    width={280}
    height={475}
    viewBox="0 0 280 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="124" y="430" rx="25" ry="25" width="150" height="45" /> 
    <rect x="0" y="325" rx="8" ry="8" width="280" height="90" /> 
    <rect x="0" y="280" rx="4" ry="4" width="280" height="28" /> 
    <rect x="35" y="440" rx="4" ry="4" width="68" height="35" /> 
    <rect x="0" y="447" rx="4" ry="4" width="28" height="28" /> 
    <rect x="-2" y="475" rx="0" ry="0" width="269" height="12" />
  </ContentLoader>
)

export default Skeleton

