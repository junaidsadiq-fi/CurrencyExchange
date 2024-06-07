"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapbox_api = process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? "";
mapboxgl.accessToken = mapbox_api;

const locations = [
  {
    name: "Viale Antonio Gramsci 97, Modena 41122",
    coordinates: [10.936048185220686, 44.6572193156619],
  },
  {
    name: "Viale Guido Mazzoni 31/33, Modena 41121",
    coordinates: [10.93362246505307, 44.65341053630263],
  },
  {
    name: "Piazza della libertà 37, Sassuolo 41049",
    coordinates: [10.782896998153038, 44.54467082747539], 
  },
  {
    name: "Via Ciro Menotti 26, Carpi 41012",
    coordinates: [10.883660486505839, 44.78414548441358],
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
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      // Create bounds to fit all locations
      const bounds = new mapboxgl.LngLatBounds();

      locations.forEach((location) => {
        // Extend bounds to include each location's coordinates
        bounds.extend(location.coordinates);

        const marker = new mapboxgl.Marker({
          color: "blue", // Change marker color here
        })
          .setLngLat(location.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(location.name))
          .addTo(map.current);

        // Add click event listener to each marker
        marker.getElement().addEventListener("click", () => {
          map.current.flyTo({
            center: location.coordinates,
            essential: true, // this animation is considered essential with respect to prefers-reduced-motion
          });
        });
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
      style={{ width: "100%", height: "600px", borderRadius: "40px" }}
    />
  );
};

export default Map;
