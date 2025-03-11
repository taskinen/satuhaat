/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @param {Array} array - The array to shuffle
 * @returns {Array} A new shuffled array
 */
const shuffle = (array) => {
  // Create a copy of the array to avoid mutating the original
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Pick a random element from the remaining unshuffled elements
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};

/**
 * Toggle the selected state of a bingo cell
 * @param {HTMLElement} cell - The cell to toggle
 */
const toggleSelected = (cell) => {
  const isSelected = cell.classList.toggle('selected');
  cell.setAttribute('aria-selected', isSelected ? 'true' : 'false');
  
  // Check for bingo after toggling
  if (isSelected) {
    checkForBingo();
  }
};

/**
 * Check if there's a bingo (5 selected cells in a row, column, or diagonal)
 */
const checkForBingo = () => {
  const grid = document.querySelector('table');
  const rows = grid.querySelectorAll('tr');
  let hasBingo = false;
  
  // Check horizontal lines
  for (let i = 0; i < 5; i++) {
    const cells = rows[i].querySelectorAll('td');
    if (cells.length === 5 && [...cells].every(cell => cell.classList.contains('selected'))) {
      hasBingo = true;
      highlightBingoLine([...cells]);
      break;
    }
  }
  
  // Check vertical lines
  if (!hasBingo) {
    for (let i = 0; i < 5; i++) {
      const column = [];
      for (let j = 0; j < 5; j++) {
        column.push(rows[j].querySelectorAll('td')[i]);
      }
      if (column.every(cell => cell.classList.contains('selected'))) {
        hasBingo = true;
        highlightBingoLine(column);
        break;
      }
    }
  }
  
  // Check diagonal (top-left to bottom-right)
  if (!hasBingo) {
    const diagonal1 = [];
    for (let i = 0; i < 5; i++) {
      diagonal1.push(rows[i].querySelectorAll('td')[i]);
    }
    if (diagonal1.every(cell => cell.classList.contains('selected'))) {
      hasBingo = true;
      highlightBingoLine(diagonal1);
    }
  }
  
  // Check diagonal (top-right to bottom-left)
  if (!hasBingo) {
    const diagonal2 = [];
    for (let i = 0; i < 5; i++) {
      diagonal2.push(rows[i].querySelectorAll('td')[4 - i]);
    }
    if (diagonal2.every(cell => cell.classList.contains('selected'))) {
      hasBingo = true;
      highlightBingoLine(diagonal2);
    }
  }
  
  // Celebrate if bingo found
  if (hasBingo) {
    celebration();
  }
};

/**
 * Highlight a line of cells that forms a bingo
 * @param {Array<HTMLElement>} cells - Array of cells to highlight
 */
const highlightBingoLine = (cells) => {
  cells.forEach(cell => {
    cell.classList.add('bingo-highlight');
    // Remove the highlight after animation completes
    setTimeout(() => {
      cell.classList.remove('bingo-highlight');
    }, 3000);
  });
};

/**
 * Create and run the confetti celebration animation
 */
const celebration = () => {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    // Create confetti on both sides of the screen
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    });
  }, 250);
};

// Export functions for use in other files
window.shuffle = shuffle;
window.toggleSelected = toggleSelected;
window.checkForBingo = checkForBingo;
