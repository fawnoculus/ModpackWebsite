let body = document.body
let navMenu = document.getElementById('navMenu')

function darkModeToggle() {
  if (body.className == 'dunkel') {
    darkMode(false)
  } else {
    darkMode(true)
  }
}
function darkMode(dark) {
  if (dark) {
    body.className = 'dunkel'
    localStorage.setItem('Darkmode', 'true')
  } else if (!dark) {
    body.className = 'hell'
    localStorage.setItem('Darkmode', 'false')
  }
}

// show Nav item toggle
function showNavItems() {
  if (navMenu.className === 'navMenu') {
    navMenu.className += ' responsive'
  } else {
    navMenu.className = 'navMenu'
  }
}

// get Darkomode from localstorage
if (localStorage.getItem('Darkmode') === 'true') {
  darkMode(true)
} else if (localStorage.getItem('Darkmode') === 'false') {
  darkMode(false)
} else {
  localStorage.setItem('Darkmode', 'true')
  darkMode(true)
}
