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
    width={864}
    height={140}
    viewBox="0 0 864 140"
    backgroundColor="#fdfcfc"
    foregroundColor="#ededed"
  >
    <rect x="252" y="4" rx="3" ry="3" width="88" height="14" /> 
    <rect x="366" y="4" rx="3" ry="3" width="179" height="14" /> 
    <rect x="379" y="66" rx="3" ry="3" width="53" height="14" /> 
    <rect x="464" y="65" rx="3" ry="3" width="115" height="14" /> 
    <rect x="270" y="66" rx="3" ry="3" width="100" height="14" /> 
    <rect x="252" y="95" rx="3" ry="3" width="58" height="14" /> 
    <rect x="270" y="34" rx="3" ry="3" width="140" height="14" /> 
    <rect x="418" y="34" rx="3" ry="3" width="224" height="14" /> 
    <rect x="12" y="140" rx="0" ry="0" width="225" height="122" /> 
    <rect x="329" y="96" rx="3" ry="3" width="92" height="14" /> 
    <rect x="4" y="1" rx="0" ry="0" width="225" height="140" /> 
    <rect x="253" y="121" rx="3" ry="3" width="67" height="14" /> 
    <rect x="342" y="121" rx="3" ry="3" width="174" height="14" /> 
    <rect x="525" y="94" rx="3" ry="3" width="124" height="14" />
  </ContentLoader>
  )
}
export default {PlaceholderItemRow, PlaceholderItemVertical, PlaceholderItemSlider, PlaceholderItemVerticalTab}