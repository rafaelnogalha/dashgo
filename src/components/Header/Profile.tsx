import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>Rafael Nogalha</Text>
          <Text 
            color="gray.300"
            fontSize="small"
          >rafaelnogalha@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Rafael Nogalha" src="https://github.com/rafaelnogalha.png"/>
    </Flex>
  );
}