const input = document.querySelector(".search-box input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = input.value.trim();

    if (query !== "") {
      window.location.href =
        "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
  }
});