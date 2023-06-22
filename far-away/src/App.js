import Forms from "./Forms";
import { useState } from "react";
import { Stats } from "./Stats";
import PackageList from "./Package-list";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 4, packed: true },
];

function Logo() {
  return <h1>Far Away</h1>;
}

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed) setItems((items) => []);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(items);
  }

  function handleDeleteItem(id) {
    setItems((items) => {
      return [...items.filter((el) => el.id !== id)];
    });
  }
  return (
    <div className="app">
      <Logo></Logo>
      <Forms onAddItmes={handleAddItem}></Forms>
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteItems={handleDeleteItems}
      ></PackageList>
      <Stats items={items}></Stats>
    </div>
  );
}
