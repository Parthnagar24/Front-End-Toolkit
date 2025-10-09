// Assume we have a <ul> with id="todo-list" and a button with id="add-btn" in the HTML.

// --- Selecting Elements ---
const list = document.getElementById("todo-list");
const addButton = document.getElementById("add-btn");

// --- Event Listener ---
let taskCount = 1;

// WHY: Event listeners are the primary way to make a webpage interactive.
// The 'click' event is fired and captured by the event loop.
addButton.addEventListener("click", () => {
  // 1. CREATE: Create a new list item element.
  const newItem = document.createElement("li");

  // 2. CONFIGURE: Set content and attributes.
  newItem.textContent = `Task ${taskCount++}`;
  newItem.classList.add("task-item");

  // 3. ATTACH (Insert): Add the new element to the list (the parent node).
  list.appendChild(newItem);

  // 4. ADD DELETION FUNCTIONALITY (Nested Listener)
  newItem.addEventListener("click", (e) => {
    // e.target refers to the specific <li> that was clicked.
    // ACTION: Remove the clicked element from its parent (the <ul>).
    e.target.remove(); // A modern, simple way to remove an element.
    console.log(`Task ${e.target.textContent} deleted.`);
  });
});
// HOW IT WORKS: The anonymous function inside addEventListener is the 'callback'.
// It's placed in the queue by the browser's Event Loop when the click occurs.
