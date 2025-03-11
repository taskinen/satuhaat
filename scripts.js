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
};

// Export functions for use in other files
window.shuffle = shuffle;
window.toggleSelected = toggleSelected;
