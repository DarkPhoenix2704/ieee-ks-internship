import { Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa"
export const Navbar = () => {
  return (
    <HStack width="100vw" justifyContent="space-between" paddingInline="36px" paddingBlock="10px">
      <Heading>Untitled UI</Heading>
      <HStack display={{
        base: 'none',
        lg: 'flex'
      }} spacing="25px" textColor="blackAlpha.700">
        <Text>
          Home
        </Text>
        <Text>
          Products
        </Text>
        <Text>
          Resources
        </Text>
        <Text>
          Pricing
        </Text>
      </HStack>
      <Icon display={{
      base: 'block',
      lg: 'none'
      }} as={FaBars} height="35px" width="35px" />
    </HStack>
  );
};