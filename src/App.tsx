import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import { Container, Paper, Typography } from "@mui/material";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoClear from "./components/TodoClear";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "left", ml: 10 }}>
      <Greeting name="John" />
      <Counter />
      <DataFetcher />
      <Paper sx={{ p: 3, textAlign: "center" }} elevation={3}>
        <Typography variant="h4" gutterBottom>
          Todo App
        </Typography>
        <TodoInput />
        <TodoFilter />
        <TodoList />
        <TodoClear todoState="COMPLETED" />
      </Paper>
    </Container>
  );
};

export default App;
