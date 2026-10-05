// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  // Set initial theme
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme)
    updateToggleButton(savedTheme)
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute("data-theme", "dark")
    updateToggleButton("dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light")
    updateToggleButton("light")
  }

  // Toggle theme when button is clicked
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"

      // Update theme
      document.documentElement.setAttribute("data-theme", newTheme)
      localStorage.setItem("theme", newTheme)

      // Update button appearance
      updateToggleButton(newTheme)
    })
  }

  // Update toggle button appearance based on current theme
  function updateToggleButton(theme) {
    const themeToggle = document.getElementById("theme-toggle")
    if (!themeToggle) return

    const moonIcon = themeToggle.querySelector(".moon-icon")
    const sunIcon = themeToggle.querySelector(".sun-icon")

    if (theme === "dark") {
      moonIcon.style.display = "none"
      sunIcon.style.display = "block"
      themeToggle.setAttribute("aria-label", "Skift til lys tilstand")
      themeToggle.setAttribute("title", "Skift til lys tilstand")
    } else {
      moonIcon.style.display = "block"
      sunIcon.style.display = "none"
      themeToggle.setAttribute("aria-label", "Skift til mørk tilstand")
      themeToggle.setAttribute("title", "Skift til mørk tilstand")
    }
  }
})
