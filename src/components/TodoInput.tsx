import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { TextField, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todos);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (text.trim()) {
      const isTextInTodos = todos.some((todo) => todo.text === text);
      if (isTextInTodos) {
        alert(`Todo "${text}" already exists!`);
        return;
      }

      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="New Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
};

export default TodoInput;
