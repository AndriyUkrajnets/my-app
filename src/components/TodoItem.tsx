import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo, editTodo } from "../store/todoSlice";
import {
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

type TodoProps = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoItem: React.FC<TodoProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id, text: editText }));
      setIsEditing(false);
    }
  };

  return (
    <ListItem
      sx={{
        textDecoration: completed ? "line-through" : "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Checkbox checked={completed} onChange={() => dispatch(toggleTodo(id))} />
      {isEditing ? (
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <ListItemText
          primary={text}
          sx={{ textDecoration: completed ? "line-through" : "none" }}
        />
      )}

      {isEditing ? (
        <>
          <IconButton onClick={handleSave} color="primary">
            <SaveIcon />
          </IconButton>
          <IconButton onClick={() => setIsEditing(false)} color="error">
            <CancelIcon />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton onClick={() => setIsEditing(true)} color="info">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(removeTodo(id))} color="error">
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
