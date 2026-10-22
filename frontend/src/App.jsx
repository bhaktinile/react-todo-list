
import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please enter a todo!");
      return;
    }

    if (editId !== null) {
      
      setTodos(
        todos.map((todo) =>
          todo.id === editId
            ? { ...todo, title: inputValue }
            : todo
        )
      );

      setEditId(null);
    } else {
      
      const newTodo = {
        id: Date.now(),
        title: inputValue,
        status: "Pending",
      };

      setTodos([...todos, newTodo]);
    }

    setInputValue("");
  };

  
  const handleUpdateTodo = (todo) => {
    setInputValue(todo.title);
    setEditId(todo.id);
  };

  
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    if (editId === id) {
      setEditId(null);
      setInputValue("");
    }
  };


  const handleStatusChange = (id, newStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: newStatus }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="header">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo..."
        />

        <button onClick={handleAddTodo}>
          {editId !== null ? "Save Update" : "Add Todo"}
        </button>

        {editId !== null && (
          <button className="cancel-btn" onClick={() => { setEditId(null); setInputValue("");}}> Cancel </button>
        )}
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th><br></br>
              <th>Name</th><br></br>
            </tr>
          </thead>

          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td colSpan="2">No todos added yet.</td>
              </tr>
            ) : (
              todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>
                    <select value={todo.status} onChange={(e) =>handleStatusChange(todo.id, e.target.value)}>
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed"> Complete </option>
                    </select>
                  </td>
                  <td>
                    <button className="update-btn" onClick={() => handleUpdateTodo(todo)}> Update </button>
                      
                    <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}> Delete </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
