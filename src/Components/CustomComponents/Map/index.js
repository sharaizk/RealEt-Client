import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MBMAPKEY,
});
const GMap = ({ longitute, lattitude }) => {
  return (
    <Map
      style={`mapbox://styles/mapbox/light-v10`}
      containerStyle={{
        height: "25vh",
        width: "100%",
        borderRadius: 10,
      }}
      center={[74.358749, 31.52037]}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[74.358749, 31.52037]} />
      </Layer>
    </Map>
  );
};
export default GMap;
