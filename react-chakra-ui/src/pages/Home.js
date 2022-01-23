import React from "react";
import {
  Container,
  Box,
  Heading,
  VStack,
  Text,
  Input,
  Flex,
  Button,
  Checkbox,
} from "@chakra-ui/react";

export default function Home() {
  const [todos, setTodos] = React.useState([]);
  return (
    <Container maxW="300px" w="100%" m="100px auto" textAlign="center">
      <Box position="relative">
        <Button
          position="absolute"
          left="0"
          bottom="0"
          size="sm"
          onClick={() => {
            setTodos(
              todos.concat({
                id: uuid(),
                done: false,
                todo: "",
              })
            );
          }}
        >
          +
        </Button>
        <Heading as="h1">TODO</Heading>
      </Box>
      <VStack mt="40px" as="ol">
        {todos.map(({ id, done, todo }) => (
          <Flex id={id} as="li" textAlign="left" w="100%" alignItems="center">
            <Checkbox
              size="lg"
              p="0"
              mr="16px"
              height="fit-content"
              _hover={{
                background: "gray.100",
              }}
              _checked={{
                textDecoration: "line-through",
              }}
            />
            <Input
              placeholder="input todo ..."
              border="none"
              borderRadius="0"
              _focus={{
                boxShadow: "0 1px #999",
              }}
            />
          </Flex>
        ))}
      </VStack>
    </Container>
  );
}

function uuid() {
  return Math.random().toString(32).split(".")[1];
}