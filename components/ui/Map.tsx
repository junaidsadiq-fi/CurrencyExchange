"use client";
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapbox_api = process.env.NEXT_PUBLIC_MAPBOX_API_KEY ?? "";
mapboxgl.accessToken = mapbox_api;

interface Location {
  name: string;
  coordinates: [number, number];
  address: string;
  phone: string;
  whatsapp?: string;
}

interface MapProps {
  locations: Location[];
  selectedLocation: [number, number] | null;
}

const Map = ({ locations, selectedLocation }: MapProps) => {
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

      locations.forEach((location, index) => {
        // Extend bounds to include each location's coordinates
        bounds.extend(location.coordinates);
      
        // Add a small offset for each marker
        const offset = index * 0.0001;
      
        const marker = new mapboxgl.Marker({
          color: "blue", // Change marker color here
        })
          .setLngLat([location.coordinates[0] + offset, location.coordinates[1] + offset])
          .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(location.name))
          .addTo(map.current);
      
        // Fit the map to the bounds with padding
        map.current.fitBounds(bounds, {
          padding: 60,
          maxZoom: 14, // Maximum zoom to fit all locations
        });
      });
    });
  }, [locations]);

  useEffect(() => {
    if (selectedLocation && map.current) {
      map.current.flyTo({
        center: selectedLocation,
        zoom: 15,
        essential: true,
      });
    }
  }, [selectedLocation]);

  return (
    <div
      ref={mapContainer}
      style={{ width: "100%", height: "600px", borderRadius: "40px" }}
    />
  );
};

export default Map;
