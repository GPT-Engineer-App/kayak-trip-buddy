import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Kayaking Trip Planner</Heading>
        <Box width="100%" height="400px" bg="gray.200" borderRadius="md" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl" color="gray.500">Map Placeholder</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;