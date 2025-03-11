/**
 * Bingo game module for Satuhäät & Unelmahäät bingo
 */

// Translations object
const translations = {
  'fi': {
    'title': 'Satuhäät ja Unelmahäät bingo',
    'refreshButton': 'Uusi ruudukko!',
    'centerCell': 'Enya',
    'items': [
      "A Le Coq",
      "Ajetaan farmariautolla",
      "Appivanhemmat vetävät röökiä",
      "Asuste, jossa on automerkin nimi",
      "Best man kiinnittää hääopasteita",
      "Crocsit",
      "Ensitapaamiseen liittyy baari-ilta",
      "Haetaan hääviinaa Tallinnasta",
      "\"Heh heh.\"",
      "Hääauton koristeiden asettelu",
      "Hääjärjestelyistä tulee riitaa",
      "Hääkampaus sateessa",
      "Hääkimpun noutaminen kukkakaupasta",
      "Hääpari käy noutamassa sormukset",
      "Hääpari pussaa",
      "Hääpari touhuaa lasten kanssa ulkona",
      "Hääpari yhdessä lenkillä",
      "Hääparilla on lemmikkieläin",
      "Hääpuvun sovitus",
      "Itse tehty hääruno",
      "Ja vihdoin kaikki on hyvin",
      "Joku laulaa karaokea",
      "Joku on ammatiltaan lähihoitaja",
      "Joku rassaa autoa",
      "Juodaan keittiössä kahvit",
      "Kiusallinen morsiamen ryöstö",
      "Kuvioitu sivukalju",
      "Lapsi parkuu kirkossa",
      "Lapsia edellisistä suhteista",
      "Lyhythihainen kauluspaita",
      "Mersu",
      "Morsiamella on krapula",
      "Morsiamen rakennekynnet",
      "Morsian hankkii ripsienpidennykset",
      "Morsian itkee ja/tai raivoaa",
      "Morsian vetää röökiä",
      "\"Näkymättömät\" silikoniolkaimet",
      "Olkaimettoman topin/mekon nostelu",
      "Peltomaisema",
      "Pikkujoulujen väriset kravatit",
      "Pinkki raita hiuksissa",
      "Pyyhitään hikeä naamasta",
      "Riitaa hääpaikalla koristeluista tai istumajärjestyksestä",
      "Ruma tatuointi",
      "Ruostetta autossa",
      "Sormukset hukassa hääpäivänä",
      "Sulhanen kiinnittää hääopasteita",
      "Sulhanen on kännissä",
      "Sulhanen vetää röökiä",
      "Sulhasella on harmaa puku"
    ]
  },
  'en': {
    'title': 'Fairy Tale Weddings and Dream Weddings Bingo',
    'refreshButton': 'New board!',
    'centerCell': 'Enya',
    'items': [
      "A Le Coq",
      "Driving in a station wagon",
      "In-laws smoking",
      "Accessory with a car brand name",
      "Best man putting up wedding signs",
      "Crocs",
      "First meeting involves a night at the bar",
      "Getting wedding alcohol from Tallinn",
      "\"Heh heh.\"",
      "Decorating the wedding car",
      "Arguments about wedding arrangements",
      "Wedding hairstyle in the rain",
      "Picking up the wedding bouquet from the flower shop",
      "Wedding couple collecting the rings",
      "Wedding couple kissing",
      "Wedding couple playing with children outside",
      "Wedding couple jogging together",
      "Wedding couple has a pet",
      "Wedding dress fitting",
      "Self-made wedding poem",
      "And finally everything is fine",
      "Someone singing karaoke",
      "Someone is a practical nurse by profession",
      "Someone fixing a car",
      "Drinking coffee in the kitchen",
      "Awkward bride kidnapping",
      "Patterned side haircut",
      "Child crying in church",
      "Children from previous relationships",
      "Short-sleeved dress shirt",
      "Mercedes car",
      "Bride has a hangover",
      "Bride's fake nails",
      "Bride gets eyelash extensions",
      "Bride crying and/or raging",
      "Bride smoking",
      "\"Invisible\" silicone straps",
      "Pulling up a strapless top/dress",
      "Field landscape",
      "Office Christmas party colored ties",
      "Pink streak in hair",
      "Wiping sweat from face",
      "Argument at the wedding venue about decorations or seating arrangements",
      "Ugly tattoo",
      "Rust on the car",
      "Rings missing on the wedding day",
      "Groom putting up wedding signs",
      "Groom is drunk",
      "Groom smoking",
      "Groom has a gray suit"
    ]
  },
  'snt': {
    'title': 'Wah-Tah Ki-Tiki Bingo',
    'refreshButton': 'Taka-Nui!',
    'centerCell': 'Enya',
    'items': [
      "A Le Ku-ku",
      "Ti-ti wagga-wagga",
      "Maka-paka oo-oo tiki",
      "Kala-ma nama-nama",
      "Ki-ki toko paka-mata",
      "Kroka-talas",
      "Wu-bu ji-ji bula-bula",
      "Bala-bala kuma na-na",
      "\"Ha-ha.\"",
      "Koo-koo aka-maka tanga",
      "Waga-waga tiki-too mala",
      "Kala-hala toka-toka wawa",
      "Piki-liki haka-maka",
      "Ti-ki mo-mo wi-wi",
      "Paka-maka mu-mu",
      "Ti-ki waka-taka bo-bo",
      "Poko-moko hapa-lapa",
      "Tiki-liki mala-pala",
      "Waka-maka ki-ki",
      "Hiti-hiki kaka-laka",
      "Hola maka tiki",
      "Maka-laka oo-oo",
      "Ki-ki pala-nala",
      "Ti-ki laka-waka",
      "Gu-gu kafa-kafa",
      "Waka-waka ki-ki ni-ni",
      "Kala-bala ti-ki",
      "Bo-bo waka-taka",
      "Ma-ma ki-ki ti-ti",
      "Haka-laka piki",
      "Me-me ku-ku",
      "Ti-ki mala-pala kaka",
      "Ki-ki naka-baka",
      "Ti-ki ha-ka ku-ku pi-pi",
      "Ti-ki bu-bu waka-taka",
      "Ti-ki oo-oo tiki",
      "Siliko-naka oo-la-la",
      "Topa-topa waka-maka",
      "Ti-ki mala-pala",
      "Kala-wala ti-ki",
      "Piki pala-nala",
      "Fala-mala ti-ki waka",
      "Waka-laka ti-ki kala-bala",
      "Tatu-batu kiki",
      "Ti-ki kala-pala",
      "Wi-wi kaka-laka tiki-tiki",
      "Ki-ki toko paka-mata",
      "Ki-ki bu-bu waka-taka",
      "Ki-ki oo-oo tiki",
      "Ki-ki ga-ga ku-ku"
    ]
  }
};

