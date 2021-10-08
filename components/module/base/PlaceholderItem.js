import React from 'react';
import ContentLoader from "react-content-loader"

export  function PlaceholderItemRow(){
  return(
    <ContentLoader 
    speed={2}
    width={440}
    height={340}
    viewBox="0 0 440 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="16" y="14" rx="7" ry="7" width="400" height="176" /> 
    <rect x="17" y="195" rx="2" ry="2" width="140" height="10" /> 
    <rect x="19" y="229" rx="2" ry="2" width="207" height="10" /> 
    <rect x="19" y="211" rx="2" ry="2" width="347" height="14" /> 
    <rect x="21" y="267" rx="2" ry="2" width="386" height="14" /> 
    <rect x="19" y="247" rx="2" ry="2" width="388" height="14" />
  </ContentLoader>
  )
}
export  function PlaceholderItemSlider(){
  return(
    <ContentLoader 
    speed={2}
    width={366}
    height={340}
    viewBox="0 0 440 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="16" y="14" rx="7" ry="7" width="400" height="176" /> 
    <rect x="17" y="195" rx="2" ry="2" width="140" height="10" /> 
    <rect x="19" y="229" rx="2" ry="2" width="207" height="10" /> 
    <rect x="19" y="211" rx="2" ry="2" width="347" height="14" /> 
    <rect x="21" y="267" rx="2" ry="2" width="386" height="14" /> 
    <rect x="19" y="247" rx="2" ry="2" width="388" height="14" />
  </ContentLoader>
  )
}


export  function PlaceholderItemVertical(){
  return(
<ContentLoader 
    speed={2}
    width={680}
    height={140}
    viewBox="0 0 680 140"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="245" y="12" rx="3" ry="3" width="308" height="11" /> 
    <rect x="247" y="41" rx="3" ry="3" width="286" height="11" /> 
    <rect x="245" y="69" rx="3" ry="3" width="134" height="11" /> 
    <rect x="300" y="108" rx="3" ry="3" width="88" height="6" /> 
    <rect x="305" y="118" rx="3" ry="3" width="52" height="5" /> 
    <circle cx="279" cy="118" r="15" /> 
    <rect x="3" y="7" rx="0" ry="0" width="225" height="124" /> 
    <rect x="183" y="93" rx="0" ry="0" width="2" height="0" /> 
    <rect x="313" y="139" rx="3" ry="3" width="52" height="5" /> 
    <rect x="302" y="129" rx="3" ry="3" width="52" height="5" /> 
    <rect x="461" y="110" rx="3" ry="3" width="88" height="6" /> 
    <rect x="466" y="120" rx="3" ry="3" width="52" height="5" /> 
    <rect x="463" y="131" rx="3" ry="3" width="52" height="5" />
  </ContentLoader>
  )
}

export  function PlaceholderItemVerticalTab(){
  return(
<ContentLoader 
    speed={2}
    width={764}
    height={140}
    viewBox="0 0 680 140"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="245" y="12" rx="3" ry="3" width="308" height="11" /> 
    <rect x="247" y="41" rx="3" ry="3" width="286" height="11" /> 
    <rect x="245" y="69" rx="3" ry="3" width="134" height="11" /> 
    <rect x="300" y="108" rx="3" ry="3" width="88" height="6" /> 
    <rect x="305" y="118" rx="3" ry="3" width="52" height="5" /> 
    <circle cx="279" cy="118" r="15" /> 
    <rect x="3" y="7" rx="0" ry="0" width="225" height="124" /> 
    <rect x="183" y="93" rx="0" ry="0" width="2" height="0" /> 
    <rect x="313" y="139" rx="3" ry="3" width="52" height="5" /> 
    <rect x="302" y="129" rx="3" ry="3" width="52" height="5" /> 
    <rect x="461" y="110" rx="3" ry="3" width="88" height="6" /> 
    <rect x="466" y="120" rx="3" ry="3" width="52" height="5" /> 
    <rect x="463" y="131" rx="3" ry="3" width="52" height="5" />
  </ContentLoader>
  )
}
export default {PlaceholderItemRow, PlaceholderItemVertical, PlaceholderItemSlider, PlaceholderItemVerticalTab}