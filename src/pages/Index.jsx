import { Box, Container, Heading, Text, Image, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaFish, FaPlus, FaShoppingCart, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          African Catfish Farming
        </Heading>
        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1621905253185-95614217f357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2F0ZmlzaHxlbnwwfHx8fDE3MTQ2MDcxNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="African Catfish" objectFit="cover" />
        <Text fontSize="xl" textAlign="center">
          Welcome to the premier resource for all things related to African Catfish farming. Explore our resources, tips, and products to help you raise healthy and profitable catfish.
        </Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Fish Feed
          </Heading>
          <Text mt={4}>Proper nutrition is crucial for the growth and health of African Catfish. We offer a variety of high-quality feeds that are specially formulated to promote growth and health in catfish.</Text>
          <HStack spacing={4} mt={4}>
            <Button leftIcon={<Icon as={FaShoppingCart} />} colorScheme="teal" variant="solid">
              Buy Feed
            </Button>
            <Button leftIcon={<Icon as={FaPlus} />} colorScheme="gray" variant="outline">
              Learn More
            </Button>
            <Button leftIcon={<Icon as={FaFacebook} />} colorScheme="blue" variant="solid">
              Follow on Facebook
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
