import "./styles.css";
import { useState } from "react";
/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  var [city, setCity] = useState();

  const addCities = () => {
    setTodoItems((todoItems) => {
      return [...todoItems, city];
    });
  };

  const removeItem = (key) => {
    setTodoItems((todoItems) => {
      return todoItems.filter((item) => (item !== key ? item : null));
    });
  };

  return (
    <div className="App">
      <h1>Hello Todo list</h1>
      <input
        type="text"
        placeholder="Enter City"
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      <button onClick={addCities}>Add</button>

      <ul>
        {todoItems.map((item) => (
          <li key={item}>
            {item} <button onClick={() => removeItem(item)}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
