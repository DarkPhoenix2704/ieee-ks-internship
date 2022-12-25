import { Flex, Heading, Text, HStack, VStack } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex marginTop="0px" background="#F4F7FC" width="100vw" justifyContent="space-between" paddingInline="36px" paddingBlock="50px" flexDirection={{
      base: 'column',
      lg: 'row'
    }}>
      <VStack alignItems="flex-start">
        <Heading>
          Untitled UI
        </Heading>
        <Text maxWidth="350px">
          Design Amazing digital experiences that create more happy in the word
        </Text>
      </VStack>
      <Flex marginBlockStart="25px" columnGap="100px"
        rowGap="25px" flexDirection={{
          base: 'column',
          lg: 'row'
        }} >
        <HStack spacing="100px">
          <VStack alignItems="flex-start">
            <Text fontSize="15px" textColor="blackAlpha.700">
              Product
            </Text>
            <Text>
              Overview
            </Text>
            <Text>
              Festures
            </Text>
            <Text>
              Solutions
            </Text>
            <Text>
              Tutorials
            </Text>
            <Text>
              Pricing
            </Text>
            <Text>
              Releases
            </Text>
          </VStack>
          <VStack alignItems="flex-start">
            <Text fontSize="15px" textColor="blackAlpha.700">
              Company
            </Text>
            <Text>
              About Us
            </Text>
            <Text>
              Careers
            </Text>
            <Text>
              Press
            </Text>
            <Text>
              News
            </Text>
            <Text>
              Media kit
            </Text>
            <Text>
              Contact
            </Text>
          </VStack>
        </HStack>
        <HStack spacing="100px">
          <VStack alignItems="flex-start">
            <Text fontSize="15px" textColor="blackAlpha.700">
              Resources
            </Text>
            <Text>
              Blog
            </Text>
            <Text>
              News Letters
            </Text>
            <Text>
              Events
            </Text>
            <Text>
              Help Centre
            </Text>
            <Text>
              Tutorials
            </Text>
            <Text>
              Support
            </Text>
          </VStack>
          <VStack alignItems="flex-start">
            <Text fontSize="15px" textColor="blackAlpha.700">
              Social
            </Text>
            <Text>
              Twitter
            </Text>
            <Text>
              LinkedIn
            </Text>
            <Text>
              Facebook
            </Text>
            <Text>
              Github
            </Text>
            <Text>
              Angel List
            </Text>
            <Text>
              Dribble
            </Text>
          </VStack>
        </HStack>
        <VStack alignItems="flex-start">
          <Text fontSize="15px" textColor="blackAlpha.700">
            Legal
          </Text>
          <Text>
            Terms
          </Text>
          <Text>
            Privacy
          </Text>
          <Text>
            Cookies
          </Text>
          <Text>
            Licenses
          </Text>
          <Text>
            Settings
          </Text>
          <Text>
            Contact
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};