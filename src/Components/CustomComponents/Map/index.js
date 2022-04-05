import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";

import { GiPositionMarker } from "react-icons/gi";
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MBMAPKEY,
});
const GMap = ({ coordinates }) => {
  return (
    <Map
      style={`mapbox://styles/mapbox/light-v10`}
      containerStyle={{
        height: "25vh",
        width: "100%",
        borderRadius: 10,
      }}
      center={[coordinates.lng, coordinates.lat]}
      zoom={[coordinates.zoom]}
    >
      <Marker coordinates={[coordinates.lng, coordinates.lat]}>
        <GiPositionMarker size={30} color="#FC6E20" />
      </Marker>
    </Map>
  );
};
export default GMap;
