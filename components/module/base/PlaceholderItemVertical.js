import React from 'react';
import ContentLoader from "react-content-loader"
function PlaceholderItemVertical() {
  return (
    <ContentLoader 
    speed={2}
    width={471}
    height={519}
    viewBox="0 0 471 519"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="7" y="339" rx="2" ry="2" width="257" height="18" /> 
    <rect x="7" y="9" rx="2" ry="2" width="400" height="322" /> 
    <rect x="7" y="364" rx="2" ry="2" width="356" height="18" /> 
    <rect x="9" y="395" rx="2" ry="2" width="398" height="10" /> 
    <rect x="9" y="410" rx="2" ry="2" width="247" height="10" /> 
    <rect x="9" y="427" rx="2" ry="2" width="398" height="10" /> 
    <rect x="9" y="481" rx="2" ry="2" width="151" height="30" /> 
    <rect x="9" y="453" rx="2" ry="2" width="191" height="8" /> 
    <rect x="9" y="465" rx="2" ry="2" width="191" height="8" />
  </ContentLoader>
  );
}
export default PlaceholderItemVertical;