/**
 * Get the preferred language from localStorage or default to 'fi'
 * @returns {string} Language code
 */
const getPreferredLanguage = () => {
  return localStorage.getItem('language') || 'fi';
};

/**
 * Set the current language
 * @param {string} lang - Language code ('fi', 'en', or 'snt')
 */
const setLanguage = (lang) => {
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('language', lang);
  updateLanguageToggleButton(lang);
  updatePageText(lang);
};

/**
 * Update the language toggle button UI
 * @param {string} lang - Current language code
 */
const updateLanguageToggleButton = (lang) => {
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    if (item.getAttribute('data-lang') === lang) {
      item.classList.add('active');
      item.setAttribute('aria-current', 'true');
    } else {
      item.classList.remove('active');
      item.removeAttribute('aria-current');
    }
  });
};

/**
 * Update all text content on the page to the selected language
 * @param {string} lang - Language code
 */
const updatePageText = (lang) => {
  document.getElementById('title').textContent = translations[lang].title;
  
  const refreshButton = document.getElementById('refresh-button');
  if (refreshButton) {
    refreshButton.textContent = translations[lang].refreshButton;
  }
  
  const cells = document.querySelectorAll('.square-cell');
  if (cells.length > 0) {
    cells.forEach((cell) => {
      const itemIndex = cell.getAttribute('data-item-index');
      if (itemIndex === 'center') {
        cell.textContent = translations[lang].centerCell;
      } else if (itemIndex !== null) {
        cell.textContent = translations[lang].items[parseInt(itemIndex)];
      }
    });
  }
  
  document.title = translations[lang].title;
};

