import { Container, VStack, Box, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

# Custom icon for the marker
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
    <Container centerContent maxW="container.xl" height="100vh" p={0}>
      <VStack spacing={0} width="100%" height="100%">
        <Heading as="h1" size="2xl" textAlign="center" p={4}>
          Kayaking Trip Planner
        </Heading>
        <Box width="100%" height="100%">
          <MapContainer
            center={[59.292, 18.619]}
            zoom={13}
            style={{ width: "100%", height: "100%" }}
          >
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