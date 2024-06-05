"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapbox_api = process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? '';
mapboxgl.accessToken = mapbox_api;

const locations = [
  {
    name: "Viale Antonio Gramsci 97, Modena 41122",
    coordinates: [10.9259, 44.6535],
  },
  {
    name: "Viale Guido Mazzoni 31/33, Modena 41121",
    coordinates: [10.9247, 44.6460],
  },
  {
    name: "Piazza della libertà 37, Sassuolo 41049",
    coordinates: [10.7845, 44.5535],
  },
];

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [10.9254, 44.6488], // Centered at Modena
      zoom: 5,
    });

    // Add zoom and rotation controls to the map.
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Create bounds to fit all locations
      const bounds = new mapboxgl.LngLatBounds();
      
      locations.forEach((location) => {
        // Extend bounds to include each location's coordinates
        bounds.extend(location.coordinates);

        new mapboxgl.Marker()
          .setLngLat(location.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(location.name))
          .addTo(map.current);
      });

      // Fit the map to the bounds with padding
      map.current.fitBounds(bounds, {
        padding: 60,
        maxZoom: 14, // Maximum zoom to fit all locations
      });
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