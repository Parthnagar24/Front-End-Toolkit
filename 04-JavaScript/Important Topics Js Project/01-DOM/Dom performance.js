// Assume a list element with id="big-list" exists.
const bigListContainer = document.getElementById("big-list");
const data = ["Item A", "Item B", "Item C", "Item D", "Item E", "Item F"]; // Imagine 1000 items

// 1. CREATE FRAGMENT: Create a special, lightweight container in memory.
const fragment = document.createDocumentFragment();
// WHY: The DocumentFragment exists only in memory; it is NOT part of the live DOM tree.
// Manipulating it causes ZERO Reflows or Repaints.

data.forEach((itemText) => {
  const listItem = document.createElement("li");
  listItem.textContent = itemText;

  // 2. APPEND TO FRAGMENT: Build the structure off-screen.
  fragment.appendChild(listItem);
  // This step is fast and cheap because it doesn't affect the visible page.
});

// 3. SINGLE INSERTION: Insert the entire completed fragment into the live DOM.
bigListContainer.appendChild(fragment);
// WHY: Inserting the fragment triggers only ONE single Reflow/Repaint,
// regardless of how many items it contained, leading to vastly better performance.
