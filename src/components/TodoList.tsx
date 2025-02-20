import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TodoItem from "./TodoItem";
import { List, Typography } from "@mui/material";

const TodoList: React.FC = () => {
  const { todos, filter } = useSelector((state: RootState) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true; // Show all
  });

  return (
    <>
      {filteredTodos.length === 0 ? (
        <Typography variant="h6" align="center">
          No {filter.toLowerCase()} todos!
        </Typography>
      ) : (
        <List>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </List>
      )}
    </>
  );
};

export default TodoList;
