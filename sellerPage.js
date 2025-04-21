function toggleDropdown() {
    const menu = document.getElementById("season-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  function selectSeason(season) {
    document.getElementById("selected-season").innerText = season;
    document.getElementById("season-menu").style.display = "none";
  }
  
  // Optional: Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
      document.getElementById("season-menu").style.display = "none";
    }
  });
  