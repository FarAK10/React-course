import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 4, packed: true },
];

function Logo() {
  return <h1>Far Away</h1>;
}

function Forms({ onAddItmes }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItmes(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(el) => setDescription(() => el.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackageList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item}></Item>
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red", fontSize: "34px" }}>&times;</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x Items on your list, and you aleary packed X(%)</em>
    </footer>
  );
}

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo></Logo>
      <Forms onAddItmes={handleAddItem}></Forms>
      <PackageList items={items}></PackageList>
      <Stats></Stats>
    </div>
  );
}