/**
 * Get the preferred theme from localStorage or system preference
 * @returns {string} 'dark' or 'light'
 */
const getPreferredTheme = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * Set the current theme
 * @param {string} theme - 'dark' or 'light'
 */
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeToggleButton(theme);
};

/**
 * Update the theme toggle button UI
 * @param {string} theme - Current theme
 */
const updateThemeToggleButton = (theme) => {
  const button = document.getElementById('theme-toggle-btn');
  const icon = button.querySelector('i');
  const srText = button.querySelector('.sr-only');
  
  if (theme === 'dark') {
    icon.className = 'bi bi-moon-fill';
    if (srText) srText.textContent = 'Switch to light mode';
  } else {
    icon.className = 'bi bi-sun-fill';
    if (srText) srText.textContent = 'Switch to dark mode';
  }
};

/**
 * Toggle between dark and light theme
 */
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
};

/**
 * Generate the HTML for a bingo grid
 * @param {Array<number>} itemIndices - Array of indices for the bingo items
 * @param {string} lang - Current language
 * @returns {string} HTML string for the bingo table
 */
const generateBingoGridHtml = (itemIndices, lang) => {
  const selectedItems = [...itemIndices]; // Make a copy
  
  let html = '<table class="table table-bordered" role="grid" aria-label="Bingo board">';
  
  for (let i = 0; i < 5; i++) {
    html += '<tr role="row">';
    for (let j = 0; j < 5; j++) {
      if (i === 2 && j === 2) { // Center cell with Enya
        html += `<td class="square-cell align-middle selected" 
                    onclick="toggleSelected(this)" 
                    data-item-index="center"
                    tabindex="0"
                    role="gridcell"
                    aria-selected="true"
                    onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleSelected(this); }">
                ${translations[lang].centerCell}
                </td>`;
      } else {
        const itemIndex = selectedItems.shift();
        html += `<td class="square-cell align-middle" 
                    onclick="toggleSelected(this)" 
                    data-item-index="${itemIndex}"
                    tabindex="0"
                    role="gridcell"
                    aria-selected="false"
                    onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleSelected(this); }">
                ${translations[lang].items[itemIndex]}
                </td>`;
      }
    }
    html += '</tr>';
  }
  html += '</table>';
  
  return html;
};

/**
 * Initialize the bingo board
 */
const initializeBingo = () => {
  const preferredLang = getPreferredLanguage();
  document.documentElement.setAttribute('lang', preferredLang);
  
  setTheme(getPreferredTheme());
  
  // Create the bingo grid
  const itemPool = [...Array(translations[preferredLang].items.length).keys()];
  const shuffledIndices = shuffle(itemPool).slice(0, 24);
  
  // Generate the bingo grid HTML and insert it into the page
  const mainElement = document.querySelector('main');
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = generateBingoGridHtml(shuffledIndices, preferredLang);
  mainElement.appendChild(container);
  
  // Add the refresh button
  const footerElement = document.querySelector('footer');
  const refreshDiv = document.createElement('div');
  refreshDiv.className = 'text-center refresh-container';
  
  const refreshButton = document.createElement('button');
  refreshButton.id = 'refresh-button';
  refreshButton.className = 'btn btn-primary';
  refreshButton.onclick = function() { window.location.reload(); };
  refreshButton.innerHTML = `<i class="bi bi-arrow-clockwise me-2"></i>${translations[preferredLang].refreshButton}`;
  refreshButton.setAttribute('aria-label', translations[preferredLang].refreshButton);
  
  refreshDiv.appendChild(refreshButton);
  footerElement.appendChild(refreshDiv);
  
  // Set the language which will update text without reshuffling
  setLanguage(preferredLang);
  
  // Set up event listeners
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
  
  // Add click handlers for language dropdown items
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
  
  // Watch for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
};

// Export functions for use in other files
window.translations = translations;
window.getPreferredLanguage = getPreferredLanguage;
window.setLanguage = setLanguage;
window.getPreferredTheme = getPreferredTheme;
window.setTheme = setTheme;
window.toggleTheme = toggleTheme;
window.generateBingoGridHtml = generateBingoGridHtml;
window.initializeBingo = initializeBingo; 