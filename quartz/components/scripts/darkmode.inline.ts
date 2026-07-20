const saved = localStorage.getItem("theme")
let currentTheme: string
if (saved === "dark" || saved === "light") {
  currentTheme = saved
} else {
  const mqDark = window.matchMedia("(prefers-color-scheme: dark)")
  const mqLight = window.matchMedia("(prefers-color-scheme: light)")
  if (mqDark.matches) {
    currentTheme = "dark"
  } else if (mqLight.matches) {
    currentTheme = "light"
  } else {
    const h = new Date().getHours()
    currentTheme = h >= 18 || h < 6 ? "dark" : "light"
  }
}
document.documentElement.setAttribute("saved-theme", currentTheme)

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = () => {
    const newTheme =
      document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  const themeChange = (e: MediaQueryListEvent) => {
    const newTheme = e.matches ? "dark" : "light"
    document.documentElement.setAttribute("saved-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    emitThemeChangeEvent(newTheme)
  }

  for (const darkmodeButton of document.getElementsByClassName("darkmode")) {
    darkmodeButton.addEventListener("click", switchTheme)
    window.addCleanup(() => darkmodeButton.removeEventListener("click", switchTheme))
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("change", themeChange)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange))
})
