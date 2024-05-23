import { Container, VStack, Box, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Kayaking Trip Planner</Heading>
        <Box width="100%" height="100vh" bg="gray.200" borderRadius="md" display="flex" justifyContent="center" alignItems="center">
          <MapContainer center={[59.292, 18.619]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[59.292, 18.619]} icon={customIcon}>
              <Popup>
                Sollenkroka - Starting Point
              </Popup>
            </Marker>
          </MapContainer>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;