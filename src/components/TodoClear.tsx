import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Filter } from "../types/todoTypes";
import { removeTodos } from "../store/todoSlice";
import { Button, Box } from "@mui/material";

type Props = {
  todoState: Filter;
};

function TodoClear({ todoState }: Props) {
  const { todos } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const handleClear = () => {
    switch (todoState) {
      case "ACTIVE":
        const activeIds = todos
          .filter((todo) => !todo.completed)
          .map((todo) => todo.id);
        dispatch(removeTodos(activeIds));
        break;
      case "COMPLETED":
        const completedIds = todos
          .filter((todo) => todo.completed)
          .map((todo) => todo.id);
        dispatch(removeTodos(completedIds));
        break;
      default:
        dispatch(removeTodos(todos.map((todo) => todo.id)));
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2, justifyContent: "center" }}>
      <Button variant="contained" color="secondary" onClick={handleClear}>
        Clear Completed
      </Button>
    </Box>
  );
}

export default TodoClear;
