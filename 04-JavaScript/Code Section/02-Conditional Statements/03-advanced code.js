const dayOfWeek = 3; // 1 = Mon, 7 = Sun

let activity;

switch (dayOfWeek) {
  case 1: // Checks if dayOfWeek === 1
  case 2: // Checks if dayOfWeek === 2
  case 3: // Checks if dayOfWeek === 3 (This one matches)
  case 4:
  case 5:
    // Because there are no 'break' statements, execution 'falls through'
    // from case 1, 2, 3, 4, to 5. This is a common pattern for grouping cases.
    activity = "Work/Study Mode";
    break; // IMPORTANT: 'break' stops the switch and exits the block.
  case 6:
    activity = "Start the weekend party!";
    break;
  case 7:
    activity = "Relax and recharge.";
    break;
  default:
    // The 'default' is like the 'else'—it runs if no case matches.
    activity = "Invalid day number.";
  // No 'break' needed here as it's the last statement.
}

console.log(`Day ${dayOfWeek}: ${activity}`);
// Output: Day 3: Work/Study Mode
