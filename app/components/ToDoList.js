'use client';

import { useState } from 'react';
import { Box, Button, Container, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      addTask();
    }
  }

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const removeCompletedTasks = () => {
    const newTasks = tasks.filter(task => !task.completed);
    setTasks(newTasks);
  }

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    newTasks.sort((a, b) => a.completed - b.completed);
    setTasks(newTasks);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Box component="h1" textAlign="center" mb={3}>To-Do List</Box>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addTask}
        style={{ marginBottom: '20px' }}
      >
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            divider
            onClick={() => toggleTaskCompletion(index)}
            style={{
              cursor: 'pointer'
            }}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => removeTask(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={task.text}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            />
          </ListItem>
        ))}
      </List>
      {tasks.some(task => task.completed) && (
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={removeCompletedTasks}
          style={{ marginTop: '20px' }}
        >
          Remove Completed Tasks
        </Button>
      )}
    </Container>
  );
}
