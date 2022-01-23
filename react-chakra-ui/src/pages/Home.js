import React from "react";
import {
  Container,
  Box,
  Heading,
  VStack,
  Input,
  Flex,
  Button,
  Checkbox,
  useColorMode,
} from "@chakra-ui/react";

export default function Home() {
  const [todos, setTodos] = React.useState([
    { id: uuid(), done: false, todo: "다크 테마 넣기" },
  ]);
  const setTodoByIndex = (index, todo) => {
    setTodos(
      todos.map((originTodo, idx) => {
        return idx === index ? todo : originTodo;
      })
    );
  };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode} mt="12px" ml="12px">
        {" "}
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
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
          {todos.map(({ id, done, todo }, index) => (
            <Flex id={id} as="li" textAlign="left" w="100%" alignItems="center">
              <Checkbox
                size="lg"
                p="0"
                mr="16px"
                height="fit-content"
                onChange={(e) => {
                  setTodoByIndex(index, {
                    done: e.target.checked,
                    id,
                    todo,
                  });
                }}
              />
              <Input
                placeholder="input todo ..."
                border="none"
                borderRadius="0"
                value={todo}
                _focus={{
                  boxShadow: "0 1px #999",
                }}
                textDecoration={done ? "line-through" : "none"}
                onChange={(e) => {
                  setTodoByIndex(index, {
                    todo: e.target.value,
                    id,
                    done,
                  });
                }}
              />
            </Flex>
          ))}
        </VStack>
      </Container>
    </>
  );
}

function uuid() {
  return Math.random().toString(32).split(".")[1];
}
