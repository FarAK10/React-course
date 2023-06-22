import { useState } from "react";

export default function PackageList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteItems,
}) {
  const [sortBy, setSortBy] = useState("packed");
  let sortedItems = [];

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sorts by input order</option>
          <option value="description">Sorts by description</option>
          <option value="packed">Sorts by packed status</option>
        </select>
        <button
          onClick={() => {
            onDeleteItems();
          }}
        >
          Clear list
        </button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        style={{ color: "red", fontSize: "34px" }}
        onClick={() => onDeleteItem(item.id)}
      >
        &times;
      </button>
    </li>
  );
}
