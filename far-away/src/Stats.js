export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((el) => el.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go!"
          : `You have ${numItems} Items on your list, and you aleary packed ${numPacked} items
          ${percentage}(%)`}
      </em>
    </footer>
  );
}
