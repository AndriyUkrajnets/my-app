import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/todoSlice";
import { RootState } from "../store/store";
import { ButtonGroup, Button, Typography, Box } from "@mui/material";

const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, filter } = useSelector((state: RootState) => state.todos);

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const active = total - completed;

  return (
    <Box sx={{ textAlign: "center", my: 2 }}>
      <Typography variant="body2" align="center" sx={{ my: 2 }}>
        {active} items left | {completed} completed
      </Typography>
      <ButtonGroup sx={{ my: 2 }}>
        <Button
          variant={filter === "ALL" ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter("ALL"))}
        >
          All
        </Button>
        <Button
          variant={filter === "ACTIVE" ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter("ACTIVE"))}
        >
          Active
        </Button>
        <Button
          variant={filter === "COMPLETED" ? "contained" : "outlined"}
          onClick={() => dispatch(setFilter("COMPLETED"))}
        >
          Completed
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TodoFilter;
