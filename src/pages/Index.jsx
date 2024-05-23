import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Index = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView([59.292, 18.619], 13);

    // Set up the OpenStreetMap layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker at Sollenkroka
    L.marker([59.292, 18.619]).addTo(map).bindPopup("Sollenkroka").openPopup();
  }, []);

  return <Box id="map" width="100vw" height="100vh" />;
};

export default Index;