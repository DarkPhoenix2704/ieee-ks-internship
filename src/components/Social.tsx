import { Flex, Text, HStack, Icon } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaDribbble } from "react-icons/fa";

export const Social = () => {
  return (
    <Flex paddingInline="36px" alignItems="center" width="100vw" paddingBlock="15px" rowGap="10px" flexDirection={{
      base: 'column-reverse',
      lg: 'row'
    }} justifyContent="space-between">
      <Text textColor="blackAlpha.700">
        © 2077 Untitled UI All rights reserved
      </Text>
      <HStack spacing="15px" justifyContent="center">
        <Icon as={FaTwitter} color="blackAlpha.700" height="30px" width="30px" />
        <Icon as={FaLinkedin} color="blackAlpha.700" height="30px" width="30px" />
        <Icon as={FaGithub} color="blackAlpha.700" height="30px" width="30px" />
        <Icon as={FaFacebook} color="blackAlpha.700" height="30px" width="30px" />
        <Icon as={FaDribbble} color="blackAlpha.700" height="30px" width="30px" />
      </HStack>
    </Flex>
  );
};