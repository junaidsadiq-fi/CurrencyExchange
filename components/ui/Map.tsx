"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapbox_api = process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '';
mapboxgl.accessToken = mapbox_api;

const locations = [
  /*  Viale Antonio Gramsci 97 Modena 41122 ITALY */
  { name: "Modena", coordinates: [10.9254, 44.6488] },
  { name: "Rome", coordinates: [12.4964, 41.9028] },
  { name: "Milan", coordinates: [9.19, 45.4642] },
  { name: "Naples", coordinates: [14.2681, 40.8518] },
  { name: "Palermo", coordinates: [13.3615, 38.1157] },
];

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [10.9254, 44.6488], // Centered at Rome
      zoom: 5,
    });

    locations.forEach((location) => {
      new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(location.name))
        .addTo(map.current);
    });
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "500px", borderRadius: "40px" }}
    />
  );
};

export default Map;
