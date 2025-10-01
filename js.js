    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.remove("light", "dark");
      body.classList.add(savedTheme);
      toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    } else {
      body.classList.add("light"); // Default to light mode
      toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
      if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
      } else {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
      }
    });