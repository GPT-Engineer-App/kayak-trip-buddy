import { useState, useEffect } from "react";
import { Container, VStack, Box, Heading, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import "leaflet-geometryutil"; // Import leaflet-geometryutil

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Index = () => {
  const [routeLength, setRouteLength] = useState(0);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    const savedRoute = localStorage.getItem("kayakingRoute");
    if (savedRoute) {
      setRoute(JSON.parse(savedRoute));
    }
  }, []);

  const handleDrawCreated = (e) => {
    const layer = e.layer;
    const latLngs = layer.getLatLngs();
    const length = L.GeometryUtil.length(latLngs); // Use leaflet-geometryutil to calculate length
    setRouteLength(length / 1000); // Convert to kilometers
    
    setRoute(latLngs);
    localStorage.setItem("kayakingRoute", JSON.stringify(latLngs));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Kayaking Trip Planner</Heading>
        <Box width="100%" height="70vh" bg="gray.200" borderRadius="md" display="flex" justifyContent="center" alignItems="center">
          <MapContainer center={[59.3706, 18.6984]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <FeatureGroup>
              <EditControl
                position="topright"
                onCreated={handleDrawCreated}
                draw={{
                  rectangle: false,
                  circle: false,
                  circlemarker: false,
                  marker: false,
                  polygon: false,
                  polyline: true,
                }}
              />
              {route.length > 0 && (
                <L.polyline positions={route} />
              )}
            </FeatureGroup>
          </MapContainer>
        </Box>
      <Text fontSize="lg">Route Length: {routeLength.toFixed(2)} km</Text>
      </VStack>
    </Container>
  );
};

export default Index;