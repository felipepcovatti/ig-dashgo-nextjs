import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>John Doe</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          john.doe@email.com
      </Text>
      </Box>

      <Avatar size="md" name="John Doe" src="https://randomuser.me/api/portraits/men/33.jpg" />
    </Flex>
  )
}