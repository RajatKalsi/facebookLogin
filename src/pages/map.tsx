import Head from "next/head";
import Script from "next/script";
import { useEffect, useRef } from "react";
import React from "react";
import GoogleMapReact from 'google-map-react';
const GoogleMap=()=>{
const mapRef=useRef(null) as any
const defaultProps = {
  center: {
    lat: 21.99835602,
    lng: 78.01502627
  },
  zoom: 11
};

return (
  // Important! Always set the container height explicitly
  <div style={{ height: '500px', width: '50%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {/* <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      /> */}
    </GoogleMapReact>
  </div>
);
}
export default GoogleMap;