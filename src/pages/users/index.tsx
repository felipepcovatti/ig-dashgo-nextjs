import { Box, Flex, Heading, Button, Icon, IconButton, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Usuário
                </Th>
                {isWideVersion && (
                  <Th>
                    Data de cadastro
                  </Th>
                )}
                <Th w="8" />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text fontSize="sm" color="gray.300">john.doe@email.com</Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit"
                      as="a"
                      size="sm"
                      icon={<Icon as={RiPencilLine} fontSize="16" />}
                      variant="solid"
                      colorScheme="purple"
                    />
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text fontSize="sm" color="gray.300">john.doe@email.com</Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit"
                      as="a"
                      size="sm"
                      icon={<Icon as={RiPencilLine} fontSize="16" />}
                      variant="solid"
                      colorScheme="purple"
                    />
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text fontSize="sm" color="gray.300">john.doe@email.com</Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    04 de Abril, 2021
                  </Td>
                )}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  ) : (
                    <IconButton
                      aria-label="Edit"
                      as="a"
                      size="sm"
                      icon={<Icon as={RiPencilLine} fontSize="16" />}
                      variant="solid"
                      colorScheme="purple"
                    />
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}