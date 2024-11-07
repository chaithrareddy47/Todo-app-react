// import  { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   const addTodo = () => {
//     setTodos([...todos, newTodo]);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Simple To-Do List</h2>
//       <input
//         type="text"
//         placeholder="Add a new task"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    setTodos([...todos, newTodo]); // Add new todo to list
    setNewTodo(""); // Clear the input field after adding
  };

  const deleteTodo = (index) => {
   const updatedTodos = todos.filter((todo, i) => i !== index);
 // Remove todo at the specific index
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple To-Do List</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
